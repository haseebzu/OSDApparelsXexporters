import { ProductCategoryPage } from "@/components/products/ProductCategoryPage";
import { getCategory } from "@/data/catalog";
import { createMetadata } from "@/lib/metadata";
const category = getCategory("hoodies");
export const metadata = createMetadata({ title: "Custom Hoodie Manufacturer Pakistan | OSD Apparels", description: "Custom hoodies made in Pakistan with fabric, fit, decoration, labels and packaging options.", path: "/products/hoodies", images: category.gallery[0], category: "Hoodie Manufacturing", keywords: ["custom hoodie manufacturer Pakistan", "private label hoodies", "custom printed hoodies"] });
export default function HoodiesProductPage() { return <ProductCategoryPage category={category} />; }
