import { createMetadata } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Printing Services | Custom Clothing Manufacturer",
  path: "/printing",
  description:
    "Explore garment printing and decoration services from OSD Apparels, including screen printing, graphic applications, and production-ready apparel finishing.",
  keywords: [
    "printing services clothing manufacturer",
    "screen printing garment manufacturer Pakistan",
    "apparel decoration services Pakistan",
  ],
  category: "Printing Services",
});

export default function PrintingPage() {
  redirect("/services");
}
