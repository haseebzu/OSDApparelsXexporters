import Image from "next/image";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { RelatedProductMarkets } from "@/components/products/RelatedProductMarkets";
import { ProductManufacturingOptions } from "@/components/products/ProductManufacturingOptions";
import { PageHero } from "@/components/shared/PageHero";
import { ManufacturingProcess } from "@/components/shared/ManufacturingProcess";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { categoryOptions } from "@/data/catalog";
import { MOQ } from "@/data/site";
import { buildBreadcrumbSchema } from "@/lib/metadata";

const imageName = (src) => decodeURIComponent(src.split("/").at(-1) || "Product example").replace(/\.[^.]+$/, "");

export function ProductCategoryPage({ category }) {
  const gallery = category.gallery || [];
  const options = categoryOptions[category.slug] || {
    styles: [category.styles],
    specs: [["Fabric & composition", "Discuss knitted or woven fabric and composition requirements for the selected garment."], ["GSM & colour", "Buyer-specified weight, colour references and approvals are reviewed for the project."], ["Fit & sizing", "Production follows the buyer’s approved size chart, grading and measurements."], ["Construction", category.details]],
    decoration: "Screen printing, puff printing, DTG, heat transfer, embroidery, garment washing and sublimation where suitable can be reviewed against the selected fabric and placement.",
    trims: `Specify ${category.details} in the technical brief for review before sampling.`,
    packaging: "Woven or printed labels, care and size information, hang tags, branded packaging and buyer packing instructions can be included."
  };
  const minimum = category.slug === "basic-essentials" ? MOQ.basics : MOQ.standard;
  const breadcrumb = buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: category.title, path: category.href }]);
  const rfqTitle = category.slug === "basic-essentials" ? "Request a Basic Essentials Quote" : `Request a ${category.title.replace("Products", "").replace("Wear", "Wear")} Quote`;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    <div className="product-detail-page">
      <PageHero eyebrow="Custom Apparel Manufacturing" title={`Custom ${category.title.replace("Products", "")} Manufacturer in Pakistan`} text={`OSD Apparels develops ${category.title.toLowerCase()} for bulk private-label programmes from buyer tech packs, references, drawings and photographs.`} primaryCta={{ href: "#request-quote", label: "Request a Quote" }} bookingCta={{ label: "Discuss Your Product" }} highlights={["Buyer-led specifications", "Paid sample approval", "Custom labels & packaging"]} />
      <section className="section"><div className="container"><SectionIntro eyebrow="Product gallery" title={`${category.title} examples`} text="Supplied OSD category images. Use them as a starting point for a buyer-led specification." /><div className="catalog-gallery">{gallery.map((src, index) => { const name = imageName(src); return <Reveal className="catalog-gallery__item" key={src} delay={Math.min(index * .02, .2)}><figure className="catalog-gallery__figure"><div className="catalog-gallery__media"><Image src={src} alt={`${category.title}: ${name}`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" className="catalog-gallery__image" priority={index === 0} loading={index ? "lazy" : undefined} /></div></figure></Reveal>; })}</div></div></section>
      <ProductManufacturingOptions category={category} options={options} minimum={minimum} />
      <section className="section"><div className="container"><SectionIntro eyebrow="Sample to shipment" title="From inquiry to delivery" text="Review and approve your sample before bulk production begins." /><ManufacturingProcess /></div></section>
      <section className="section section--soft"><div className="container"><SectionIntro eyebrow="Buyer questions" title={`${category.title} manufacturing FAQs`} /><div className="faq-list">{[[`Which ${category.title.toLowerCase()} styles can be developed?`, options.styles.join(" ")],["What is the MOQ?", minimum],["Which fabrics are suitable?", "Fabric choice is reviewed against the required product construction, feel, decoration and intended use."],["Can I choose GSM?", "Yes. Share a preferred GSM or weight direction; it is assessed with the selected fabric and garment construction."],["Can fit and measurements be customised?", "Yes. Production follows your approved measurements, grading and fit-sample feedback."],["How are colours agreed?", "Share colour references and approvals as part of the product brief before sampling."],["Which construction details can be specified?", options.trims],["Which print methods are suitable?", options.decoration],["Can embroidery or patches be used?", "Embroidery and patch requests are reviewed against artwork, placement, fabric and construction."],["Can labels and packaging be customised?", options.packaging],["Can production follow a tech pack?", "Yes. Tech packs, drawings, reference garments and photographs help OSD review the requirements."],["How does paid sampling work?", "Custom samples are paid according to the product. Buyer approval is required before bulk production."],["What affects production timing?", "The schedule is agreed after the specification, sample approval, quantity and required finishing are confirmed."],["How are shipping arrangements agreed?", "Delivery arrangements, transit estimates and included costs are stated in the quotation."],["What is needed for a quotation?", "Share product details, estimated quantity, fabric/fit direction, branding, destination, requested date and reference files."]].map(([question, answer]) => <details className="faq-list__item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="section" id="request-quote"><div className="container quote-layout"><QuoteForm sourcePage={`product-${category.slug}`} initialCategory={category.title} title={rfqTitle} intro={`Tell us about your ${category.title.toLowerCase()} design, quantity, fabric, fit and branding. Add references so OSD can review the brief and prepare a quotation.`} /></div></section>
      <RelatedProductMarkets currentSlug={category.slug} />
    </div>
  </>;
}
