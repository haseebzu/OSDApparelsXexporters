/** @type {import('next').NextConfig} */
const remoteImagePatterns = [];

if (process.env.R2_PUBLIC_URL) {
  try {
    const r2Url = new URL(process.env.R2_PUBLIC_URL);
    remoteImagePatterns.push({
      protocol: r2Url.protocol.replace(":", ""),
      hostname: r2Url.hostname,
      pathname: "/**",
    });
  } catch {
    // Ignore invalid R2 URL and keep local image support intact.
  }
}

const nextConfig = {
  typedRoutes: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: remoteImagePatterns,
  },
  async redirects() {
    return [
      { source: "/blog/choose-apparel-sourcing-agent-pakistan", destination: "/services", statusCode: 301 },
      { source: "/blog/apparel-sourcing-timeline-new-brands", destination: "/how-it-works", statusCode: 301 },
      { source: "/blog/mistakes-sourcing-clothing-overseas", destination: "/custom-order", statusCode: 301 },
      { source: "/blog/source-mens-apparel-pakistan-2026-guide", destination: "/products/mens", statusCode: 301 },
      { source: "/blog/fashion-trends-2026-what-to-source", destination: "/products", statusCode: 301 },
      { source: "/blog/pakistan-vs-bangladesh-vs-china-apparel-sourcing", destination: "/services", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
