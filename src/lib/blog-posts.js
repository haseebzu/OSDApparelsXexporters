import { notFound } from "next/navigation";
import { blogPosts as fallbackBlogPosts } from "@/data/site";
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase";

function normalizeContent(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return String(value || "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function mapStaticPost(post) {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    category: post.category,
    excerpt: post.excerpt,
    content: post.content,
    cover_image: "",
    published: true,
    published_at: post.date,
  };
}

export async function getPublishedBlogPosts() {
  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseAdminClient();
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false, nullsFirst: false });

      if (!error && data?.length) {
        return data.map((post) => ({
          ...post,
          content: normalizeContent(post.content),
        }));
      }
    } catch (error) {
      console.error("Falling back to static blog posts:", error);
    }
  }

  return fallbackBlogPosts.map(mapStaticPost);
}

export async function getPublishedBlogPostBySlug(slug) {
  const posts = await getPublishedBlogPosts();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}
