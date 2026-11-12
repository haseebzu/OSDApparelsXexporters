import { notFound } from "next/navigation";
import { ProductCategoryPage } from "@/components/products/ProductCategoryPage";
import { getCategory } from "@/data/catalog";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? createMetadata({ title: `${category.title} Manufacturer Pakistan | OSD Apparels`, description: `Custom ${category.title.toLowerCase()} manufacturing in Pakistan for bulk private-label buyers. Discuss specifications, sampling, labels and shipping.`, path: category.href, images: category.gallery?.[0] || category.image, category: `${category.title} Manufacturing`, keywords: category.keywords || [`custom ${category.title.toLowerCase()} manufacturer Pakistan`, `private label ${category.title.toLowerCase()}`, "OSD Apparels"] }) : {};
}
export default async function CategoryRoute({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category || category.slug === "kids") notFound();
  return <ProductCategoryPage category={category} />;
}
