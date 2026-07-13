import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { productFamilies } from "@/data/site";
import { getFamilyImage } from "@/lib/products";
import { createMetadata } from "@/lib/metadata";

const productShowcaseImages = [
  "/images/men formal shirt full.jpg",
  "/images/men over-sized t shirt.png",
  "/images/men tie and dye hoddies.png",
  "/images/kids t shirt.jpg",
  "/images/kids hoodies.jpg",
  "/images/kids school uniform.png",
  "/images/men linen co-ord sets.jpg",
  "/images/kids co-ord sets.jpg",
  "/images/Jackets.png",
  "/images/kids jackets.jpg",
  "/images/polo.png",
  "/images/trousers-chino-final.jpg",
  "/images/hoodie-gray.jpeg",
  "/images/hoodie-brown.jpeg",
  "/images/Tees.png",
  "/images/Uniforms.png",
  "/images/denim.jpg",
  "/images/Hoodie.png",
  "/images/TieNdye.png",
  "/images/sleepwear.png",
];

const apparelCategories = [
  {
    title: "Knits",
    icon: "knits",
    href: "/products/mens",
  },
  {
    title: "Wovens",
    icon: "wovens",
    href: "/products/mens",
  },
  {
    title: "Denim",
    icon: "denim",
    href: "/products/mens",
  },
  {
    title: "Outerwear",
    icon: "outerwear",
    href: "/products/mens",
  },
  {
    title: "Sleepwear & Lounge",
    icon: "sleepwear",
    href: "/products",
  },
  {
    title: "Childrenswear",
    icon: "childrenswear",
    href: "/products/kids",
  },
  {
    title: "Activewear & Athleisure",
    icon: "activewear",
    href: "/products",
  },
  {
    title: "Hoodies",
    icon: "hoodies",
    href: "/products/mens",
  },
  {
    title: "Work Uniform",
    icon: "uniforms",
    href: "/products/kids",
  },
  {
    title: "Graphic Tees",
    icon: "graphic-tees",
    href: "/products/mens",
  },
];

