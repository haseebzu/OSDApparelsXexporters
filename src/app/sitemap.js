const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/mens",
  "/products/kids",
  "/custom-order",
  "/services",
  "/how-it-works",
  "/certifications",
  "/sustainability",
  "/testimonials",
  "/blog",
  "/quote",
  "/contact",
  "/privacy-policy",
  "/terms",
];

import { getPublishedBlogPosts } from "@/lib/blog-posts";
import { toIsoDate } from "@/lib/blog-seo";
import { toAbsoluteUrl } from "@/lib/metadata";

// Match the live blog routes so newly published or removed posts stay in sync.
export const dynamic = "force-dynamic";

export default async function sitemap() {
  const blogPosts = await getPublishedBlogPosts();
  // Category cards are not separate routes; /printing redirects to /services.
  const postDates = new Map(blogPosts.map((post) => [
    `/blog/${post.slug}`,
    toIsoDate(post.updated_at) || toIsoDate(post.published_at),
  ]));

  const pagePriority = {
    "": 1,
    "/about": 0.9,
    "/products": 0.95,
    "/products/mens": 0.9,
    "/products/kids": 0.9,
    "/custom-order": 0.92,
    "/services": 0.92,
    "/blog": 0.82,
    "/quote": 0.88,
    "/contact": 0.88,
  };

  return [...staticRoutes, ...postDates.keys()].map((path) => ({
    url: toAbsoluteUrl(path),
    ...(postDates.get(path) ? { lastModified: postDates.get(path) } : {}),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: pagePriority[path] ?? (path.startsWith("/products/") ? 0.8 : 0.7),
  }));
}
