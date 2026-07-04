const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/mens",
  "/products/kids",
  "/printing",
  "/custom-order",
  "/services",
  "/quality",
  "/how-it-works",
  "/certifications",
  "/sustainability",
  "/factory-tour",
  "/testimonials",
  "/blog",
  "/quote",
  "/contact",
  "/privacy-policy",
  "/terms",
];

import { blogPosts, productFamilies } from "@/data/site";

export default function sitemap() {
  const dynamicRoutes = [
    ...productFamilies.mens.categories.map((category) => `/products/mens/${category.slug}`),
    ...productFamilies.kids.categories.map((category) => `/products/kids/${category.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `https://osdapparels.com${path}`,
    lastModified: new Date(),
  }));
}
