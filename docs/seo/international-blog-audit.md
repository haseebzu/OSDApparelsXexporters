# International blog audit and release foundation

Prepared 23 October 2026. Local-only. This report treats the owner-confirmed operating role as controlling: OSD is an in-house manufacturer in Faisalabad, not a sourcing service.

## Evidence and limits

`src/lib/blog-posts.js` reads published `blog_posts` from Supabase when configured and falls back to three local records in `src/data/site.js` only when no CMS data is available. The local CMS API was unavailable during this batch. The prior read-only route audit records 30 live CMS posts and their page text length, titles, descriptions and baseline internal links; it does not retain complete CMS bodies or Search Console query/page export. Word counts, actual current dates and impression/click data are therefore marked unavailable rather than estimated.

## Classification

| Slug | Source | Class | Evidence / action | Redirect target |
| --- | --- | --- | --- | --- |
| `choose-apparel-sourcing-agent-pakistan` | CMS + override | S | Fundamental agent-hiring topic; local permanent redirect and exclusion from listings/sitemap. | `/services` |
| `apparel-sourcing-timeline-new-brands` | CMS + override | S | Presents OSD around sourcing stages; local permanent redirect. | `/how-it-works` |
| `mistakes-sourcing-clothing-overseas` | CMS + override | S | Buyer/supplier sourcing topic; local permanent redirect. | `/custom-order` |
| `source-mens-apparel-pakistan-2026-guide` | CMS + override | S | Historical body states OSD connects buyers with manufacturers; local permanent redirect. | `/products/mens` |
| `fashion-trends-2026-what-to-source` | CMS + override | S | Historical body repeatedly describes OSD as a sourcing partner; local permanent redirect. | `/products` |
| `pakistan-vs-bangladesh-vs-china-apparel-sourcing` | CMS + override | S | Historical body depends on sourcing-partner positioning; local permanent redirect. | `/services` |
| `questions-to-ask-clothing-supplier` | CMS + override | R | Buyer-due-diligence topic remains useful; requires reviewed CMS rewrite, not redirect. | — |
| `workwear-uniform-manufacturing-guide` | CMS + override | R | Metadata contained sourcing language; body needs export before final classification. | — |
| `kids-clothing-manufacturing-guide` | CMS + override | R | Buyer topic is useful; safety/certification claims require evidence review. | — |
| `source-custom-sportswear-activewear-pakistan` | CMS + override | R | Retain only after activewear scope is confirmed; no new claim added. | — |
| `private-label-clothing-manufacturing-pakistan` | CMS + fallback | K | Manufacturing topic; review historical claims before future refresh. | — |
| `coord-sets-trend-guide-2026` | CMS + fallback | K | Buyer education; no agent positioning in current local fallback. | — |
| `kidswear-manufacturing-guide-pakistan` | CMS + fallback | K | Manufacturing buyer guide. | — |
| `ddd` | CMS + override | K, incomplete | Placeholder publication must be audited in CMS; no replacement content invented. | — |
| `custom-apparel-packaging-branding-guide` | CMS + override | K | Keep subject; verify any material/eco claims. | — |
| `faisalabad-cotton-tshirts-high-demand` | CMS + override | K | Keep subject; verify cotton/cost claims before refresh. | — |
| `private-label-streetwear-brand-launch` | CMS + override | K | Keep as manufacturing buyer education. | — |
| `dye-sublimation-printing-explained` | CMS + override | K | Keep only within confirmed in-house process scope. | — |
| `apparel-quality-inspection-stages` | CMS + override | K | Keep; verify QC process before OSD-specific claims. | — |
| `denim-manufacturing-101-pakistan` | CMS + override | K | Keep educationally; product capability remains unverified. | — |
| `fabric-gsm-guide-tshirts-hoodies-sportswear` | CMS + override | K | Keep educationally; do not treat values as OSD specifications. | — |
| `low-moq-clothing-manufacturer-startups` | CMS + override | K | Keep but do not publish a universal MOQ claim. | — |
| `fob-vs-cif-vs-ddp-shipping-terms` | CMS + override | K | Keep buyer education; do not state OSD offers each term. | — |
| `embroidery-vs-screen-printing-corporate-uniforms` | CMS + override | K | Keep within confirmed decoration scope. | — |
| `start-private-label-clothing-brand-2026` | CMS + override | K | Keep manufacturing buyer education. | — |
| `sustainable-apparel-manufacturing-guide` | CMS + override | K | Keep only subject to certification/material evidence review. | — |
| `custom-hoodie-manufacturing-guide` | CMS + override | K | Keep as a complement to the noindex hoodie product draft. | — |
| `faisalabad-textile-capital-of-asia` | CMS + override | K | Keep with fact review. | — |
| `aql-inspection-standards-explained` | CMS + override | K | Keep educationally; avoid claiming independent inspection. | — |
| `how-to-write-a-tech-pack-guide` | CMS + override | R | Keep after removing unsupported ODM/design-team language in CMS. | — |
| `screen-print-vs-dtg-vs-sublimation` | CMS + override | K | Keep within confirmed process scope. | — |
| `understanding-moq-clothing-manufacturing` | CMS + override | R | Keep after removing sourcing-company passage and confirming policy language. | — |
| `gots-vs-oeko-tex-certification-clothing` | CMS + override | K | Educational topic only; does not prove OSD certification. | — |
| `oem-vs-odm-vs-private-label-apparel` | CMS + override | R | Keep after removing sourcing-expert CTA and confirming any ODM claim. | — |

All historical pages had only global navigation links in the recorded audit. No Search Console impressions/clicks were supplied. The exact CMS change list is [cms-in-house-manufacturing-replacements.md](cms-in-house-manufacturing-replacements.md); provide a current CMS export before any CMS rewrite.

## Local implementation completed

- Created `src/lib/retired-blog-routes.js` as the single redirect/exclusion map.
- Added six direct HTTP 301 redirects in `next.config.mjs`.
- Filtered retired slugs from the blog loader, which removes them from the blog index and dynamic sitemap without changing CMS records.
- Preserved all old source paths as redirects; no old article path becomes a 404.

## Overlap recommendations

- Keep `understanding-moq-clothing-manufacturing` and `low-moq-clothing-manufacturer-startups` distinct only if the former explains MOQ mechanics and the latter addresses early-stage order planning. Otherwise merge after CMS review and redirect the weaker URL.
- Keep the two kidswear guides distinct only if one covers general product planning and the other documented compliance requirements. Do not create a third kidswear guide.
- Keep the existing custom-hoodie guide as buyer education. The `/products/hoodies` route is a product draft, not a duplicate article.

## Unpublished 30-article programme

The import script currently hard-codes `published: true`; using it for incomplete material would create a live CMS write, which is prohibited. The 30 requested items are therefore recorded as **unpublished editorial briefs**, not represented as import-ready articles. Each needs a full source-reviewed body, named author, real last-reviewed date, three contextual links selected when publishing, and owner fact checks. See [international-article-programme.md](international-article-programme.md).

Recommended sequencing: publish two or three approved articles weekly, beginning with product/process topics that do not require market-specific regulation or unsupported product facts. Do not link from public pages until each CMS draft is approved and published.
