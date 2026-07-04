import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  path: "/blog",
});

export default function BlogPage() {
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
          {blogPosts.map((post) => (
            <Reveal className="blog-card" key={post.slug}>
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
