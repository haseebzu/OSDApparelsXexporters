# SEO change review

Completed locally on 2026-09-05. No deployment was performed. The pre-existing untracked README.md was left untouched.

[Exact diff with old/new lines](seo-changes.patch) | [Rendered validation results](seo-validation.json)

## Scope and results

- 47 canonical public pages checked: 16 static content pages and 31 published CMS posts. The 3 static fallback posts also have editorial metadata, checked separately in source.
- All checked pages return HTTP 200, have unique titles of 50-60 characters and unique descriptions of 140-160 characters, self-referencing canonicals, and exactly one server-rendered H1. Homepage canonical URLs with and without a trailing slash are equivalent.
- Organization schema includes the existing company name, logo, URL, LinkedIn, Instagram, city/region/country address and sales contactPoint. Its phone now matches the visible +92 3234578442. No street address was invented.
- All 46 non-home public pages have BreadcrumbList. All 31 published articles have BlogPosting (an Article subtype) and valid ISO dates where supplied. Each product family has 10 Product entries describing its visible category cards.
- No visible FAQ sections were found in the route components or in published article bodies. Removed the unsupported FAQ schemas on /services and /how-it-works; no Q&A was invented.
- robots.txt already allows all crawlers and points to sitemap.xml. llms.txt returns HTTP 200. API noindex headers remain unchanged. Hosting-level bot protections were not tested.
- All rendered img elements have alt attributes. No raw HTML img elements exist in website source; next/image is used for foreground images. The decorative hero image inside an existing aria-hidden container now uses an empty alt.
- next.config.mjs already enables AVIF and WebP. Both formats were verified locally through /_next/image: HTTP 200 with image/avif and image/webp respectively. The uploaded reference preview remains unoptimized because it is a browser-local image.
- Google Translate already uses afterInteractive/lazyOnload. No blocking executable script requiring defer/async was found; JSON-LD scripts are data, not executable resources.
- /printing retains its existing 307 redirect to /services. Unknown blog slugs return 404. Redirects, API routes, metadata endpoints and nonexistent category pages are excluded from the content sitemap.
- Production build passed. Scoped ESLint passed. git diff --check passed. An AST comparison of all 28 changed existing source files found zero visual JSX changes outside alt attributes and JSON-LD scripts; all visible copy, heading tags, styles, classes and layout markup are preserved.

## File-by-file diff summary

Ranges use unified-diff notation: -old-start,count +new-start,count. Every changed line is available in the linked patch. New files use -0,0.

