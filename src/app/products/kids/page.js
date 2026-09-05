import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { getCategoryImage, getFamily } from "@/lib/products";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";
import { buildProductCategorySchema } from "@/lib/product-schema";

const familySlug = "kids";

export const metadata = createMetadata({
  title: "Wholesale Kidswear Manufacturer Pakistan | OSD Apparels",
  description:
    "Explore wholesale kidswear manufacturing at OSD Apparels in Pakistan, from t-shirts and hoodies to school uniforms, activewear, and matching co-ord sets.",
  path: "/products/kids",
  keywords: [
    "kids clothing manufacturer Pakistan",
    "kidswear manufacturer Pakistan",
    "private label kidswear manufacturer",
  ],
  category: "Kidswear Manufacturing",
});

export default function KidsProductsPage() {
  const family = getFamily(familySlug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: family.label, path: "/products/kids" },
  ]);
  const itemListSchema = buildProductCategorySchema(familySlug, family);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Kids Catalog"
        title="Kidswear categories from a kids clothing manufacturer in Pakistan."
        text={family.description}
        highlights={["Uniform Programs", "Comfort Fabrics", "Consistent Grading"]}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Catalog"
            title="Browse kidswear categories for schoolwear, basics, and retail programs"
            text="Select a category to request a quote. Each card links directly into a cleaner kidswear manufacturing enquiry flow."
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
                      alt={`Kids ${cat.title.replace(/^Kids /, "")} from the OSD Apparels clothing collection`}
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
