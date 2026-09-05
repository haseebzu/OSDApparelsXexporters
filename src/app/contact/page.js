import { Mail, MapPin, PhoneCall } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { contact } from "@/data/site";
import { buildBreadcrumbSchema, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact OSD Apparels | Apparel Manufacturer Pakistan",
  description:
    "Contact OSD Apparels in Faisalabad, Pakistan, to discuss custom clothing manufacturing, private label collections, sampling, and export orders for your brand.",
  path: "/contact",
  keywords: [
    "contact apparel manufacturer Pakistan",
    "contact garment exporter Faisalabad",
    "private label clothing manufacturer contact",
  ],
  category: "Contact",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Contact"
        title="Talk to OSD Apparels through the channel that works best for your buying team."
        text="Contact an apparel manufacturer in Pakistan for private-label development, bulk production planning, export support, and direct buyer communication."
        highlights={["WhatsApp First", "Fast Replies", "Global Buyer Friendly"]}
      />

      <section className="section">
        <div className="container contact-page">
          <div className="contact-page__panel">
            <Reveal className="contact-page__info">
              <p className="section-eyebrow">Get In Touch</p>
              <h2>Need More Information? Get in touch</h2>
              <p>
                Contact us today for private label development, production planning, and export-ready apparel support.
                Our team is here to make the next step simple.
              </p>

              <div className="contact-page__details">
                <div className="contact-page__detail">
                  <PhoneCall size={18} />
                  <div>
                    <strong>Phone Number</strong>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                </div>

                <div className="contact-page__detail">
                  <Mail size={18} />
                  <div>
                    <strong>Email Address</strong>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>

                <div className="contact-page__detail contact-page__detail--wide">
                  <MapPin size={18} />
                  <div>
                    <strong>Office Location</strong>
                    <span>{contact.address}</span>
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="contact-page__form">
              <p className="section-eyebrow">Send Message</p>
              <h2>Send Message</h2>
              <p>
                Please fill out the form below with your details and message, and our team will get back to you as
                soon as possible.
              </p>
              <QuoteForm compact sourcePage="contact" />
            </Reveal>
          </div>

          <Reveal className="contact-page__trust">
            <strong>Trusted by global buyers, private labels, and growing apparel brands.</strong>
            <div className="contact-page__trust-grid">
              <span>Worldwide Export Support</span>
              <span>Private Label Manufacturing</span>
              <span>MOQ from 30 Pieces</span>
              <span>Fast Sampling Response</span>
              <span>Knitted & Woven Garments</span>
            </div>
          </Reveal>

          <Reveal className="contact-page__map">
            <iframe
              className="contact-page__map-frame"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5581.253323154931!2d73.15674204701725!3d31.431006702047814!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1783961806477!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="OSD Apparels location map"
            />
            <div className="contact-page__map-overlay">
              <strong>Faisalabad, Pakistan</strong>
              <span>Production support for global apparel buyers</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
