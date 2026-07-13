import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { contact, navigation, productFamilies, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Link href="/" className="brand-mark brand-mark--footer" aria-label="OSD Apparels home">
              <Image
                src="/images/Footer logo.png"
                alt="OSD Apparels"
                width={560}
                height={208}
                className="brand-mark__logo brand-mark__logo--footer"
              />
            </Link>

            <div className="footer-socials" aria-label="OSD Apparels social links">
              <a
                href={socials.linkedin || "#"}
                target={socials.linkedin ? "_blank" : undefined}
                rel={socials.linkedin ? "noreferrer" : undefined}
                aria-label="LinkedIn"
                className={!socials.linkedin ? "is-disabled" : undefined}
              >
                <FaLinkedinIn />
              </a>
              <a
                href={socials.instagram || "#"}
                target={socials.instagram ? "_blank" : undefined}
                rel={socials.instagram ? "noreferrer" : undefined}
                aria-label="Instagram"
                className={!socials.instagram ? "is-disabled" : undefined}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Categories</h3>
          <div className="footer-links">
            <Link href="/products/mens">{productFamilies.mens.label}</Link>
            <Link href="/products/kids">{productFamilies.kids.label}</Link>
            <Link href="/services">Services</Link>
            <Link href="/custom-order">OEM / Private Label</Link>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <span>{contact.address}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <span>{contact.hours}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-bottom__copyright">Copyright {year} OSD Apparels. All rights reserved.</p>
      </div>
    </footer>
  );
}
