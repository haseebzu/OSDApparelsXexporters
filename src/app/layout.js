import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { GoogleTranslate } from "@/components/layout/GoogleTranslate";
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { brand, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: brand.defaultTitle,
  description: brand.defaultDescription,
  applicationName: brand.name,
  referrer: "origin-when-cross-origin",
  keywords: brand.keywords,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/osd-logo.png", type: "image/png" }],
    shortcut: ["/images/osd-logo.png"],
    apple: [{ url: "/images/osd-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: brand.defaultTitle,
    description: brand.defaultDescription,
    url: brand.siteUrl,
    siteName: brand.name,
    type: "website",
    locale: brand.locale,
    images: [
      {
        url: `${brand.siteUrl}${brand.defaultImage}`,
        width: 1200,
        height: 630,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.defaultTitle,
    description: brand.defaultDescription,
    images: [`${brand.siteUrl}${brand.defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const websiteSchema = buildWebsiteSchema();
  const organizationSchema = buildOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} ${mono.variable}`} suppressHydrationWarning>
        <GoogleTranslate />
        <TopBar />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
