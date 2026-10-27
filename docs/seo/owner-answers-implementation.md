# Owner-answer implementation — 22 October 2026

This record maps the owner answers supplied on 22 October 2026 to the local implementation. It does not establish any fact not stated by the owner, and it does not change production CMS records.

## Implemented confirmed facts

| Topic | Local pages and source | Applied wording or effect | Limits retained |
| --- | --- | --- | --- |
| Scope | `/products` — `src/app/products/page.js`; `/services` — `src/components/services/ServicesPageContent.jsx` | States custom knitted and woven apparel for brands, retailers and other businesses ordering in bulk. | Does not claim every specialist garment, material or technical capability. |
| MOQ | `/services`; `src/components/layout/TopBar.jsx`; `/contact`; homepage `src/data/site.js`; `public/llms.txt` | “Minimum order starts at 30 pieces. Confirm the quantity breakdown for your design, colours and sizes when requesting a quote.” | Product-specific 30/50-piece labels remain pending clarification. |
| Decoration and finishing | `/custom-order` — `src/app/custom-order/page.js`; shared homepage trust point — `src/data/site.js` | Lists screen printing, puff printing, DTG, sublimation, heat transfer, embroidery, and garment washing/finishing; method depends on garment, fabric and requested result. | Does not say any method is in-house or suited to every fabric. |
| Sampling and private label | `/custom-order`; `/services` | Buyers may provide a tech pack, reference garment, drawing or photograph; samples are charged according to the product and require approval before bulk production; labels, tags, packaging and NDAs are available. | No free-sample, revision-limit, confidentiality-guarantee or packaging-format claim. |
| Shipping | `/custom-order`; `/services` | Shipping can be arranged to more than 50 countries; buyer-arranged or OSD-arranged shipping; DDP can be quoted where available; quote confirms terms, included costs and delivery estimate. | Does not claim that every shipment is DDP, that shipping/duty/tax is included, or that DAP/FOB/CIF is available. |
| Quality | `/services`; `/custom-order` | “Quality checks form part of the manufacturing process.” | No AQL, third-party inspection, documented stage or guarantee claim. |

## Unsupported claims flagged for a later evidence-led correction

These claims were not verified by the owner answers. They are deliberately recorded rather than changed in this focused batch because the supplied answers did not establish a replacement fact.

| URL / source location | Existing unsupported wording | Issue | Proposed correction after confirmation |
| --- | --- | --- | --- |
| `/services` — `ServicesPageContent.jsx:130-193` | “Certified sustainable from yarn to finished garment”, named GRS/RCS/GOTS/Oeko-Tex/WRAP/BSCI claims, “Third-party audited”, and related material/traceability claims. | No certificate/audit holder, site, scope, validity or publication permission was supplied. | Replace only with certificate-holder and scope wording supported by current documentation, or remove the affected claim. |
| `/certifications` and `/sustainability` — `src/data/site.js:93-123`, rendered by their pages | GOTS, SEDEX, SMETA 4-Pillar, ISO 9001:2015, OEKO-TEX and BSCI descriptions presented as OSD signals. | The answers do not establish OSD’s relationship to any listed standard. | Obtain current certificate/audit evidence and approved wording before retaining or revising each item. |
| `/how-it-works` — `src/data/site.js:142-154` | “Mass manufacturing with live milestone updates and QC reporting”; “Third-party or in-house rigorous final audit”; “Doorstep logistics”. | Specific reporting, audit and delivery practices remain unconfirmed. | Use the confirmed quality-check and quote-specific-shipping wording, once the owner approves the page update. |
| `/products/mens` and `/products/kids` | “50 pcs per style” labels. | Product-specific MOQ conditions conflict with the approved generic 30-piece starting minimum and have not been confirmed. | Confirm MOQs by product/design/colour and whether sizes can mix; then retain, replace or remove each label. |
| Homepage — `src/app/page.js` product cards | Category-specific MOQ values from 30+ to 100+. | The owner confirmed only a 30-piece starting minimum, not a category matrix. | Confirm the category MOQ matrix before retaining or changing the cards. |
| Homepage shared stats — `src/data/site.js:51-57` | “50k+” annual capacity, “3” QC checkpoints, “7 days” sampling speed and “24 hrs” quote turnaround. | These have no support in the supplied answers. | Confirm source, period, conditions and approved public wording for each figure. |
| `/products/kids` and `src/data/site.js` category data | Dry-fit, compression, UV-protective, quick-dry, safety and performance language. | The confirmed categories do not establish performance, safety or regulatory attributes. | Confirm material/construction specifications and evidence for each product-specific claim. |

## Pending CMS and translation work

Published blog content remains CMS-controlled. No CMS record was changed. The exact CMS review proposals remain in `docs/seo/manufacturing-cms-proposals.md`. French and Italian keyword candidates remain localization backlog items; no translated text was added to English pages.

## Recovery

All local changes in this batch are uncommitted. To revert only this batch after committing it, use the commit created for the batch with `git revert <commit>`. Before a commit exists, restore only the files listed in the related change-log entry from the immediate pre-batch commit; do not use `git reset` or `git clean`, because the working tree contains pre-existing work.
