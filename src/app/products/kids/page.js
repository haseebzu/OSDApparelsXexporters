import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { getCategoryImage, getFamily } from "@/lib/products";
import { buildBreadcrumbSchema, buildItemListSchema, createMetadata } from "@/lib/metadata";

const familySlug = "kids";

export const metadata = createMetadata({
  title: "Kids Clothing Manufacturer Pakistan | OSD Apparels",
  description:
    "Explore kidswear categories from OSD Apparels, a kids clothing manufacturer in Pakistan for schoolwear, basics, activewear, and export buyers.",
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
  const itemListSchema = buildItemListSchema({
    name: `${family.label} categories`,
    description: family.description,
    path: "/products/kids",
    items: family.categories.map((cat) => ({
      name: cat.title,
      description: cat.description,
      path: `/products/kids#${cat.slug}`,
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
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
                      alt={cat.title}
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
