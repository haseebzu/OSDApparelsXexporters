import { toAbsoluteUrl } from "@/lib/metadata";
import { getCategoryImage } from "@/lib/products";

export function buildProductCategorySchema(familySlug, family) {
  const url = toAbsoluteUrl(`/products/${familySlug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${family.label} categories`,
    description: family.description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: family.categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: `${family.label}: ${category.title}`,
          description: category.description,
          image: toAbsoluteUrl(getCategoryImage(familySlug, category.slug)),
          url,
        },
      })),
    },
  };
}
