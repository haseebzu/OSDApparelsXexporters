import { createMetadata } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Garment Printing & Embroidery Services | OSD Apparels",
  path: "/services",
  description:
    "Explore garment printing and embroidery through OSD Apparels manufacturing services, including screen printing, DTG, sublimation, heat transfer, and puff print.",
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
