const siteUrl = "https://osdapparels.com";

export const brand = {
  name: "OSD Apparels",
  legalName: "OSD Apparels",
  siteUrl,
  locale: "en_PK",
  defaultTitle: "OSD Apparels | Modern Fashion Manufacturer & Exporter Worldwide",
  defaultDescription:
    "OSD Apparels is a custom fashion apparel manufacturer and exporter from Pakistan, delivering private label development, knitted and woven garment production, low-MOQ support, and export-ready quality for global buyers.",
  defaultImage: "/images/osd-logo.png",
  contact: {
    email: "osdapparels@gmail.com",
    phone: "+92 3710775687",
    addressLocality: "Faisalabad",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  socialLinks: [
    "https://www.linkedin.com/company/osd-apparels/",
    "https://www.instagram.com/osdapparels/",
  ],
  keywords: [
    "OSD Apparels",
    "custom clothing manufacturer",
    "private label clothing manufacturer",
    "garment exporter Pakistan",
    "knitted garments manufacturer",
    "woven garments manufacturer",
    "apparel sourcing Pakistan",
    "OEM garment manufacturer",
    "low MOQ clothing manufacturer",
    "kidswear manufacturer",
    "menswear manufacturer",
    "fashion exporter worldwide",
  ],
};

export function toAbsoluteUrl(path = "/") {
  if (!path) return `${siteUrl}/`;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeImages(images) {
  const list = Array.isArray(images) ? images : images ? [images] : [brand.defaultImage];
  return list
    .filter(Boolean)
    .map((image) =>
      typeof image === "string"
        ? {
            url: toAbsoluteUrl(image),
            width: 1200,
            height: 630,
            alt: brand.name,
          }
        : {
            ...image,
            url: toAbsoluteUrl(image.url),
          },
    );
}

export function createMetadata({
  title,
  description = brand.defaultDescription,
  path = "/",
  keywords = [],
  images,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  category,
}) {
  const url = toAbsoluteUrl(path);
  const socialImages = normalizeImages(images);

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path,
    },
    keywords: [...brand.keywords, ...keywords],
    category,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      locale: brand.locale,
      type,
      images: socialImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImages.map((image) => image.url),
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.legalName,
    url: brand.siteUrl,
    logo: toAbsoluteUrl(brand.defaultImage),
    sameAs: brand.socialLinks,
    email: brand.contact.email,
    telephone: brand.contact.phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: brand.contact.email,
        telephone: brand.contact.phone,
        areaServed: "Worldwide",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.contact.addressLocality,
      addressRegion: brand.contact.addressRegion,
      addressCountry: brand.contact.addressCountry,
    },
  };
}

export function buildWebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: brand.siteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: brand.legalName,
    },
  };

  const searchTarget = process.env.NEXT_PUBLIC_SITE_SEARCH_URL;

  if (searchTarget) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: `${searchTarget}{search_term_string}`,
      "query-input": "required name=search_term_string",
    };
  }

  return schema;
}

export function buildBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildItemListSchema({ name, description, path, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: toAbsoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: toAbsoluteUrl(item.path),
      name: item.name,
      description: item.description,
    })),
  };
}
