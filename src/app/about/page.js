import {
  Award,
  BadgeCheck,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Handshake,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SkillCounters } from "@/components/about/SkillCounters";
import { contact, stats, trustPoints } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About OSD Apparels",
  description: "Meet OSD Apparels, a modern manufacturing partner for global apparel brands and sourcing teams.",
  path: "/about",
});

const coreValues = [
  {
    number: "01",
    title: "Quality First",
    text: "No compromise - ever. Every garment we source meets international quality standards before it leaves Pakistan.",
    icon: ShieldCheck,
    image: "/images/Quality fiest.jpg",
  },
  {
    number: "02",
    title: "Pakistan Proud",
    text: "We carry Pakistan's textile legacy with pride - showcasing world-class craftsmanship to global buyers who deserve the best.",
    icon: Globe2,
    image: "/images/proud pakistani.jpg",
  },
  {
    number: "03",
    title: "True Partnership",
    text: "We don't just process orders - we build long-term relationships with buyers who trust us as their dedicated sourcing partner.",
    icon: Handshake,
    image: "/images/partnership.jpg",
  },
  {
    number: "04",
    title: "Global Ambition",
    text: "From Lahore to London, Faisalabad to New York - our vision has no borders and no limits.",
    icon: Compass,
    image: "/images/WORLDWIDEShupping.jpg",
  },
];

const skillScores = [
  { label: "Textile Services", value: 90 },
  { label: "Material Readiness", value: 95 },
  { label: "Sewing Services", value: 92 },
  { label: "Design Support", value: 96 },
];

const teamMembers = [
  { name: "Abdullah Nadeem", role: "Production Manager" },
  { name: "Ali Rehman", role: "Sampling Lead" },
  { name: "Ayesha noor", role: "Quality Supervisor" },
  { name: "Talal hussain", role: "Client Success" },
];

const achievementStats = [
  stats[0],
  { label: "Years Experience", value: "25+" },
  { label: "Textile Projects", value: "1,450+" },
  { label: "Buyer Reviews", value: "999+" },
];

const reasonsToChoose = [
  "Uncompromised production standards from sampling to dispatch.",
  "Transparent communication that keeps buyers informed at every stage.",
  "Reliable partnerships built for repeat orders and long-term growth.",
  "Private-label flexibility with export-ready manufacturing discipline.",
];

