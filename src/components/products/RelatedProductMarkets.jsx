import Link from "next/link";
import { ArrowUpRight, BadgeCheck, CircleGauge, Layers3, Shirt, Sparkles, Tag, TentTree, Truck, WalletCards } from "lucide-react";
import { categories, markets } from "@/data/catalog";

const iconMap = { caps: BadgeCheck, "basic-essentials": Layers3, hoodies: Shirt, "polo-shirts": Tag, "t-shirts": Shirt, sweatshirts: Sparkles, denim: WalletCards, jackets: TentTree, "activewear-shorts": CircleGauge, "premium-womenswear": Sparkles, "workwear-uniforms": Truck, loungewear: Shirt, kids: Shirt };

export function MarketsPanel({ currentSlug, standalone = false }) {
  const visibleMarkets = currentSlug ? markets.filter((market) => market.slug !== currentSlug) : markets;
  return <div className={`markets-panel${standalone ? " markets-panel--standalone" : ""}`}><div className="markets-panel__intro"><p className="section-eyebrow">MARKETS WE SERVE</p><h2>Made for your market.</h2><p>Explore custom apparel manufacturing for your destination.</p></div><nav className="markets-panel__links" aria-label="Markets we serve">{visibleMarkets.map((market) => <Link href={`/markets/${market.slug}`} key={market.slug}><span>{market.name}</span><ArrowUpRight aria-hidden="true" size={18} /></Link>)}</nav></div>;
}

export function RelatedProductMarkets({ currentSlug }) {
  const related = categories.filter((item) => item.slug !== currentSlug).slice(0, 5);
  return <section className="section related-products"><div className="container"><header className="related-products__header"><div><p className="section-eyebrow">EXPLORE MORE</p><h2>Build your next collection</h2></div><p>Discover related manufacturing categories for your brand.</p></header><div className="related-products__grid">{related.map((category) => { const Icon = iconMap[category.slug] || Shirt; return <Link className="related-products__card" href={category.href} key={category.slug}><Icon aria-hidden="true" size={27} strokeWidth={1.6} /><span className="related-products__divider" aria-hidden="true" /><strong>{category.displayName}</strong><span className="related-products__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></Link>; })}</div><MarketsPanel /></div></section>;
}
