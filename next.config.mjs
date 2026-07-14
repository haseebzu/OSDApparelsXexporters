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