const pillarCards = [
  {
    number: "01.",
    title: "Buyer-First Communication",
    text: "Clear updates, faster approvals, and one dependable line of contact across every stage.",
    featured: true,
  },
  {
    number: "02.",
    title: "Multi-Product Capability",
    text: "Knitted, woven, fleece, private label, and decoration programs under one manufacturing system.",
  },
  {
    number: "03.",
    title: "Strong Design Support",
    text: "Sampling guidance, construction feedback, and development clarity for launch-ready collections.",
  },
  {
    number: "04.",
    title: "Operational Excellence",
    text: "Structured production planning, checkpoint reporting, and finishing discipline that protect timelines.",
  },
  {
    number: "05.",
    title: "Export-Ready Reliability",
    text: "Quality control, packing accuracy, and shipment coordination built for worldwide buyers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__topbar">
          <div className="container about-hero__topbar-inner">
            <span>Call us: {contact.phone}</span>
            <span>Open hours: Mon - Sat, 9:00 - 19:00</span>
            <span>Follow OSD for updates</span>
          </div>
        </div>

        <div className="container">
          <Reveal className="about-hero__banner">
            <div className="about-hero__image" />
            <div className="about-hero__overlay">
              <p className="section-eyebrow">About Us</p>
              <h1 className="about-hero__title">About OSD Apparels</h1>
              <p className="about-hero__crumbs">Home / About</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <Reveal className="about-story__visual">
            <div className="about-story__image" />
            <div className="about-story__badge">
              <strong>25+</strong>
              <span>Years Experience</span>
            </div>
          </Reveal>

          <Reveal className="about-story__content">
            <p className="section-eyebrow">About Us</p>
            <div className="section-accent" />
            <h2 className="section-title">Do well, live well, and dress well with a factory partner built for modern buyers.</h2>
            <p className="section-text">
              OSD Apparels supports brands, sourcing teams, and private-label businesses with practical manufacturing
              guidance, clear communication, and dependable garment execution from Faisalabad.
            </p>
            <p className="section-text">
              We work across knitted and woven categories, helping buyers move from concept discussion to sample
              approval, bulk planning, quality control, finishing, and export coordination with less confusion and more
              confidence in the process.
            </p>
            <p className="section-text">
              Our focus is not only on producing garments, but on creating a smoother sourcing experience for brands
              that need responsive communication, commercial quality, and long-term manufacturing support they can rely
              on as collections grow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="testimonial-section__intro">
            <p className="section-eyebrow">Our Team</p>
            <div className="section-accent" />
            <h2 className="section-title">Meet the professionals</h2>
          </Reveal>

          <div className="about-team">
            {teamMembers.map((member, index) => (
              <Reveal className="about-team__card" delay={index * 0.05} key={member.name}>
                <div className={`about-team__photo about-team__photo--${index + 1}`} />
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light about-values">
        <div className="container">
          <Reveal className="testimonial-section__intro">
            <p className="section-eyebrow">What We Stand For</p>
            <div className="section-accent" />
            <h2 className="section-title">Our Core Values</h2>
          </Reveal>

          <div className="about-values__stack">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const imageUrl = encodeURI(value.image);

              return (
                <Reveal className="about-values__item" delay={index * 0.05} key={value.title}>
                  <div className="about-values__content">
                    <div className="about-values__heading">
                      <span className="about-values__number">{value.number}</span>
                      <span className="about-values__icon">
                        <Icon size={22} />
                      </span>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                  <div
                    className="about-values__media"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.08)), url("${imageUrl}")`,
                    }}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-mission-strip">
        <div className="container">
          <div className="about-mission-strip__grid">
            <Reveal className="about-mission-strip__column">
              <p className="section-eyebrow">Our Mission</p>
              <div className="section-accent" />
              <h3 className="about-mission-strip__title">
                Redefining what Pakistani garments mean to the world.
              </h3>
              <p className="section-text">
                To connect global wholesale buyers with Pakistan&apos;s finest manufacturing - delivering premium quality,
                uncompromising craftsmanship, and end-to-end sourcing solutions.
              </p>
            </Reveal>

            <Reveal className="about-mission-strip__column" delay={0.08}>
              <p className="section-eyebrow">Our Vision</p>
              <div className="section-accent" />
              <h3 className="about-mission-strip__title">
                Pakistan&apos;s most trusted garment export company.
              </h3>
              <p className="section-text">
                To be recognized globally for quality, reliability, and innovation - placing Pakistani craftsmanship in
                wardrobes across every continent.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="about-skills">
          <Reveal className="about-skills__media">
            <div className="about-skills__image" />
          </Reveal>

          <Reveal className="about-skills__content">
            <p className="section-eyebrow">Our Skills</p>
            <div className="section-accent" />
            <h2 className="section-title">Enhancing product quality through deeper textile understanding.</h2>
            <p className="section-text">
              Every strong apparel partnership depends on material choices, process clarity, and finishing control.
              These are the areas where OSD creates the most confidence for buyers.
            </p>

            <SkillCounters skills={skillScores} />
          </Reveal>
        </div>
      </section>

      <section className="section about-achievements">
        <div className="container about-achievements__grid">
          <Reveal>
            <p className="section-eyebrow">Achievements</p>
            <h2 className="section-title section-title--light">Milestones that show our manufacturing discipline in motion.</h2>
          </Reveal>

          <div className="about-achievements__stats">
            {achievementStats.map((item, index) => (
              <Reveal className="about-achievements__card" delay={index * 0.05} key={`${item.label}-${item.value}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-reasons">
        <div className="container about-reasons__layout">
          <Reveal className="about-reasons__visual">
            <div className="about-reasons__image" />
          </Reveal>

          <Reveal className="about-reasons__content">
            <p className="section-eyebrow">Why OSD</p>
            <div className="section-accent" />
            <h2 className="about-reasons__title">Cut the cost, keep the expertise</h2>
            <p className="about-reasons__lead">
              Skip the overhead of managing multiple vendors, fragmented communication, and inconsistent production
              support. OSD Apparels gives brands the benefit of coordinated expertise through one dependable
              manufacturing partner.
            </p>
            <p className="about-reasons__lead">
              The result is clearer execution, faster decision-making, stronger quality control, and a sourcing model
              that helps buyers protect margins without losing professional support.
            </p>

            <div className="about-reasons__list">
              {reasonsToChoose.map((item, index) => (
                <Reveal className="about-reasons__item" delay={index * 0.05} key={item}>
                  <span className="about-reasons__icon">
                    <BadgeCheck size={18} />
                  </span>
                  <strong>{item}</strong>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-pillars">
        <div className="container about-pillars__grid">
          <Reveal className="about-pillars__intro">
            <p className="section-eyebrow">Why Buyers Stay</p>
            <div className="section-accent" />
            <h2 className="about-pillars__title">Our five key pillars of success</h2>
            <p className="section-text">
              The operating principles behind OSD Apparels that help brands, retailers, and sourcing teams buy with
              more confidence.
            </p>
          </Reveal>

          <div className="about-pillars__cards">
            {pillarCards.map((pillar, index) => (
              <Reveal
                className={`about-pillars__card${pillar.featured ? " about-pillars__card--featured" : ""}`}
                delay={index * 0.05}
                key={pillar.title}
              >
                <span className="about-pillars__number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <span className="about-pillars__link">
                  Read more <ArrowRight size={18} />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-sustainability-banner">
        <Reveal className="about-sustainability-banner__inner">
          <div className="about-sustainability-banner__backdrop" />
          <div className="about-sustainability-banner__overlay">
            <p className="about-sustainability-banner__eyebrow">Refined Ethical Supply</p>
            <h2 className="about-sustainability-banner__title">
              Redefining sustainability with sourcing that&apos;s as refined as it is responsible.
            </h2>
          </div>
        </Reveal>
      </section>
    </>
  );
}
