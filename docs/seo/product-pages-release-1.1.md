# Hoodie and T-shirt pages — Release 1.1 local publication record

Prepared 24 October 2026. Owner approval applies only to `/products/hoodies` and `/products/t-shirts`. No deployment, CMS/database write, push or hosting change was made.

## Published local routes

| Route | Title | Description | H1 |
| --- | --- | --- | --- |
| `/products/hoodies` | `Custom Hoodie Manufacturer Pakistan | OSD Apparels` | `Custom hoodies made in Faisalabad, Pakistan, with fabric, fit, decoration, labels and packaging options. Request a quote.` | `Custom Hoodie Manufacturer in Pakistan` |
| `/products/t-shirts` | `Custom T-Shirt Manufacturer Pakistan | OSD Apparels` | `Custom T-shirts made in Faisalabad, Pakistan, with fabric, fit, decoration, labels and packaging options. Request a quote.` | `Custom T-Shirt Manufacturer in Pakistan` |

Both titles are under 60 characters and each description is under 155 characters. The pages use existing components, image files, styling and layout.

## Exact text changes

| Item | Before | After |
| --- | --- | --- |
| MOQ on both pages | `Minimum order quantity depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.` | `Our minimum order starts at 50 pieces. The exact minimum depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.` |
| Draft labels | `Product Draft - Owner Review Required`; `Owner-sensitive options are marked for review before this draft can be published.` | Removed. |
| Quote-process wording | `OSD then confirms MOQ, price, sampling and lead time in the quote.` | `OSD reviews the requirements and confirms the order details in the quote.` |
| Owner markers | `[OWNER: remove if not offered]` in both option lists. | Removed; the owner confirmed every existing option is offered. |

No price, sampling fee/time, lead time, delivery promise, certification, client, rating or review claim was added. The quote-process wording was softened to remove price, sampling and lead-time references.

## Discovery and linking

- `/products`: the existing Hoodies and Graphic Tees category-map cards now link to `/products/hoodies` and `/products/t-shirts`.
- `/products/mens`: the existing hoodie and T-shirt category-card CTAs now link to the specific product pages; all other category CTAs still use `/quote`.
- Each new page links to `/products/mens`, `/custom-order`, `/services` and `/quote` through the existing button-row pattern.
- `public/llms.txt` contains accurate one-line descriptions for both pages.
- [internal-link-proposals.md](internal-link-proposals.md) records CMS-only exact proposed annotations for the hoodie, tech-pack and MOQ articles. No CMS record was edited.

## Metadata and structured data

Both pages use index/follow metadata, self-referencing `https://www.osdapparels.com` canonicals, matching Open Graph/Twitter title and description, and existing real page images. Each page emits its own BreadcrumbList only: Home > Products > Hoodies or T-Shirts. No Product, Offer, price, review, rating or FAQ schema is emitted.

## Verification

| Check | Result |
| --- | --- |
| Default production build, `SHOW_DRAFT_PAGES` unset | `/products/hoodies` and `/products/t-shirts` returned 200 with `index, follow`; `/export-markets` returned 404. |
| `SHOW_DRAFT_PAGES=true` build | `/export-markets` returned 200 with `noindex, nofollow`. |
| Canonicals | One self-referencing absolute `www` canonical on each published page. |
| Sitemap | Contains both published product routes; excludes `/export-markets`. |
| Rendered HTML | No `[OWNER`, `TODO`, draft/developer label, price, sampling or lead-time phrase on either published page. |
| Links | Both product and menswear pages link to both routes; each new page has the required hub, service, custom-order and quote links. |
| Quote CTA | Present on both pages and links to `/quote`. |
| Image alt text | Checked against the images: three hoodies on a rail; five graphic T-shirts on a black rail. |
| Build/lint | Focused ESLint and production builds in both required flag modes passed. |
| Visual screenshots | Pending owner review; no browser screenshot surface was available. |

## MOQ consistency follow-up

The owner confirmed a general 50-piece minimum for these published pages. Existing unrelated local surfaces still use 30-piece wording, including the homepage data, top bar, contact page, services page/component, `src/data/site.js` product data and `public/llms.txt`. These were not changed because this approval covers only the hoodie and T-shirt publication batch. Confirm whether the 50-piece policy should replace those independent claims in a separate factual-correction batch.

## Release verdict

**READY FOR A PREVIEW DEPLOYMENT**, subject to owner visual review at 1440 px and 390 px. `/export-markets` remains hidden by default and the unpublished articles remain unpublished.
