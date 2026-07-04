import { NextResponse } from "next/server";
import { testimonials } from "@/data/site";
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function mapStaticTestimonial(item) {
  return {
    id: item.name,
    name: item.name,
    company: item.role,
    country: item.country,
    quote: item.quote,
    rating: 5,
    visible: true,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const visibleOnly = searchParams.get("visible");

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseAdminClient();
      let query = supabase.from("testimonials").select("*").order("created_at", {
        ascending: false,
      });

      if (visibleOnly === "true") {
        query = query.eq("visible", true);
      }

      const { data, error } = await query;
      if (!error) {
        return NextResponse.json({ items: data || [] });
      }
    } catch (error) {
      console.error("Falling back to static testimonials:", error);
    }
  }

  const items = testimonials
    .map(mapStaticTestimonial)
    .filter((item) => (visibleOnly === "true" ? item.visible : true));

  return NextResponse.json({ items });
}