| File | Changed line ranges | Change |
| --- | --- | --- |
| [src/app/about/page.js](../src/app/about/page.js) | `-15 +15`; `-17 +17`; `-139 +139` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/blog/[slug]/page.js](../src/app/blog/[slug]/page.js) | `-6,0 +7,2`; `-21 +23,2`; `-24,2 +27`; `-30,0 +33`; `-45,2 +48,2`; `-66,2 +69,2` | Applied editorial post metadata and real modification dates; normalized Article dates and escaped JSON-LD payloads. BlogPosting is an Article subtype. |
| [src/app/blog/page.js](../src/app/blog/page.js) | `-9 +9`; `-11 +11`; `-72,2 +72,2` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/certifications/page.js](../src/app/certifications/page.js) | `-7 +7`; `-10 +10`; `-27 +27` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/contact/page.js](../src/app/contact/page.js) | `-11 +11`; `-29 +29` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/custom-order/page.js](../src/app/custom-order/page.js) | `-9 +9`; `-11 +11`; `-150 +150`; `-177 +177`; `-216 +216`; `-264 +264` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/how-it-works/page.js](../src/app/how-it-works/page.js) | `-6 +6`; `-9 +9`; `-12 +12`; `-26,28 +25,0`; `-57,2 +29` | Updated metadata; removed FAQ schema with no visible Q&A; escaped breadcrumb JSON-LD. |
| [src/app/layout.js](../src/app/layout.js) | `-85 +85`; `-89 +89` | Escaped existing Organization and WebSite JSON-LD; retained their placement and all visual layout markup. |
| [src/app/page.js](../src/app/page.js) | `-2,0 +3`; `-229 +230`; `-231 +232`; `-406 +407` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/printing/page.js](../src/app/printing/page.js) | `-5,2 +5,2`; `-8 +8` | Updated metadata and set canonical to existing redirect destination /services; retained the existing 307 redirect. |
| [src/app/privacy-policy/page.js](../src/app/privacy-policy/page.js) | `-2 +2`; `-5 +5,3`; `-11,0 +14,4` | Added unique metadata and missing BreadcrumbList; preserved visible copy. |
| [src/app/products/kids/page.js](../src/app/products/kids/page.js) | `-7 +7,2`; `-12 +13`; `-14 +15`; `-31,10 +32`; `-44,2 +36,2`; `-71 +63` | Updated metadata, replaced category-only ItemList with Product items, removed nonexistent fragment targets, and improved image alt text. |
| [src/app/products/mens/page.js](../src/app/products/mens/page.js) | `-7 +7,2`; `-12 +13`; `-14 +15`; `-31,10 +32`; `-44,2 +36,2`; `-71 +63` | Updated metadata, replaced category-only ItemList with Product items, removed nonexistent fragment targets, and improved image alt text. |
| [src/app/products/page.js](../src/app/products/page.js) | `-1,0 +2`; `-197,2 +198,3`; `-210 +212`; `-283 +285` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/quote/page.js](../src/app/quote/page.js) | `-7 +7`; `-9 +9`; `-27 +27` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/services/page.js](../src/app/services/page.js) | `-2 +2`; `-5 +5`; `-7 +7`; `-22,28 +21,0`; `-53,2 +25` | Updated metadata; removed FAQ schema with no visible Q&A; escaped breadcrumb JSON-LD. |
| [src/app/sitemap.js](../src/app/sitemap.js) | `-20 +19,0`; `-21,0 +21,5`; `-25,5 +29,5`; `-44,3 +48,3` | Removed 20 nonexistent category routes; retained real public pages and live posts; used actual blog dates; kept redirecting /printing out of the sitemap. |
| [src/app/sustainability/page.js](../src/app/sustainability/page.js) | `-8 +8`; `-11 +11`; `-28 +28` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/app/terms/page.js](../src/app/terms/page.js) | `-2 +2`; `-5 +5,3`; `-11,0 +14,4` | Added unique metadata and missing BreadcrumbList; preserved visible placeholder wording. |
| [src/app/testimonials/page.js](../src/app/testimonials/page.js) | `-7 +7`; `-10 +10`; `-27 +27` | Updated page metadata and/or descriptive alt text; escaped existing JSON-LD where present. |
| [src/components/forms/QuoteForm.jsx](../src/components/forms/QuoteForm.jsx) | `-190 +190` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/home/HeroSlider.jsx](../src/components/home/HeroSlider.jsx) | `-3,0 +4`; `-124 +125`; `-159 +160` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/layout/Footer.jsx](../src/components/layout/Footer.jsx) | `-17 +17` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/layout/SiteHeader.jsx](../src/components/layout/SiteHeader.jsx) | `-47 +47` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/services/ServicesPageContent.jsx](../src/components/services/ServicesPageContent.jsx) | `-393 +393`; `-409 +409` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/shared/CardSystem.jsx](../src/components/shared/CardSystem.jsx) | `-63 +63`; `-82 +82` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/components/shared/ProcessTimeline.jsx](../src/components/shared/ProcessTimeline.jsx) | `-117 +117` | Improved alt attributes only (plus the gallery alt-map import where needed). |
| [src/lib/metadata.js](../src/lib/metadata.js) | `-0,0 +1,2`; `-8 +10`; `-10 +12`; `-13,2 +15,2`; `-19,4 +21`; `-86 +85` | Updated default metadata; reused visible email, phone and social data; removed unrelated global keywords from per-page keyword arrays. |
| [src/lib/blog-seo.js](../src/lib/blog-seo.js) | `-0,0 +1,173` | Added unique editorial titles/descriptions for 31 published CMS posts and 3 fallback articles; added metadata fallback for future posts and safe ISO date conversion. |
| [src/lib/image-alt.js](../src/lib/image-alt.js) | `-0,0 +1,30` | Added descriptive image-specific alt text for 24 gallery assets. |
| [src/lib/product-schema.js](../src/lib/product-schema.js) | `-0,0 +1,27` | Added 10 visible product-category entries per family, nested as Product items in ItemList; no invented prices, offers, reviews, or ratings. |
| [public/llms.txt](../public/llms.txt) | `-0,0 +1,31` | Added a machine-readable overview linking to real public pages and the live sitemap. |

