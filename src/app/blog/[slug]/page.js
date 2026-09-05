import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { getPublishedBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blog-posts";
import { brand, buildBreadcrumbSchema, createMetadata, toAbsoluteUrl } from "@/lib/metadata";

import { getBlogSeo, toIsoDate } from "@/lib/blog-seo";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await getPublishedBlogPosts();
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return {};

  const image = post.cover_image || "/images/osd-logo.png";
  const publishedTime = toIsoDate(post.published_at);
  const modifiedTime = toIsoDate(post.updated_at) || publishedTime;

  return createMetadata({
    ...getBlogSeo(post),
    path: `/blog/${post.slug}`,
    type: "article",
    images: [image],
    category: post.category,
    publishedTime,
    modifiedTime,
    keywords: [post.category, "apparel sourcing", "garment manufacturing", "private label clothing"],
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  const coverImage = post.cover_image || "/images/osd-logo.png";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [toAbsoluteUrl(coverImage)],
    datePublished: toIsoDate(post.published_at),
    dateModified: toIsoDate(post.updated_at) || toIsoDate(post.published_at),
    articleSection: post.category,
    mainEntityOfPage: toAbsoluteUrl(`/blog/${post.slug}`),
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl(brand.defaultImage),
      },
    },
  };
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
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
