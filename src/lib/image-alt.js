const apparelImageAlts = {
  "/images/men formal shirt full.jpg": "Men's formal shirt from the OSD Apparels woven clothing range",
  "/images/men over-sized t shirt.png": "Oversized men's t-shirt for private label clothing collections",
  "/images/men tie and dye hoddies.png": "Men's tie-dye hoodie for custom streetwear collections",
  "/images/kids t shirt.jpg": "Children's t-shirt from the OSD Apparels kidswear collection",
  "/images/kids hoodies.jpg": "Children's hoodies for wholesale kidswear collections",
  "/images/kids school uniform.png": "Children's school uniform from the OSD Apparels clothing range",
  "/images/men linen co-ord sets.jpg": "Men's linen co-ord set for private label collections",
  "/images/kids co-ord sets.jpg": "Matching children's co-ord set from OSD Apparels",
  "/images/Jackets.png": "Jackets from the OSD Apparels outerwear collection",
  "/images/kids jackets.jpg": "Children's jackets from the OSD Apparels kidswear range",
  "/images/polo.png": "Polo shirt for custom knitted clothing collections",
  "/images/trousers-chino-final.jpg": "Men's chino trousers from the OSD Apparels woven garment range",
  "/images/hoodie-gray.jpeg": "Gray hoodie from the OSD Apparels casual clothing range",
  "/images/hoodie-brown.jpeg": "Brown hoodie for private label casualwear collections",
  "/images/Tees.png": "T-shirts from the OSD Apparels knitted garment collection",
  "/images/Uniforms.png": "Uniforms for custom clothing and export orders",
  "/images/denim.jpg": "Denim garments from the OSD Apparels clothing collection",
  "/images/Hoodie.png": "Hoodie from the OSD Apparels knitted clothing range",
  "/images/TieNdye.png": "Tie-dye clothing for custom apparel collections",
  "/images/sleepwear.png": "Sleepwear from the OSD Apparels loungewear range",
  "/images/Kids.png": "Children's clothing from the OSD Apparels kidswear collection",
  "/images/CottonLinen.png": "Cotton and linen clothing for woven apparel collections",
  "/images/Gurkha pants.png": "Gurkha pants from the OSD Apparels trouser collection",
  "/images/Outfits.png": "Coordinated outfits from the OSD Apparels clothing range",
};

export function getImageAlt(src, fallback = "OSD Apparels clothing collection") {
  return apparelImageAlts[src] || fallback;
}
