import { NextResponse } from "next/server";
import { blogPosts } from "@/data/site";
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function mapStaticPost(post) {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    category: post.category,
    excerpt: post.excerpt,
    content: post.content,
    published: true,
    publishedAt: post.date,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const category = searchParams.get("category");

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseAdminClient();
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false, nullsFirst: false });

      if (slug) query = query.eq("slug", slug);
      if (category) query = query.eq("category", category);

      const { data, error } = await query;
      if (!error) {
        return NextResponse.json({ items: data || [] });
      }
    } catch (error) {
      console.error("Falling back to static blog data:", error);
    }
  }

  const items = blogPosts
    .map(mapStaticPost)
    .filter((post) => (slug ? post.slug === slug : true))
    .filter((post) => (category ? post.category === category : true));

  return NextResponse.json({ items });
}
