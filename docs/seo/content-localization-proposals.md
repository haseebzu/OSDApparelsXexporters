# Buyer content and localization proposals

> **Superseded positioning note, 22 October 2026:** This historical proposal contains earlier manufacturing-and-sourcing wording. Current public positioning is manufacturing-only. Do not publish or reuse its sourcing references. See [technical-ai-international-review.md](technical-ai-international-review.md) for the current French/Italian localization conditions and manufacturer-only briefs.

22 October 2026. Drafts only; nothing published, no new routes or sections implemented. Preserve “Your Brand, Your Way,” both services, existing hero/main paragraphs and visual components. Existing exact factual corrections remain in [content-corrections-proposed.md](content-corrections-proposed.md); existing CMS link proposals remain in [internal-link-proposals.md](internal-link-proposals.md).

## Coverage before additions

| Buyer question | Existing coverage/source | Missing or uncertain answer / action |
| --- | --- | --- |
| What can OSD manufacture/source? | Products, menswear, kidswear; `src/data/site.js`, services component | Category labels exist; owner-approved garment/material/technique specifications and direct/partner responsibility are missing as evidence. Do not expand catalog from competitor research. |
| Customization choices? | Services component options and QuoteForm fabric/decoration/description fields | A field accepting a request is not proof every option is available. Confirm constraints by garment. |
| What should buyers provide? | QuoteForm includes category, quantity, fabric, decoration, description and references | Already answered by form; no duplicate intake section needed. |
| Samples and approvals? | `processSteps`, how-it-works timeline | Sequence exists; documented approver, revision limits, charges and approval record need confirmation. |
| MOQ conditions? | TopBar, site data, services and blog content | Conflicting quantities; owner confirmation required for style/colour/fabric/design conditions. No number selected. |
| Timing and cost? | Existing service/process statements and form success message | Validate fixed timelines, costing assumptions and exceptions. Do not add a delivery guarantee. |
| Quality checks? | Existing services/QC descriptions | Obtain actual inspection checklist, responsible party and scope; certifications are separate evidence. |
| Packaging/shipping responsibility? | Services packaging option/export coordination | Responsibilities, destination charges and terms not established. Add nothing factual until confirmed. |
| How to request quote? | Existing `/quote`, `/custom-order`, contact links | Already present; no new CTA section needed. Verify safely before release. |

## Small reviewable text drafts

These are candidate insertions into existing relevant component copy, not permission to replace main paragraphs or add sections. Only the first is supported entirely by the owner's brief; it should not be repeated on every page. No new addition is necessary where current content already answers the question.

1. **Operating role clarification**, `/about`, beside the existing company-role explanation after owner review: “OSD Apparels is a Pakistan-based custom apparel manufacturing and sourcing business. Customers specify the garments, materials, designs and other requirements for their project.” Evidence: explicit owner brief. Placement remains proposed because main-paragraph edits require approval.
2. **MOQ answer**, existing MOQ explanation on `/services`: “The minimum order for [confirmed garment and fabric] is [confirmed quantity] per [confirmed unit], subject to [confirmed colour/design conditions].” **Owner confirmation required** for every bracket; this is a review template, not publishable copy. If no policy is confirmed, retain proposal without choosing 30 or 50.
3. **Sample approval answer**, existing sampling step on `/how-it-works`: “Before [confirmed production stage], [confirmed approver] approves [confirmed sample/specification record]. [Confirmed revision and sample-charge conditions].” **Owner confirmation required**; no invented process completion.
4. **Shipping answer**, existing delivery step: “The quotation specifies [confirmed packaging responsibilities], [confirmed shipping arrangement] and [confirmed responsibility for duties and destination charges].” **Owner confirmation required**; this is not an assertion about current quotations.

The source also contains “Why this layout is better” and presentation-facing prose in `src/app/how-it-works/page.js`. That is verified developer-facing content, but replacing the entire card is outside this minimal batch; retain the previously recorded proposal, not a speculative whole-paragraph rewrite. QuoteForm's one-hour/24-hour/48-hour success promises need owner confirmation alongside the other timing claims.

## Original evidence to obtain

One approved specification sheet for an actually supplied garment, permission-cleared production photos with accurate captions, the documented sampling/approval checklist, and one consented case study. Case-study review template: buyer problem; approved anonymization; garment/material specification; OSD's actual role; documented decisions and approvals; evidenced outcome; permission/date. Leave all fields blank until substantiated; do not manufacture a customer or outcome. Store originals/customer details privately, publish only approved redacted material.

## International assessment and conditional localization workflow

`src/components/layout/GoogleTranslate.jsx` uses Google translation scripts, language storage and a `googtrans` cookie on the same page URL; French and Italian are selectable. Root HTML remains English. No dedicated translated routes or reciprocal hreflang set were found. Keep this selector; do not describe browser translation as an independently maintained localized site. Runtime switching remains untested.

The supplied country export does not yet justify a French or Italian page launch. First obtain qualified enquiries, language needs, country/page search evidence, native reviewer availability and maintenance capacity. No new country pages, translated routes or full translated-page drafts are proposed for approval now. The following bounded language samples are complete drafts of the verified identity statement only, useful for native review; they are not translations of whole pages:

| Draft | French | Italian |
| --- | --- | --- |
| Identity statement | OSD Apparels est une entreprise basée au Pakistan, spécialisée dans la fabrication et le sourcing de vêtements sur mesure. Les clients précisent les vêtements, les matières, les modèles et les autres exigences de leur projet. | OSD Apparels è un'azienda con sede in Pakistan che si occupa di produzione e sourcing di abbigliamento personalizzato. I clienti specificano i capi, i materiali, i modelli e gli altri requisiti del progetto. |
| Provisional title | Fabrication et sourcing de vêtements au Pakistan \| OSD Apparels | Produzione e sourcing di abbigliamento in Pakistan \| OSD Apparels |
| Provisional description | Présentez à OSD Apparels vos besoins en vêtements, matières et modèles pour un projet de fabrication et de sourcing au Pakistan. | Presenta a OSD Apparels le tue esigenze relative a capi, materiali e modelli per un progetto di produzione e sourcing in Pakistan. |

Native commercial-language review required; preserve the English brand promise exactly. Do not claim manufacturing in France or Italy. These metadata samples are not replacements for the working English metadata.

If a later evidence-backed localization project is approved: translate the complete existing page, navigation, form labels/errors, metadata and appropriate policies with native review; maintain a source-string inventory and revision owner. Use stable crawlable language URLs in a separately approved routing design, each self-canonical, HTTP 200 and internally linked. Add reciprocal `en`, `fr`, `it` annotations including self only for real equivalent pages, optionally an appropriate default; never `EU`. Keep identical visual components and test desktop/mobile, forms, selector, language tags and missing-translation handling. Require full reviewable page translations before implementation; no machine-only partial language pages or automatic country redirects. [Google localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
