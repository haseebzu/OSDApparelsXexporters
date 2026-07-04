import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const productImageMap = {
  "mens-formal-shirts": "/images/hero-menswear.png",
  "mens-tshirts": "/images/streetwear.jpeg",
  "mens-polo-shirts": "/images/hero-menswear.png",
  "mens-hoodies": "/images/hoodie-brown.jpeg",
  "mens-jackets": "/images/hero-menswear.png",
  "mens-trousers": "/images/streetwear.jpeg",
  "mens-activewear": "/images/hero-menswear.png",
  "mens-denim": "/images/streetwear.jpeg",
  "mens-coords": "/images/hero-menswear.png",
  "mens-loungewear": "/images/hoodie-gray.jpeg",
  "kids-tshirts": "/images/hero-kidswear.png",
  "kids-shirts": "/images/hero-kidswear.png",
  "kids-trousers": "/images/hero-kidswear.png",
  "kids-hoodies": "/images/hero-kidswear.png",
  "kids-jackets": "/images/hero-kidswear.png",
  "kids-coords": "/images/hero-kidswear.png",
  "kids-activewear": "/images/hero-kidswear.png",
  "kids-swimwear": "/images/hero-kidswear.png",
  "kids-school-uniform": "/images/hero-kidswear.png",
  "kids-pyjamas": "/images/hero-kidswear.png",
};

export function ProductCard({ product }) {
  const image = productImageMap[`${product.family}-${product.category}`] ?? "/images/factory-overview.png";

  return (
    <Reveal className="product-card">
      <div
        className={`product-card__visual product-card__visual--${product.tone}`}
        style={{ backgroundImage: `linear-gradient(180deg, rgba(35, 42, 32, 0.08), rgba(35, 42, 32, 0.36)), url(${image})` }}
      >
        <span className="product-card__badge">Customizable</span>
        <div className="product-card__overlay">
          <Link
            className="button button--gold button--compact"
            href={`/products/${product.family}/${product.category}`}
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="product-card__body">
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>
      </div>
      <Link className="product-card__cta" href="/quote">
        Request Quote
      </Link>
    </Reveal>
  );
}
