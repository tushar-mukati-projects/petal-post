import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { addReactionSchema } from "@/lib/validators";

// POST - Add a reaction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = addReactionSchema.parse(body);

    const supabase = await createClient();

    const { error } = await supabase.from("reactions").insert({
      floral_id: parsed.floralId,
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

// GET - Get reaction counts for a floral
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const floralId = searchParams.get("floralId");

    if (!floralId) {
      return NextResponse.json({ error: "floralId is required" }, { status: 400 });
    }

    const supabase = await createClient();

    const { data: reactions, error } = await supabase
      .from("reactions")
      .select("emoji")
      .eq("floral_id", floralId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const counts = { heart: 0, fire: 0, sparkle: 0, wow: 0, total: 0 };

    (reactions || []).forEach((r) => {
      const emoji = r.emoji as keyof typeof counts;
      if (emoji in counts) {
        counts[emoji]++;
        counts.total++;
      }
    });

    return NextResponse.json(counts);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
