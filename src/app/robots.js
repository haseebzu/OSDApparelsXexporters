export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: "https://osdapparels.com",
    sitemap: "https://osdapparels.com/sitemap.xml",
  };
}
