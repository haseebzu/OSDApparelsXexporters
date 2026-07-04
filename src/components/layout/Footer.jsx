import Image from "next/image";
import Link from "next/link";
import { contact, navigation, productFamilies } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark brand-mark--footer">
            <Image src="/images/osd-logo.png" alt="OSD Apparels" width={156} height={58} className="brand-mark__logo brand-mark__logo--footer" />
            <small>Apparels</small>
          </div>
          <p className="footer-copy">
            Modern fashion manufacturing and worldwide export support for private label brands, retailers, and custom apparel programs.
          </p>
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
            <Link href="/printing">Printing & Decoration</Link>
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
    </footer>
  );
}
