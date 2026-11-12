import { notFound } from "next/navigation";
import { MarketPage } from "@/components/markets/MarketPage";
import { getMarket } from "@/data/catalog";
import { marketContent } from "@/data/market-content";
import { createMetadata } from "@/lib/metadata";
export async function generateMetadata({ params }) { const { slug } = await params; const market = getMarket(slug); const content = marketContent[slug]; return market && content ? createMetadata({ title: content.title, description: content.description, path: `/markets/${market.slug}` }) : {}; }
export default async function MarketRoute({ params }) { const { slug } = await params; const market = getMarket(slug); if (!market) notFound(); return <MarketPage market={market} />; }
