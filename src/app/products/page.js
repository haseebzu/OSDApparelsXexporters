import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { productFamilies } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const productShowcaseImages = [
  "/images/hero-menswear.png",
  "/images/streetwear.jpeg",
  "/images/hoodie-brown.jpeg",
  "/images/hero-kidswear.png",
  "/images/hoodie-gray.jpeg",
  "/images/factory-overview.png",
  "/images/hero-factory.png",
  "/images/hero-menswear.png",
  "/images/hero-kidswear.png",
  "/images/streetwear.jpeg",
];

export const metadata = createMetadata({
  title: "All Products",
  description: "Explore the full OSD Apparels product architecture for menswear and kidswear manufacturing.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title="Explore the categories behind the full OSD Apparels frontend catalog."
        text="The structure is designed to scale into richer photography and more detailed product content without changing the overall architecture."
        highlights={["Menswear Range", "Kidswear Programs", "Private Label Expansion"]}
      />

      <section className="section">
        <div className="container cards-grid">
          {Object.entries(productFamilies).map(([slug, family]) => (
            <Reveal key={slug} className="detail-card">
              <p className="section-eyebrow">{family.label}</p>
              <h3>{family.description}</h3>
              <p>{family.categories.length} category pages included in the frontend.</p>
              <Link className="button button--gold button--compact" href={`/products/${slug}`}>
                Browse {family.label}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <Reveal className="product-collage__intro">
            <p className="section-eyebrow">Product Showcase</p>
            <div className="section-accent" />
            <h2 className="section-title">A broader look at the style direction behind our catalog.</h2>
            <p className="section-text">
              A more visual presentation for buyers who want to see the fashion range, fit direction, and category
              flexibility before moving into enquiry.
            </p>
          </Reveal>

          <div className="product-collage">
            {productShowcaseImages.map((src, index) => (
              <Reveal className={`product-collage__item product-collage__item--${(index % 5) + 1}`} delay={index * 0.03} key={`${src}-${index}`}>
                <Image
                  src={src}
                  alt="OSD Apparels product showcase"
                  fill
                  sizes="(max-width: 720px) 50vw, (max-width: 1080px) 33vw, 20vw"
                  className="product-collage__image"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
