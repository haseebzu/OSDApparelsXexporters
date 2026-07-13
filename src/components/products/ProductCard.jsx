import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { getCategoryImage } from "@/lib/products";

export function ProductCard({ product }) {
  const image = getCategoryImage(product.family, product.category);
  const backgroundImage = `linear-gradient(180deg, rgba(35, 42, 32, 0.08), rgba(35, 42, 32, 0.36)), url("${encodeURI(image)}")`;

  return (
    <Reveal className="product-card">
      <div
        className={`product-card__visual product-card__visual--${product.tone}`}
        style={{ backgroundImage }}
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
