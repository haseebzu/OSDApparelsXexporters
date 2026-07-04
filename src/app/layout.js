import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { GoogleTranslate } from "@/components/layout/GoogleTranslate";
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { brand } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: brand.defaultTitle,
  description: brand.defaultDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${mono.variable}`}>
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
