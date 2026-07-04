import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { getFamily } from "@/lib/products";
import { createMetadata } from "@/lib/metadata";

const familySlug = "mens";

export const metadata = createMetadata({
  title: "Men's Apparel Collection",
  path: "/products/mens",
});

export default function MensProductsPage() {
  const family = getFamily(familySlug);

  return (
    <>
      <PageHero
        eyebrow="Men's Catalog"
        title="Menswear categories built for retail collections, custom programs, and scaled repeat orders."
        text={family.description}
        highlights={["Streetwear to Basics", "Low MOQ", "Retail Ready Finishes"]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Catalog"
            title="Browse menswear categories"
            text="Select a category to request a quote. Each card links to the quote flow for quick enquiries."
            align="left"
          />

          <div className="cards-grid">
            {family.categories.map((cat, i) => (
              <Reveal key={cat.slug} className="product-card">
                <div className={`product-card__visual product-card__visual--${i % 3}`} />
                <div className="product-card__body">
                  <p className="product-card__eyebrow">50 pcs per style</p>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
                <Link className="product-card__cta" href="/quote">
                  Request Quote
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
