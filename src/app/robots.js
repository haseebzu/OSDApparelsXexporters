import { brand, toAbsoluteUrl } from "@/lib/metadata";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: brand.siteUrl,
    sitemap: toAbsoluteUrl("/sitemap.xml"),
  };
}
