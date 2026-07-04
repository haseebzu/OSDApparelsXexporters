import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Globe2,
  Phone,
  Sparkles,
  Users2,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { contact, processSteps, stats, trustPoints } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About OSD Apparels",
  description: "Meet OSD Apparels, a modern manufacturing partner for global apparel brands and sourcing teams.",
  path: "/about",
});

const focusCards = [
  {
    title: "Our Vision",
    text: "To be the apparel partner buyers trust for calm communication, commercial quality, and long-term growth.",
    tone: "copy",
    icon: Users2,
  },
  {
    title: "Visual Direction",
    text: "Premium presentation matters because serious buyers judge operational discipline through every touchpoint.",
    tone: "image",
  },
  {
    title: "Our Mission",
    text: "Deliver custom garments, private-label programs, and decoration services with predictable process and dependable finish.",
    tone: "copy",
    icon: Sparkles,
  },
  {
    title: "Material Understanding",
    text: "From trims and GSM choices to print feasibility, we keep product decisions grounded in production reality.",
    tone: "image-alt",
  },
  {
    title: "Our Goal",
    text: "Help brands launch cleaner collections with fewer delays, better communication, and repeat-order confidence.",
    tone: "copy",
    icon: Award,
  },
  {
    title: "Execution Focus",
    text: "Sampling, bulk planning, quality checkpoints, and export support all stay aligned under one clear workflow.",
    tone: "image-dark",
  },
];

const skillScores = [
  { label: "Textile Services", value: 90 },
  { label: "Material Readiness", value: 85 },
  { label: "Sewing Services", value: 92 },
  { label: "Design Support", value: 87 },
];

const teamMembers = [
  { name: "Ricky Martin", role: "Production Manager" },
  { name: "Linna Stones", role: "Sampling Lead" },
  { name: "Fanny Lawson", role: "Quality Supervisor" },
  { name: "Paula Frains", role: "Client Success" },
];

const achievementStats = [
  stats[0],
  { label: "Years Experience", value: "25+" },
  { label: "Textile Projects", value: "1,450+" },
  { label: "Buyer Reviews", value: "999+" },
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

            <div className="about-story__meta">
              <div>
                <Globe2 size={18} />
                <div>
                  <strong>Visit Us</strong>
                  <span>{contact.address}</span>
                </div>
              </div>
              <div>
                <Phone size={18} />
                <div>
                  <strong>Contact</strong>
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>

            <div className="button-row">
              <Link className="button button--gold" href="/quote">Learn More</Link>
              <Link className="button button--outline" href="/contact">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container about-focus-grid">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal className={`about-focus-card about-focus-card--${card.tone}`} delay={index * 0.05} key={card.title}>
                {card.tone.startsWith("image") ? (
                  <div className={`about-focus-card__image about-focus-card__image--${card.tone}`} />
                ) : (
                  <>
                    <div className="about-focus-card__icon">{Icon ? <Icon size={20} /> : null}</div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <Link href="/contact">Learn More</Link>
                  </>
                )}
              </Reveal>
            );
          })}
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

      <section className="section">
        <div className="container about-skills">
          <Reveal className="about-skills__media">
            <div className="about-skills__image" />
            <button className="about-skills__play" aria-label="Play brand story video">
              <span />
            </button>
          </Reveal>

          <Reveal className="about-skills__content">
            <p className="section-eyebrow">Our Skills</p>
            <div className="section-accent" />
            <h2 className="section-title">Enhancing product quality through deeper textile understanding.</h2>
            <p className="section-text">
              Every strong apparel partnership depends on material choices, process clarity, and finishing control.
              These are the areas where OSD creates the most confidence for buyers.
            </p>

            <div className="about-skills__grid">
              {skillScores.map((skill) => (
                <div className="skill-ring" key={skill.label}>
                  <div className="skill-ring__circle">
                    <span>{skill.value}%</span>
                  </div>
                  <strong>{skill.label}</strong>
                  <small>Integrated into sourcing, sampling, and final production review.</small>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-workband">
        <div className="container">
          <Reveal className="about-workband__intro">
            <p className="section-eyebrow">How We Work</p>
            <h2 className="section-title section-title--light">Bringing you the right balance of style, speed, and structure.</h2>
          </Reveal>

          <div className="about-workband__grid">
            {processSteps.slice(0, 4).map((step, index) => (
              <Reveal className="about-workband__card" delay={index * 0.05} key={step.title}>
                <div className="about-workband__number">{step.number}</div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
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

      <section className="section about-clients">
        <div className="about-clients__backdrop" />
        <div className="container about-clients__inner">
          <p>Goodwell</p>
          <p>Amble</p>
          <p>Neospa</p>
          <p>Drextel</p>
          <p>Bourton</p>
          <p>Mevlana</p>
          <p>Amelie</p>
          <p>Strana</p>
        </div>
      </section>
    </>
  );
}
