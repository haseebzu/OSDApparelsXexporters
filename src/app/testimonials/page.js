import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { testimonials } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Client Testimonials | Apparel Manufacturer Pakistan",
  path: "/testimonials",
  description:
    "Read client testimonials for OSD Apparels, an apparel manufacturer in Pakistan trusted for sampling clarity, production consistency, and export delivery.",
  keywords: [
    "apparel manufacturer Pakistan testimonials",
    "garment exporter reviews Pakistan",
    "private label manufacturer client feedback",
  ],
  category: "Testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Testimonials"
        title="Buyer feedback for an apparel manufacturer in Pakistan that delivers with consistency."
        text="A dedicated testimonials page helps buyers review how OSD Apparels performs across communication, sampling, bulk production, and export delivery."
        highlights={["Global Clients", "Repeat Orders", "Quality Confidence"]}
      />
      <section className="section section--light">
        <div className="container cards-grid">
          {testimonials.map((item) => (
            <Reveal className="testimonial-card" key={item.name}>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <strong>{item.name}</strong>
              <small>{item.role} - {item.country}</small>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
