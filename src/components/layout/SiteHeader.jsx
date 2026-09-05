"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(() => pathname !== "/");

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sentinel = document.querySelector("[data-hero-header-sentinel]");
    if (!sentinel) {
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`site-header${isHome ? " site-header--hero" : ""}${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="container site-header__inner">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <Image src="/images/osd-logo.png" alt="OSD Apparels logo" width={178} height={66} className="brand-mark__logo" />
        </Link>

        <nav className="site-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <Link className="button button--gold button--compact" href="/quote">
            Get Quote
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-drawer">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--gold" href="/quote" onClick={() => setOpen(false)}>
            Request Free Quote
          </Link>
        </div>
      ) : null}
    </header>
  );
}
