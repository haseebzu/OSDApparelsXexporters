import { productFamilies, products } from "@/data/site";

export const categoryImageMap = {
  "mens-formal-shirts": "/images/men formal shirt full.jpg",
  "mens-tshirts": "/images/men over-sized t shirt -2.png",
  "mens-polo-shirts": "/images/Men's Knitwear category.jpg",
  "mens-hoodies": "/images/HOODIES DETAIL.jpg",
  "mens-jackets": "/images/Jackets.png",
  "mens-trousers": "/images/trousers-chino-final.jpg",
  "mens-activewear": "/images/menActiveWear.jpg",
  "mens-denim": "/images/Men denim.png",
  "mens-coords": "/images/men linen co-ord sets.jpg",
  "mens-loungewear": "/images/men Loungewear.jpg",
  "kids-tshirts": "/images/kids t shirt.jpg",
  "kids-shirts": "/images/kids shirt.jpg",
  "kids-trousers": "/images/kids trouser.png",
  "kids-hoodies": "/images/kids hoodies.jpg",
  "kids-jackets": "/images/kids jackets.jpg",
  "kids-coords": "/images/kids co-ord sets.jpg",
  "kids-activewear": "/images/kids gym wear.png",
  "kids-swimwear": "/images/Kids.png",
  "kids-school-uniform": "/images/kids school uniform.png",
  "kids-pyjamas": "/images/kids pajamas.jpg",
};

export const familyImageMap = {
  mens: "/images/men formal shirt full.jpg",
  kids: "/images/Kids.png",
};

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

export function getCategoryImage(familySlug, categorySlug) {
  return categoryImageMap[`${familySlug}-${categorySlug}`] ?? "/images/factory-overview.png";
}

export function getFamilyImage(familySlug) {
  return familyImageMap[familySlug] ?? "/images/factory-overview.png";
}
