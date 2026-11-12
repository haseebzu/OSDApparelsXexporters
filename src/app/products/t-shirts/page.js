import { ProductCategoryPage } from "@/components/products/ProductCategoryPage";
import { getCategory } from "@/data/catalog";
import { createMetadata } from "@/lib/metadata";
const category = getCategory("t-shirts");
export const metadata = createMetadata({ title: "Custom T-Shirt Manufacturer Pakistan | OSD Apparels", description: "Custom T-shirts made in Pakistan with fabric, fit, decoration, labels and packaging options.", path: "/products/t-shirts", images: category.gallery[0], category: "T-Shirt Manufacturing", keywords: ["custom t-shirt manufacturer Pakistan", "private label t-shirts", "custom printed t-shirts"] });
export default function TShirtsProductPage() { return <ProductCategoryPage category={category} />; }
