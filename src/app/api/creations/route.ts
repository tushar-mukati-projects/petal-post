import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createBouquetSchema } from "@/lib/validators";

// POST - Create a new flower creation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createBouquetSchema.parse(body);

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("bouquets")
      .insert({
        mode: parsed.mode,
        occasion: parsed.occasion,
        flowers: parsed.flowers,
        arrangement: parsed.arrangement,
        wrapper: parsed.wrapper,
        card_to: parsed.cardTo,
        card_message: parsed.cardMessage,
        card_from: parsed.cardFrom,
        show_in_garden: parsed.showInGarden,
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

// GET - List collection creations (paginated)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = Math.min(parseInt(searchParams.get("limit") || "12", 10), 50);
    const offset = (page - 1) * limit;

    const supabase = await createClient();

    // Get total count
    const { count } = await supabase
      .from("bouquets")
      .select("*", { count: "exact", head: true })
      .eq("show_in_garden", true);

    // Get creations (without card data for privacy)
    const { data, error } = await supabase
      .from("bouquets")
      .select("id, mode, occasion, flowers, arrangement, wrapper, created_at")
      .eq("show_in_garden", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const total = count || 0;

    return NextResponse.json({
      creations:
        data?.map((b) => ({
          id: b.id,
          mode: b.mode,
          occasion: b.occasion,
          flowers: b.flowers,
          arrangement: b.arrangement,
          wrapper: b.wrapper,
          createdAt: b.created_at,
        })) || [],
      total,
      page,
      limit,
      hasMore: offset + limit < total,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
