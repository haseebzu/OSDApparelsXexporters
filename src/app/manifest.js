import { brand } from "@/lib/metadata";

export default function manifest() {
  return {
    name: brand.name,
    short_name: "OSD",
    description: brand.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    lang: "en",
    icons: [
      {
        src: "/images/osd-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/Footer logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
