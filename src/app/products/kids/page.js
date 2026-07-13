import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { getCategoryImage, getFamily } from "@/lib/products";
import { createMetadata } from "@/lib/metadata";

const familySlug = "kids";

export const metadata = createMetadata({
  title: "Kids Apparel Collection",
  path: "/products/kids",
});

export default function KidsProductsPage() {
  const family = getFamily(familySlug);

  return (
    <>
      <PageHero
        eyebrow="Kids Catalog"
        title="Kidswear categories designed for comfort, safety, and repeatable production."
        text={family.description}
        highlights={["Uniform Programs", "Comfort Fabrics", "Consistent Grading"]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Catalog"
            title="Browse kidswear categories"
            text="Select a category to request a quote. Each card links to the quote flow for quick enquiries."
            align="left"
          />

          <div className="cards-grid">
            {family.categories.map((cat, i) => {
              const image = getCategoryImage(familySlug, cat.slug);
              const backgroundImage = `linear-gradient(180deg, rgba(35, 42, 32, 0.08), rgba(35, 42, 32, 0.36)), url("${encodeURI(image)}")`;

              return (
                <Reveal key={cat.slug} className="product-card">
                  <div
                    className={`product-card__visual product-card__visual--${i % 3}`}
                    style={{ backgroundImage }}
                  />
                  <div className="product-card__body">
                    <p className="product-card__eyebrow">50 pcs per style</p>
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </div>
                  <Link className="product-card__cta" href="/quote">
                    Request Quote
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
