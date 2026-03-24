import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createFloralSchema } from "@/lib/validators";

// POST - Create a new floral
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createFloralSchema.parse(body);

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("florals")
      .insert({
        occasion: parsed.occasion,
        flowers: parsed.flowers,
        arrangement: parsed.arrangement,
        wrapper: parsed.wrapper,
        card_to: parsed.cardTo,
        card_message: parsed.cardMessage,
        card_from: parsed.cardFrom,
      })
      .select("id, created_at")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ id: data.id, createdAt: data.created_at }, { status: 201 });
  } catch (err) {
    if (err instanceof Error && err.name === "ZodError") {
      return NextResponse.json({ error: "Invalid request data", details: err }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
