import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { categories } from "@/data/catalog";

export function CategoryCardGrid({ loading = "eager" }) {
  return <div className="catalog-card-grid">{categories.map((category, index) => {
    const src = category.gallery?.[0] || category.image;
    return <Reveal key={category.slug} className="catalog-card" delay={Math.min(index * .03, .22)}><Link href={category.href} className="catalog-card__link"><div className="catalog-card__media">{src ? <Image src={src} alt={`${category.title} collection`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="catalog-card__image" loading={loading === "lazy" ? "lazy" : undefined} priority={loading !== "lazy" && index < 3} /> : null}</div><div className="catalog-card__body"><h2>{category.displayName}</h2><p>{category.styles}</p><span>Explore category</span></div></Link></Reveal>;
  })}</div>;
}
