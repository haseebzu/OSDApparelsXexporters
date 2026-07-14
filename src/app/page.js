import Link from "next/link";
import Image from "next/image";
import { CsrShowcase } from "@/components/home/CsrShowcase";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { HeroSlider } from "@/components/home/HeroSlider";
import { HorizontalProductShowcase } from "@/components/home/HorizontalProductShowcase";
import { ContentCard } from "@/components/shared/CardSystem";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import {
  certifications,
  processSteps,
  testimonials,
  trustPoints,
} from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const whoWeAreStats = [
  { value: "5+", label: "Years in Apparel" },
  { value: "50+", label: "Buyer Markets Served" },
  { value: "300+", label: "Styles Developed" },
];

const whoWeAreCards = [
  {
    title: "Private Label Development",
    text: "From sourcing direction to trims and packaging, we help brands shape collections that feel commercially ready.",
    tone: "blue",
  },
  {
    title: "Production Coordination",
    text: "Sampling, approvals, and bulk planning stay organized through clear milestones and responsive updates.",
    tone: "light",
  },
  {
    title: "Quality Built Into The Flow",
    text: "Our teams focus on fit consistency, finishing standards, and dispatch readiness so buyers can scale with more confidence.",
    tone: "wide",
  },
];

const landingProductImages = [
  {
    src: "/images/men.jpg",
    alt: "Menswear collection",
    kicker: "Menswear",
    moq: "30+",
    href: "/products/mens",
    title: "Menswear Collections",
  },
  {
    src: "/images/hero-kidswear.png",
    alt: "Kidswear collection",
    kicker: "Kidswear",
    moq: "50+",
    href: "/products/kids",
    title: "Kidswear Programs",
  },
  {
    src: "/images/Hoodiee.png",
    alt: "Gray hoodie product",
    kicker: "Fleece",
    moq: "50+",
    href: "/products",
    title: "Fleece & Hoodies",
  },
  {
    src: "/images/Women.png",
    alt: "Womenswear collection",
    kicker: "Womenswear",
    moq: "50+",
    href: "/products",
    title: "Womenswear Lines",
  },
  {
    src: "/images/men active.jpg",
    alt: "Activewear and performance collection",
    kicker: "Activewear",
    moq: "50+",
    href: "/products",
    title: "Activewear Programs",
  },
  {
    src: "/images/denim.jpg",
    alt: "Denim collection",
    kicker: "Denim",
    moq: "80+",
    href: "/products",
    title: "Denim Development",
  },
  {
    src: "/images/outwear.png",
    alt: "Outerwear collection",
    kicker: "Outerwear",
    moq: "60+",
    href: "/products",
    title: "Outerwear Programs",
  },
  {
    src: "/images/sleepwear.png",
    alt: "Loungewear collection",
    kicker: "Loungewear",
    moq: "50+",
    href: "/products",
    title: "Loungewear & Sleepwear",
  },
  {
    src: "/images/polooo.jpg",
    alt: "Accessories collection",
    kicker: "Accessories",
    moq: "100+",
    href: "/custom-order",
    title: "Accessories",
  },
  {
    src: "/images/teess.jpg",
    alt: "Sustainable apparel collection",
    kicker: "Sustainable",
    moq: "50+",
    href: "/sustainability",
    title: "Sustainable Collections",
  },
  {
    src: "/images/work wear.jpg",
    alt: "Uniforms and workwear collection",
    kicker: "Uniforms",
    moq: "100+",
    href: "/products",
    title: "Uniforms & Workwear",
  },
];

const homeCoreServices = [
  {
    label: "Low MOQ",
    title: "Small Orders Production",
    text: "We understand the challenges new startups face, and we support growing brands by accepting small order quantities so both sides can scale together.",
    image: "/images/factory-overview.png",
    href: "/custom-order",
  },
  {
    label: "Sustainability",
    title: "Eco-Friendly Fabrics",
    text: "Our commitment to sustainability includes eco-friendly fabric options that help brands build more responsible collections without sacrificing quality.",
    image: "/images/Eco friendly Fabric.jpg",
    href: "/products",
  },
  {
    label: "Quality",
    title: "Quality Guarantee",
    text: "We take pride in our product quality and follow a thorough 3-step quality assurance process before goods are shipped.",
    image: "/images/Qcccc.png",
    href: "/quote",
  },
  {
    label: "Customization",
    title: "Customizable Clothing",
    text: "Choose from a wide range of colors, fabrics, silhouettes, and finishing options to create apparel tailored to your business or personal needs.",
    image: "/images/CustomSizing.jpg",
    href: "/custom-order",
  },
  {
    label: "Support",
    title: "24/7 Customer Support",
    text: "Get help anytime from our friendly team. We stay available to support clients whenever they need updates, answers, or production guidance.",
    image: "/images/Customoer Support.png",
    href: "/contact",
  },
  {
    label: "Logistics",
    title: "Fast Shipping",
    text: "With streamlined processes and a dedicated team, we prioritize timely shipment so your products move quickly without unnecessary delay.",
    image: "/images/Shipments.jpg",
    href: "/contact",
  },
];

