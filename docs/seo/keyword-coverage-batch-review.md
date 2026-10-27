# Keyword coverage batch review — 22 October 2026

This batch implements the smallest evidence-supported improvements after reviewing every partial-coverage row in [keyword-coverage-audit.md](keyword-coverage-audit.md). It changes local static product-category pages only. No CMS records, fallback posts, translations, routes, images, styles, product-card structure or enquiry implementation changed.

## Review of the 48 partially covered phrases

| Buyer-intent group | Phrases reviewed | Current conclusion | Batch decision |
| --- | --- | --- | --- |
| Hoodies | custom/private-label/ Pakistan hoodie manufacturer; oversized, heavyweight, French terry, embroidered and cut-and-sew hoodies | `/products/mens` naturally covers general hoodie intent through its category data. Material, decoration and cut-and-sew detail is not owner-verified per hoodie program. | Keep category hub. No exact-match insertion and no hoodie page. Owner confirmation needed before detailed claims; distinct page requires unique evidence and demand. |
| T-shirts | custom/private-label/Pakistan, oversized, heavyweight, cotton, cut-and-sew and printed T-shirts | `/products/mens` naturally covers general T-shirt intent. Fabric, print and construction variations need confirmation. | Keep category hub. No T-shirt page or added variants in this batch. |
| Kidswear | children’s/custom/private-label/Pakistan kidswear; kids T-shirts, hoodies and wholesale | `/products/kids` already covers category intent. “Wholesale” could imply ready stock, so it was an accuracy issue rather than a keyword opportunity. | Update metadata and enquiry copy to custom manufacturing. Product-specific/wholesale claims await confirmation. |
| Co-ords and loungewear | co-ords, matching/custom/private-label sets; loungewear and kids co-ords | Existing mens and kids categories cover the concepts naturally. No approved examples or order constraints justify a commercial page. | Adequately covered through category wording for now; do not create a page. |
| Bottoms | joggers, sweatpants, cargos, shorts, trousers and men’s bottoms | Existing mens category data names these ranges. No evidence supports a series of product pages. | Adequately covered through category wording for now; maintain menswear hub. |
| Polos and shirts | polos, pique polos, formal/woven/corporate/private-label shirts | Existing mens category data naturally covers polos and formal shirts. Construction/corporate scope needs evidence. | Adequately covered through category wording for now; no separate page. |

The groups above account for all 48 partial phrases. “Adequately covered” means no exact-match repetition is necessary; it does not upgrade unverified technical/product claims to implemented status.

## Page selection

| Selected page | Why selected | Search Console evidence | Buyer usefulness |
| --- | --- | --- | --- |
| `/products/mens` | It is the existing owner for hoodie, T-shirt, co-ord, bottoms and polo/shirt variants; the audit showed that the general intent exists but the enquiry handoff was generic. | Historical export: 1 click / 102 impressions. This is page-level evidence, not keyword attribution or a ranking claim. | Tells a buyer to supply garment, material and design requirements before requesting a quote. |
| `/products/kids` | It owns the kidswear cluster. The previous “Wholesale” metadata could imply a stock model that the confirmed manufacturer positioning does not establish. | Historical export: 1 click / 33 impressions. This is page-level evidence only. | States custom kidswear manufacturing and tells buyers what to provide for an enquiry without adding a product or safety claim. |

`/products` has 1 click / 109 impressions but already serves category discovery and safely links to the two selected hubs. `/custom-order` has 0 clicks / 78 impressions and already has strong private-label/OEM coverage; no concrete metadata or buyer-information defect supported another edit. No third page was selected merely to fill the batch.

## Exact local changes

| URL | Location | Before | After | Keyword groups improved |
| --- | --- | --- | --- | --- |
| `/products/mens` | Catalog intro body copy | “Select a category to request a quote. Each card connects you to OSD Apparels for faster menswear manufacturing enquiries.” | “Select a category to start a custom menswear manufacturing enquiry. Share the garment, material, and design requirements for your project when you request a quote.” | General menswear, hoodie/T-shirt, co-ord, bottoms and polos/shirts enquiry context. |
| `/products/kids` | Metadata title | “Wholesale Kidswear Manufacturer Pakistan \| OSD Apparels” | “Kidswear Manufacturer Pakistan \| OSD Apparels” | Kidswear manufacturer Pakistan; removes unsupported stock/wholesale implication. |
| `/products/kids` | Metadata description | “Explore wholesale kidswear manufacturing at OSD Apparels in Pakistan, from t-shirts and hoodies to school uniforms, activewear, and matching co-ord sets.” | “Explore custom kidswear manufacturing at OSD Apparels in Pakistan, from t-shirts and hoodies to school uniforms, activewear, and matching co-ord sets.” | Custom kids clothing manufacturer semantic intent; existing category intent. |
| `/products/kids` | Catalog intro body copy | “Select a category to request a quote. Each card links directly into a cleaner kidswear manufacturing enquiry flow.” | “Select a category to start a custom kidswear manufacturing enquiry. Share the garment, material, and design requirements for your project when you request a quote.” | Kidswear and children’s custom-manufacturing enquiry context. |

The phrase “Your Brand, Your Way” remains in the existing homepage hero. No sourcing-service wording was introduced.

## Verification-dependent and localization backlog

[keyword-verification-questionnaire.md](keyword-verification-questionnaire.md) deduplicates the 59 verification-dependent phrases into ten owner questions. It identifies the exact fact, affected phrases/pages, existing conflicts and required evidence.

All French and Italian candidates remain in the localization backlog. No French, Italian or German fragments were inserted into English pages. The existing shared-URL language selector is not a localized SEO implementation; future work requires complete native-reviewed pages, stable language URLs, translated metadata, self-canonicals and reciprocal hreflang.

## CMS boundary

Blog posts are CMS-controlled when published records are available. This batch does not change CMS copy or count fallback files as published content. Existing CMS sourcing-language replacements remain in [manufacturing-cms-proposals.md](manufacturing-cms-proposals.md), pending a separate authorized CMS workflow.

## Next recommended batch

Obtain answers and evidence for the MOQ, category scope, decoration, activewear, uniforms, QC, certification, shipping and development questions. Then make one small fact-backed update to the relevant existing page. If approved hoodie or T-shirt specifications plus evidence and demand emerge, prepare one distinct product-page draft for review rather than several overlapping pages.
