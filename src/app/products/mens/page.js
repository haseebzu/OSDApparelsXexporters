import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { getCategoryImage, getFamily } from "@/lib/products";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";
import { buildProductCategorySchema } from "@/lib/product-schema";

const familySlug = "mens";

export const metadata = createMetadata({
  title: "Menswear Manufacturer in Pakistan | OSD Apparels OEM",
  description:
    "Source menswear from OSD Apparels in Pakistan, including custom hoodies, t-shirts, jackets, denim, activewear, and co-ord sets for private label brands.",
  path: "/products/mens",
  keywords: [
    "men's clothing manufacturer Pakistan",
    "menswear manufacturer Pakistan",
    "private label menswear manufacturer",
  ],
  category: "Menswear Manufacturing",
});

export default function MensProductsPage() {
  const family = getFamily(familySlug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: family.label, path: "/products/mens" },
  ]);
  const itemListSchema = buildProductCategorySchema(familySlug, family);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Men's Catalog"
        title="Menswear categories from a men's clothing manufacturer in Pakistan."
        text={family.description}
        highlights={["Streetwear to Basics", "Low MOQ", "Retail Ready Finishes"]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Catalog"
            title="Browse menswear categories for private-label and wholesale programs"
            text="Select a category to request a quote. Each card connects you to OSD Apparels for faster menswear manufacturing enquiries."
            align="left"
          />

          <div className="cards-grid">
            {family.categories.map((cat, i) => {
              const image = getCategoryImage(familySlug, cat.slug);

              return (
                <Reveal key={cat.slug} className="product-card">
                  <div className={`product-card__visual product-card__visual--${i % 3}`}>
                    <Image
                      src={image}
                      alt={`Men's ${cat.title.replace(/^Kids /, "")} from the OSD Apparels clothing collection`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="product-card__visual-image"
                    />
                  </div>
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