const facilitySections = [
  {
    title: "The Outfit Hub",
    text: "From hosiery to denim, knitted garments to seamless activewear, we deliver expertly crafted apparel for every age, gender, and ability.",
    image: "/images/hero-menswear.png",
    tone: "wide",
  },
  {
    title: "Lab Section",
    text: "Lab ensures quality and consistency through highly advanced equipped machines and modern tools.",
    image: "/images/Lab section.png",
  },
  {
    title: "Dyeing Section",
    text: "Low liquor ratio high temperature jet machines capable of producing 40-42 tons of dyeing per day.",
    image: "/images/Dying Section.jpg",
  },
  {
    title: "Finishing",
    text: "Includes slitting with squeezing facility, tensionless dryers, stenters, and compactors.",
    image: "/images/hoodie-gray.jpeg",
  },
  {
    title: "Cutting",
    text: "Including Orox plotters, auto spreaders, auto cutters, and spreaders.",
    image: "/images/cut and sew.jpg",
  },
  {
    title: "Printing Facility",
    text: "Oval machine, shank machine, and digital machine support flexible decoration programs.",
    image: "/images/Priniting.png",
  },
  {
    title: "Embroidery Facility",
    text: "With a combined daily production capacity of 20,000 pieces.",
    image: "/images/Embrodiry.png",
  },
  {
    title: "Stitching",
    text: "With over 2780 stitching machines, manned with the most skilled and expert operators.",
    image: "/images/Stitching.jpg",
  },
  {
    title: "Hanger System",
    text: "We have 6 hanger systems which are more efficient in productivity.",
    image: "/images/hanger system.jpg",
  },
];

