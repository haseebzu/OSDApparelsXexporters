import { productFamilies, products } from "@/data/site";

export function getFamily(slug) {
  return productFamilies[slug] ?? null;
}

export function getFamilyProducts(slug) {
  return products.filter((product) => product.family === slug);
}

export function getCategory(slug, categorySlug) {
  const family = getFamily(slug);
  if (!family) return null;
  return family.categories.find((category) => category.slug === categorySlug) ?? null;
}

export function getCategoryProducts(slug, categorySlug) {
  return products.filter((product) => product.family === slug && product.category === categorySlug);
}
