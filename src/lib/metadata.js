const siteUrl = "https://osdapparels.com";

export const brand = {
  name: "OSD Apparels",
  siteUrl,
  defaultTitle: "OSD Apparels | Modern Fashion Manufacturer & Exporter Worldwide",
  defaultDescription:
    "OSD Apparels is a custom fashion apparel manufacturer and worldwide exporter of knitted and woven garments, offering private label production, low MOQ development, and export-ready quality.",
};

export function createMetadata({
  title,
  description = brand.defaultDescription,
  path = "/",
}) {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