export const metadata = createMetadata({
  title: "Apparel Manufacturer Pakistan | OSD Apparels Global",
  description:
    "OSD Apparels is an apparel manufacturer in Pakistan for private-label brands, retailers, and import buyers. Explore export-ready production and request a quote.",
  path: "/",
  keywords: [
    "apparel manufacturer Pakistan",
    "OEM clothing manufacturer Pakistan",
    "private label apparel manufacturer Pakistan",
    "garment exporter Faisalabad",
  ],
  category: "Apparel Manufacturing",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container who-we-are">
          <Reveal className="who-we-are__intro">
            <div>
              <p className="section-eyebrow">Who We Are</p>
              <div className="section-accent" />
              <h2 className="section-title">A Pakistan apparel manufacturer built for brands, retailers, and export buyers.</h2>
              <p className="section-text">
                OSD Apparels is an apparel manufacturer in Pakistan supporting private-label programs, custom
                developments, and bulk garment production with a more structured path from concept to shipment. Our
                strength is combining fashion-focused execution, low-MOQ flexibility, and worldwide export readiness
                in one manufacturing workflow.
              </p>
              <div className="button-row who-we-are__actions">
                <Link className="button button--gold" href="/about">
                  More About OSD
                </Link>
                <Link className="button button--outline" href="/factory-tour">
                  See Factory Tour
                </Link>
              </div>
            </div>

            <div className="who-we-are__stats" aria-label="Company highlights">
              {whoWeAreStats.map((item) => (
                <div className="who-we-are__stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="who-we-are__layout">
            <Reveal className="who-we-are__visual">
              <div className="who-we-are__photo">
                <Image
                  src="/images/Who we are.png"
                  alt="OSD Apparels production floor supporting export-ready apparel manufacturing."
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="who-we-are__photo-image"
                />
                <div className="who-we-are__photo-badge">
                  <span>Export-ready apparel manufacturing</span>
                  <strong>Structured for serious buyers</strong>
                </div>
              </div>
            </Reveal>

            <div className="who-we-are__cards">
              {whoWeAreCards.map((card, index) => (
                <Reveal className={`who-we-are__card who-we-are__card--${card.tone}`} delay={index * 0.08} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.tone === "wide" ? (
                    <div className="info-stack">
                      {trustPoints.map((point) => (
                        <div className="info-chip" key={point}>
                          {point}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionIntro
            eyebrow="Core Services"
            title="Production support designed for modern fashion brands, startups, and worldwide buyers."
            text="Service cards should read as compact strategic modules, not image tiles repeated with new headlines."
          />

          <div className="core-services-showcase">
            {homeCoreServices.map((service, index) => (
              <Reveal delay={index * 0.06} key={service.title}>
                <ContentCard
                  variant="service"
                  label={service.label}
                  title={service.title}
                  text={service.text}
                  image={service.image}
                  href={service.href}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="testimonial-section__intro">
            <p className="section-eyebrow">Products</p>
            <div className="section-accent" />
            <h2 className="section-title testimonial-showcase__title">Product categories built for modern wholesale buyers.</h2>
          </Reveal>

          <Reveal className="testimonial-section__intro">
            <p className="section-text testimonial-showcase__text">
              Explore the categories OSD Apparels develops for private-label brands, retailers, and import buyers,
              from menswear and kidswear to fleece, uniforms, and export-ready custom programs.
            </p>
          </Reveal>

          <HorizontalProductShowcase items={landingProductImages} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionIntro
            eyebrow="Globally Certified"
            title="Compliance and production discipline that support international sourcing decisions."
            text="Certifications, quality systems, and transparent operating standards help position OSD as a reliable fashion manufacturing and export partner."
            light
          />

          <div className="dark-marquee">
            {certifications.map((item) => (
              <Reveal key={item.name}>
                <span>{item.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="How It Works"
            title="A signature sourcing flow designed to feel disciplined at every stage."
            text="This is the scroll moment that should separate OSD from flat exporter sites: a process built to visually reinforce control, visibility, and calm execution."
          />

          <ProcessTimeline steps={processSteps} variant="map" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="facility-showcase">
            <Reveal className="testimonial-showcase__intro">
              <h2 className="section-title testimonial-showcase__title">Inside the custom apparel manufacturing setup behind OSD Apparels</h2>
              <p className="section-text testimonial-showcase__text">
                A visual overview of the departments, systems, and factory capabilities that support quality, scale,
                consistency, and worldwide shipment readiness.
              </p>
            </Reveal>

            <div className="facility-showcase__grid">
              {facilitySections.map((item, index) => (
                <Reveal
                  className={`facility-card${item.tone === "wide" ? " facility-card--wide" : ""}`}
                  delay={index * 0.04}
                  key={item.title}
                >
                  <div className="facility-card__image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="facility-card__image-media"
                    />
                  </div>
                  <div className="facility-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <CsrShowcase />

          <div className="testimonial-section">
            <Reveal className="testimonial-section__intro">
              <h2 className="section-title testimonial-showcase__title">Read reviews, work with confidence.</h2>
              <p className="section-text testimonial-showcase__text">
                Feedback from fashion brands, sourcing teams, and import buyers who value production discipline,
                quality consistency, and dependable communication.
              </p>
              <div className="testimonial-section__meta">
                <span>4.8/5</span>
                <strong>Buyer Satisfaction</strong>
                <small>Based on recent global client feedback</small>
              </div>
            </Reveal>

            <div className="testimonial-layout">
              <Reveal className="testimonial-lead">
                <div className="testimonial-lead__quote">“</div>
                <h3>What our customers are saying</h3>
                <div className="testimonial-lead__line" />
              </Reveal>

              <div className="testimonial-grid">
                {testimonials.map((item) => (
                  <Reveal key={item.name}>
                    <ContentCard
                      variant="testimonial"
                      quote={item.quote}
                      name={item.name}
                      role={item.role}
                      country={item.country}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-layout">
          <Reveal>
            <p className="section-eyebrow">Request a Quote</p>
            <div className="section-accent" />
            <h2 className="section-title">Tell us what you want to build and we will shape the right export-ready manufacturing plan.</h2>
            <p className="section-text">
              The quote experience is designed for serious buying enquiries while still feeling simple, polished, and
              internationally professional.
            </p>
          </Reveal>

          <QuoteForm compact sourcePage="homepage" />
        </div>
      </section>
    </>
  );
}
