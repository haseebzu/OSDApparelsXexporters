import { brand, toAbsoluteUrl } from "@/lib/metadata";
import { getCategoryImage } from "@/lib/products";

export function buildProductCategorySchema(familySlug, family) {
  const url = toAbsoluteUrl(`/products/${familySlug}`);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${family.label} categories`,
    description: family.description,
    url,
    itemListElement: family.categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${url}#product-${category.slug}`,
        name: `${family.label}: ${category.title}`,
        description: category.description,
        image: toAbsoluteUrl(getCategoryImage(familySlug, category.slug)),
        url,
        category: family.label,
        manufacturer: { "@type": "Organization", name: brand.name, url: brand.siteUrl },
      },
    })),
  };
}
