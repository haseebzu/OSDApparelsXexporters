import { NextResponse } from "next/server";
import { products } from "@/data/site";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const family = searchParams.get("family");
  const category = searchParams.get("category");

  const items = products.filter((product) => {
    const matchesFamily = family ? product.family === family : true;
    const matchesCategory = category ? product.category === category : true;
    return matchesFamily && matchesCategory;
  });

  return NextResponse.json({ items });
}
