import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { testimonials } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Client Testimonials",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Buyer feedback that reinforces consistency, trust, and export readiness."
        text="A dedicated testimonials page gives the brand more credibility depth than a small homepage carousel alone."
        highlights={["Global Clients", "Repeat Orders", "Quality Confidence"]}
      />
      <section className="section section--light">
        <div className="container cards-grid">
          {testimonials.map((item) => (
            <Reveal className="testimonial-card" key={item.name}>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <small>{item.role} • {item.country}</small>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
