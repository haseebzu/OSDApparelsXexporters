"use client";

import Script from "next/script";
import { getIncludedLanguages } from "@/lib/googleTranslate";

export function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" className="google-translate-anchor" aria-hidden="true" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = window.googleTranslateElementInit || function () {
            if (window.__osdTranslateInitialized) return;
            if (!window.google || !window.google.translate) return;

            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "${getIncludedLanguages()}",
                autoDisplay: false,
                multilanguagePage: false,
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
              },
              "google_translate_element"
            );

            window.__osdTranslateInitialized = true;
            window.dispatchEvent(new CustomEvent("osd-google-translate-ready"));
          };
        `}
      </Script>
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />
    </>
  );
}
