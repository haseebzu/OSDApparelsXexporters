import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.excerpt} highlights={["Insight Article", "Brand Education", "Commercial Context"]} />
      <section className="section">
        <div className="container two-col-grid">
          <article className="detail-card">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <Reveal className="side-panel">
            <h3>Need a manufacturing partner?</h3>
            <p>Use this article page to route readers directly into the quote flow and keep SEO traffic commercially useful.</p>
            <Link className="button button--gold button--compact" href="/quote">
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
