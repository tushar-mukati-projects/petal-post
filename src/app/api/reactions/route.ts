import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { addReactionSchema } from "@/lib/validators";

// POST - Add or toggle a reaction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = addReactionSchema.parse(body);

    const supabase = await createClient();

    // Check if reaction already exists (toggle behavior)
    const { data: existing } = await supabase
      .from("reactions")
      .select("id")
      .eq("bouquet_id", parsed.bouquetId)
      .eq("session_id", parsed.sessionId)
      .eq("emoji", parsed.emoji)
      .single();

    if (existing) {
      // Remove existing reaction (toggle off)
      await supabase.from("reactions").delete().eq("id", existing.id);
      return NextResponse.json({ action: "removed" });
    }

    // Add new reaction
    const { error } = await supabase.from("reactions").insert({
      bouquet_id: parsed.bouquetId,
      session_id: parsed.sessionId,
      emoji: parsed.emoji,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ action: "added" }, { status: 201 });
  } catch (err) {
    if (err instanceof Error && err.name === "ZodError") {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET - Get reaction counts for a bouquet
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bouquetId = searchParams.get("bouquetId");
    const sessionId = searchParams.get("sessionId") || "";

    if (!bouquetId) {
      return NextResponse.json({ error: "bouquetId is required" }, { status: 400 });
    }

    const supabase = await createClient();

    // Get all reactions for this bouquet
    const { data: reactions, error } = await supabase
      .from("reactions")
      .select("emoji, session_id")
      .eq("bouquet_id", bouquetId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const counts = { heart: 0, fire: 0, sparkle: 0, wow: 0, total: 0 };
    const userReactions: string[] = [];

    (reactions || []).forEach((r) => {
      const emoji = r.emoji as keyof typeof counts;
      if (emoji in counts) {
        counts[emoji]++;
        counts.total++;
      }
      if (r.session_id === sessionId) {
        userReactions.push(r.emoji);
      }
    });

    return NextResponse.json({ ...counts, userReactions });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