function CategoryLineIcon({ type }) {
  const blue = "#111111";
  const green = "#111111";
  const base = {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4.5",
  };

  switch (type) {
    case "knits":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          {[18, 34, 50, 66, 82].map((x) => (
            <g key={x}>
              <path {...base} stroke={blue} d={`M${x} 26c6 6 6 11 0 17c-6 6-6 11 0 17c6 6 6 11 0 17c-6 6-6 11 0 17`} />
              <path {...base} stroke={blue} d={`M${x + 10} 26c6 6 6 11 0 17c-6 6-6 11 0 17c6 6 6 11 0 17c-6 6-6 11 0 17`} />
            </g>
          ))}
        </svg>
      );
    case "wovens":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={green} d="M33 30l16 16l-10 10l-16-16z" />
          <path {...base} stroke={green} d="M57 30l16 16l-10 10l-16-16z" />
          <path {...base} stroke={green} d="M81 30l10 10l-16 16l-10-10z" />
          <path {...base} stroke={green} d="M30 57l16-16l10 10l-16 16z" />
          <path {...base} stroke={green} d="M54 57l16-16l10 10l-16 16z" />
          <path {...base} stroke={green} d="M78 57l12-12v24l-12 12z" />
          <path {...base} stroke={green} d="M30 81l10-10l16 16l-10 10z" />
          <path {...base} stroke={green} d="M54 81l10-10l16 16l-10 10z" />
        </svg>
      );
    case "denim":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={blue} d="M42 26h36l4 26l-8 42H58l-8-42z" />
          <path {...base} stroke={blue} d="M60 26v68" />
          <path {...base} stroke={blue} d="M46 40h28" />
        </svg>
      );
    case "outerwear":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={green} d="M37 34l15-10h16l15 10l12 20l-12 8l-6-10v42H43V52l-6 10l-12-8z" />
          <path {...base} stroke={blue} d="M60 30v64" />
          <path {...base} stroke={blue} d="M47 54h26" />
        </svg>
      );
    case "sleepwear":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={blue} d="M28 40h30l10 10v18H28z" />
          <path {...base} stroke={blue} d="M38 40l7-10h15" />
          <path {...base} stroke={green} d="M68 56h24l4 34H76z" />
          <path {...base} stroke={green} d="M74 56v34" />
          <path {...base} stroke={green} d="M83 56v34" />
          <path {...base} stroke={blue} d="M26 72c5-8 14-8 18 0" />
        </svg>
      );
    case "childrenswear":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={blue} d="M26 43l14-10h16l14 10l-8 10v34H34V53z" />
          <path {...base} stroke={green} d="M74 42l10-8h10l10 8v38H74z" />
          <path {...base} stroke={green} d="M82 80c5-6 11-6 16 0" />
        </svg>
      );
    case "activewear":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={green} d="M26 48l12-18h12l7 12v46H26z" />
          <path {...base} stroke={blue} d="M72 36h18l8 10l-5 42H69l-5-42z" />
          <path {...base} stroke={blue} d="M81 36v52" />
        </svg>
      );
    case "hoodies":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={green} d="M39 34c0-12 8-18 21-18s21 6 21 18l12 12v42H27V46z" />
          <path {...base} stroke={blue} d="M50 36c3 5 6 8 10 8s7-3 10-8" />
          <path {...base} stroke={blue} d="M56 56l4 30l4-30" />
        </svg>
      );
    case "uniforms":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={blue} d="M30 34h60v20H30z" />
          <path {...base} stroke={green} d="M34 54h52v34H34z" />
          <path {...base} stroke={green} d="M46 34l14 10l14-10" />
          <path {...base} stroke={blue} d="M52 62h16" />
        </svg>
      );
    case "graphic-tees":
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path {...base} stroke={blue} d="M27 42l16-12h34l16 12l-8 12l-10-6v40H45V48l-10 6z" />
          <path {...base} stroke={green} d="M60 50l4 8l9 1l-7 6l2 9l-8-5l-8 5l2-9l-7-6l9-1z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle {...base} stroke={blue} cx="60" cy="60" r="30" />
        </svg>
      );
  }
}

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
        title="Explore export-ready apparel categories built for modern buyers."
        text="Discover the knitted, woven, kidswear, fleece, uniform, and private-label product ranges OSD Apparels develops for retailers, wholesalers, and global sourcing teams."
        highlights={["Menswear Range", "Kidswear Programs", "Private Label Expansion"]}
      />

      <section className="section section--light">
        <div className="container">
          <Reveal className="product-category-map">
            <span className="product-category-map__marker" aria-hidden="true">
              <span />
            </span>
            <h2 className="product-category-map__title">Our Clothing Categories</h2>
          </Reveal>

          <div className="product-category-map__grid">
            {apparelCategories.map((item, index) => (
              <Reveal className="product-category-map__item" delay={index * 0.03} key={item.title}>
                <Link className="product-category-map__link" href={item.href} aria-label={item.title}>
                  <span className="product-category-map__circle">
                    <span className="product-category-map__icon">
                      <CategoryLineIcon type={item.icon} />
                    </span>
                  </span>
                  <span className="product-category-map__label">{item.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cards-grid products-family-grid">
          {Object.entries(productFamilies).map(([slug, family]) => {
            const backgroundImage = `linear-gradient(180deg, rgba(35, 42, 32, 0.08), rgba(35, 42, 32, 0.36)), url("${encodeURI(getFamilyImage(slug))}")`;

            return (
              <Reveal key={slug} className="detail-card products-family-card">
                <div className="product-card__visual" style={{ backgroundImage }} />
                <div className="products-family-card__body">
                  <p className="section-eyebrow">{family.label}</p>
                  <h3>{family.description}</h3>
                  <p>{family.categories.length} category pages included in the frontend.</p>
                  <Link className="button button--gold button--compact" href={`/products/${slug}`}>
                    Browse {family.label}
                  </Link>
                </div>
              </Reveal>
            );
          })}
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
