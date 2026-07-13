import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { getPublishedBlogPosts } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  path: "/blog",
});

export const dynamic = "force-dynamic";

const postImages = {
  "private-label-clothing-manufacturing-pakistan": "/images/factory-overview.png",
  "coord-sets-trend-guide-2026": "/images/hero-menswear.png",
  "kidswear-manufacturing-guide-pakistan": "/images/hero-kidswear.png",
};

const fallbackImages = [
  "/images/hero-factory.png",
  "/images/CottonLinen.png",
  "/images/streetwear.jpeg",
  "/images/Outfits.png",
  "/images/Jackets.png",
  "/images/Kids.png",
];

function getPostImage(post, index) {
  if (post.cover_image) return post.cover_image;
  return postImages[post.slug] || fallbackImages[index % fallbackImages.length];
}

export default async function BlogPage() {
  const blogPosts = await getPublishedBlogPosts();
  const posts = blogPosts.map((post, index) => ({
    ...post,
    visual: getPostImage(post, index),
  }));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Launch-ready content that supports search visibility and buyer education."
        text="The blog index follows the same refined visual system as the rest of the frontend so it feels like part of the same premium product."
        highlights={["SEO Content", "Buyer Education", "Brand Authority"]}
      />
      <section className="section">
        <div className="container blog-grid">
          {posts.map((post, index) => (
            <Reveal className="blog-card" delay={index * 0.05} key={post.slug}>
              <div className="blog-card__media">
                <Image
                  src={post.visual}
                  alt={post.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className="blog-card__image"
                />
              </div>
              <p className="section-eyebrow">{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link className="button button--outline button--compact" href={`/blog/${post.slug}`}>
                Read Full Article
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
