import { NextResponse } from "next/server";
import { getPublishedBlogPosts } from "@/lib/blog-posts";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");

  const items = (await getPublishedBlogPosts())
    .filter((post) => (slug ? post.slug === slug : true))
    .filter((post) => (category ? post.category === category : true));

  return NextResponse.json({ items });
}
