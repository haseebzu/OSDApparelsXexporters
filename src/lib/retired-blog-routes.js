export const retiredBlogRedirects = {
  "choose-apparel-sourcing-agent-pakistan": "/services",
  "apparel-sourcing-timeline-new-brands": "/how-it-works",
  "mistakes-sourcing-clothing-overseas": "/custom-order",
  "source-mens-apparel-pakistan-2026-guide": "/products/mens",
  "fashion-trends-2026-what-to-source": "/products",
  "pakistan-vs-bangladesh-vs-china-apparel-sourcing": "/services",
};

export function isRetiredBlogSlug(slug) {
  return Object.hasOwn(retiredBlogRedirects, slug);
}
