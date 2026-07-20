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

import { productFamilies } from "@/data/site";
import { getPublishedBlogPosts } from "@/lib/blog-posts";

export default async function sitemap() {
  const blogPosts = await getPublishedBlogPosts();
  const dynamicRoutes = [
    ...productFamilies.mens.categories.map((category) => `/products/mens/${category.slug}`),
    ...productFamilies.kids.categories.map((category) => `/products/kids/${category.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

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

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `https://osdapparels.com${path}`,
    lastModified: "2026-07-14T00:00:00.000Z",
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: pagePriority[path] ?? (path.startsWith("/products/") ? 0.8 : 0.7),
  }));
}