## Needs manual review

1. **Primary keyword in visible H1s.** Existing heading text was not rewritten. The homepage starts with "EXCELLENCE"; /about uses "About OSD Apparels"; /products, /blog, /contact and the policy pages have generic or placeholder headings. Their primary keyword alignment needs a visible-copy decision. The homepage H1 also changes with its existing animated state; only server-rendered count was checked.
2. **Heading hierarchy.** /blog, /certifications, /quote and blog-post sidebars jump from H1 to H3. Footer headings are H3 sitewide, including pages with no H2. Existing rules such as .blog-card h3, .detail-card h3 and .site-footer h3 bind styling to the tag. Heading corrections were deferred under the instruction to skip visual component markup changes; completing them requires reviewing each level and confirming unchanged rendering.
3. **Contextual internal links.** Existing navigation and CTA links remain. Inserting links into body paragraphs or CMS text requires wrapping text in new markup or changing the blog renderer, so this was deferred. Natural opportunities include "private-label sourcing" in HeroSlider.jsx -> /services, "private label clothing" in blog content -> /custom-order, "co-ord sets" -> /products/mens, and "school uniforms" -> /products/kids. Use these only where the existing article actually contains the phrase. No new visible sentences were added.
4. **Background-image performance and accessibility.** CSS and inline background images in globals.css, about/page.js, products/page.js and ProductCard.jsx bypass next/image and cannot have image alt attributes. Converting them would change markup/CSS. The existing /images/hero-factory.png reference in globals.css and the blog fallback list points to a missing public asset; repairing/replacing it affects visible images and was skipped.
5. **Published placeholder content.** /blog/ddd contains a repeated-letter excerpt and body rather than an article. Its metadata accurately identifies it as unfinished; its publication status and visible content remain unchanged. /terms and /privacy-policy also contain visible draft/placeholder language. Review those in the CMS/content workflow.
6. **Claims and keyword coverage.** "Private label clothing manufacturer no minimum" conflicts with the visible 50-piece MOQ and was not used. GOTS/OEKO-TEX keywords appear as certification-guide subjects, not newly asserted company credentials. Verify documentation before adding claims that OSD is certified. Country-specific buyer keywords and narrower categories have no separate routes; no landing pages or unsupported promises were invented to force every keyword into metadata.
7. **Product rich results.** Product data describes the existing family-page categories, without fictional offers or ratings. Category pages do not automatically qualify for Google Product rich results; that would require a separate review of real product-detail content. See [Google's Product snippet requirements](https://developers.google.com/search/docs/appearance/structured-data/product-snippet).
8. **Future CMS posts.** Metadata overrides cover all 31 posts published at validation time. Newly published or retitled articles use a text-based fallback until an editorial entry is added in blog-seo.js; recheck uniqueness, meaning and character limits when publishing.

## Keyword assignment

| Page | Main topic from supplied map |
| --- | --- |
| / | Custom clothing manufacturer; apparel manufacturer Pakistan; garment exporter Faisalabad |
| /about | OSD Apparels Faisalabad; garment exporter Pakistan; apparel sourcing Pakistan |
| /products | Knitted garments manufacturer; woven garments manufacturer |
| /products/mens | Menswear manufacturer; custom hoodies, t-shirts, jackets, denim, activewear, co-ord sets |
| /products/kids | Kidswear manufacturer; kids clothing manufacturer wholesale; school uniforms |
| /services | Low MOQ clothing manufacturer 50 pieces; clothing manufacturer for small brands |
| /custom-order | Private label clothing manufacturer; OEM clothing manufacturer Pakistan |
| /blog | Apparel sourcing Pakistan; private label clothing manufacturer for startups |
| /sustainability | Sustainable apparel manufacturer Pakistan |
| /testimonials | OSD Apparels reviews |
| /contact, /quote | OSD Apparels; custom clothing manufacturing enquiries |
| /blog/[slug] | Article-specific sourcing, production, fabric, MOQ, decoration and product subjects |

## Validated page metadata

| Route | Title | Title chars | Description chars |
| --- | --- | ---: | ---: |
| / | Custom Clothing Manufacturer Pakistan \| OSD Apparels | 52 | 153 |
| /about | About OSD Apparels \| Garment Exporter Faisalabad, PK | 52 | 151 |
| /blog | Apparel Sourcing Pakistan & Private Label Blog \| OSD | 52 | 157 |
| /blog/apparel-quality-inspection-stages | Apparel Quality Inspections: Buyer Guide \| OSD Apparels | 55 | 152 |
| /blog/apparel-sourcing-timeline-new-brands | Apparel Sourcing Timeline for New Brands \| OSD Apparels | 55 | 149 |
| /blog/aql-inspection-standards-explained | AQL Inspection Standards for Apparel Buyers \| OSD Apparels | 58 | 152 |
| /blog/choose-apparel-sourcing-agent-pakistan | Choosing an Apparel Sourcing Agent in Pakistan \| OSD | 52 | 140 |
| /blog/custom-apparel-packaging-branding-guide | Custom Apparel Packaging & Branding Guide \| OSD Apparels | 56 | 150 |
| /blog/custom-hoodie-manufacturing-guide | Custom Hoodie Manufacturing for Streetwear \| OSD Apparels | 57 | 143 |
| /blog/ddd | Co-Ord Sets for Fashion Brands in 2026 \| OSD Apparels | 53 | 153 |
| /blog/denim-manufacturing-101-pakistan | Denim Manufacturing in Pakistan: Buyer Guide \| OSD Apparels | 59 | 158 |
| /blog/dye-sublimation-printing-explained | Dye Sublimation Printing for Custom Apparel \| OSD Apparels | 58 | 158 |
| /blog/embroidery-vs-screen-printing-corporate-uniforms | Embroidery vs Screen Printing for Uniforms \| OSD Apparels | 57 | 142 |
| /blog/fabric-gsm-guide-tshirts-hoodies-sportswear | Fabric GSM Guide for T-Shirts & Hoodies \| OSD Apparels | 54 | 156 |
| /blog/faisalabad-cotton-tshirts-high-demand | Cotton T-Shirt Manufacturing in Faisalabad \| OSD Apparels | 57 | 144 |
| /blog/faisalabad-textile-capital-of-asia | Faisalabad Textile Manufacturing & Sourcing \| OSD Apparels | 58 | 148 |
| /blog/fashion-trends-2026-what-to-source | Fashion Trends 2026: Apparel Sourcing Guide \| OSD Apparels | 58 | 153 |
| /blog/fob-vs-cif-vs-ddp-shipping-terms | FOB vs CIF vs DDP: Apparel Shipping Terms \| OSD Apparels | 56 | 141 |
| /blog/gots-vs-oeko-tex-certification-clothing | GOTS vs OEKO-TEX: Clothing Certification Guide \| OSD | 52 | 155 |
| /blog/how-to-write-a-tech-pack-guide | How to Write a Clothing Tech Pack: Brand Guide \| OSD | 52 | 144 |
| /blog/kids-clothing-manufacturing-guide | Kids Clothing Manufacturing: Wholesale Buyer Guide \| OSD | 56 | 153 |
| /blog/low-moq-clothing-manufacturer-startups | Low MOQ Clothing Manufacturer for Startups \| OSD Apparels | 57 | 157 |
| /blog/mistakes-sourcing-clothing-overseas | Overseas Clothing Sourcing Mistakes to Avoid \| OSD Apparels | 59 | 156 |
| /blog/oem-vs-odm-vs-private-label-apparel | OEM vs ODM vs Private Label Clothing \| OSD Apparels | 51 | 146 |
| /blog/pakistan-vs-bangladesh-vs-china-apparel-sourcing | Apparel Sourcing: Pakistan vs Bangladesh vs China \| OSD | 55 | 147 |
| /blog/private-label-streetwear-brand-launch | Private Label Streetwear: Brand Launch Guide \| OSD Apparels | 59 | 143 |
| /blog/questions-to-ask-clothing-supplier | 10 Questions to Ask Your Clothing Supplier \| OSD Apparels | 57 | 145 |
| /blog/screen-print-vs-dtg-vs-sublimation | Screen Print vs DTG vs Sublimation: Buyer Guide \| OSD | 53 | 145 |
| /blog/source-custom-sportswear-activewear-pakistan | Custom Activewear Manufacturing in Pakistan \| OSD Apparels | 58 | 157 |
| /blog/source-mens-apparel-pakistan-2026-guide | Menswear Sourcing in Pakistan: 2026 Guide \| OSD Apparels | 56 | 158 |
| /blog/start-private-label-clothing-brand-2026 | Start a Private Label Clothing Brand in 2026 \| OSD Apparels | 59 | 150 |
| /blog/sustainable-apparel-manufacturing-guide | Sustainable Apparel Manufacturing Guide \| OSD Apparels | 54 | 160 |
| /blog/understanding-moq-clothing-manufacturing | Clothing Manufacturing MOQ: How to Negotiate \| OSD Apparels | 59 | 155 |
| /blog/workwear-uniform-manufacturing-guide | Workwear & Uniform Manufacturing Guide \| OSD Apparels | 53 | 146 |
| /certifications | Garment Manufacturing Standards & Certifications \| OSD | 54 | 156 |
| /contact | Contact OSD Apparels \| Apparel Manufacturer Pakistan | 52 | 158 |
| /custom-order | Private Label Clothing Manufacturer \| OSD Apparels OEM | 54 | 154 |
| /how-it-works | Private Label Clothing Manufacturing Process \| OSD OEM | 54 | 159 |
| /privacy-policy | OSD Apparels Privacy Policy \| Business Enquiry Details | 54 | 157 |
| /products | Knitted & Woven Garments Manufacturer \| OSD Apparels | 52 | 154 |
| /products/kids | Wholesale Kidswear Manufacturer Pakistan \| OSD Apparels | 55 | 153 |
| /products/mens | Menswear Manufacturer in Pakistan \| OSD Apparels OEM | 52 | 152 |
| /quote | Request a Custom Clothing Manufacturing Quote \| OSD | 51 | 156 |
| /services | Low MOQ Clothing Manufacturer Services \| OSD Apparels | 53 | 155 |
| /sustainability | Sustainable Apparel Manufacturing Pakistan \| OSD Apparels | 57 | 157 |
| /terms | OSD Apparels Commercial Terms \| Manufacturing Orders | 52 | 154 |
| /testimonials | OSD Apparels Reviews \| Pakistan Clothing Manufacturer | 53 | 157 |

Descriptions, rendered headings and schema types for every checked page are in seo-validation.json. JSON-LD escaping follows the [Next.js JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld).
