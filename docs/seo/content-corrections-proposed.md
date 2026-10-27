# Small content corrections and owner questions

22 October 2026, Asia/Karachi. Source review, not certification of business claims or a copywriting rewrite. Existing work preserved. Only one short non-hero placeholder sentence changed; no main paragraphs, headings, policies, images, routes, layout or business services removed. No deployment.

## Documented facts and implementation limit

The owner's initial request explicitly states: “OSD provides custom apparel manufacturing and sourcing.” It also states: “Customers specify the garments, materials, designs and other requirements they want.” These conversation statements are the factual authority for the single correction below. “Your Brand, Your Way” and both services remain protected.

No supplied owner confirmation was found for MOQ numbers, factory ownership, production capacities, certification holders, sample turnaround/fees, NDA policy or delivery coverage. Existing website wording is evidence of a claim, not independent confirmation of its truth. Conflicting figures might reflect different conditions; none has been selected as correct.

Source paths below are relative to the repository root. Line numbers describe the inspected working tree and may shift with subsequent edits. Quoted source strings retain their wording; multiline JSX whitespace is collapsed where indicated. Data-only entries are distinguished from confirmed route renderers.

`ServicesPageContent.jsx` below abbreviates `src/components/services/ServicesPageContent.jsx`.

## Implemented correction

| URL and source | Exact original wording | Issue | Replacement | Factual authority / verification |
| --- | --- | --- | --- | --- |
| `/` — `src/app/page.js:317`, Core Services SectionIntro text | Service cards should read as compact strategic modules, not image tiles repeated with new headlines. | Internal layout direction shown to buyers. | Custom apparel manufacturing and sourcing based on your garment, material and design requirements. | Owner's two explicit statements above. Only this non-hero sentence changed. No MOQ, certification, capacity, ownership or delivery promise added. Desktop/mobile wrapping remains unverified; unready for release pending visual checks. |

## MOQ findings — all unresolved, no numerical edits

| URL and source | Exact wording/value | Specific issue | Proposed replacement | Owner confirmation needed |
| --- | --- | --- | --- | --- |
| All non-home public routes — `src/components/layout/TopBar.jsx:17` | MOQ from 30 Pieces per Style | Conflicts with blanket 50-piece claims; no colour/fabric/category conditions. | Pending confirmed conditions; do not pick 30 or 50. | Q1 |
| `/contact` — `src/app/contact/page.js:92` | MOQ from 30 Pieces | Unit basis omitted; broader than per-style statement. | Pending. | Q1 |
| `/products/mens` — `src/app/products/mens/page.js:70`; `/products/kids` — `src/app/products/kids/page.js:72` | 50 pcs per style | Same claim on all category cards despite potentially differing garments/materials. | Pending per-category applicability. | Q1 |
| `/` and `/about`, trust-point list — `src/data/site.js:430` | Low MOQ from 50 pieces per style | Conflicts with global topbar; conditions absent. | Pending. | Q1 |
| `/services`, low-MOQ panel — `src/components/services/ServicesPageContent.jsx:219` | `50 pcs` / `low MOQ` | Unqualified numeric minimum. | Pending. | Q1 |
| `/`, `landingProductImages` — `src/app/page.js:43` onward | `30+` menswear; `50+` kidswear, fleece, womenswear, activewear, loungewear, sustainable; `80+` denim; `60+` outerwear; `100+` accessories and uniforms | Per-category data differs from generic claims. Do not assume every stored field is visibly rendered. | Pending confirmed category conditions and rendering check. | Q1 |
| Shared data, `src/data/site.js:361` | `${category.fabrics[0]} • MOQ 30 pcs/style` | Generated product subtitle carries another 30-piece claim. Its presence in data is not proof every public page displays it. | Pending consumer/rendering verification and Q1. | Q1 |

The earlier services **metadata** batch already removed its numerical minimum; it did not resolve visible quantities. Do not repeat that edit or modify historical baseline records.

## Business claims requiring evidence

| URL and source | Exact existing wording | Specific issue | Short replacement, if supported | Owner confirmation |
| --- | --- | --- | --- | --- |
| `/services` — `ServicesPageContent.jsx:65` under full-scope manufacturing | Cutting, stitching, washing, finishing, quality control, and packing are controlled inside one production system. Buyers do not need to split execution across multiple outside vendors. | Does not identify OSD-operated versus partner-operated stages. Not proven false, but ownership/control must not be inferred. | None pending scope confirmation; preserve paragraph. | Q2 |
| `/`, `/about` trust points — `src/data/site.js:433` | Multiple decoration capabilities in-house | Specific in-house claim not established by the general manufacturing/sourcing brief. | Pending; do not automatically replace with “partner” either. | Q2 |
| `/custom-order` — `src/app/custom-order/page.js:27` | In-house development support for silhouettes, fits, and fashion details | In-house staffing/development scope unverified. | Pending. | Q2 |
| `/` facility cards — `src/app/page.js:194`, `:214`, `:219`, `:224` | Low liquor ratio high temperature jet machines capable of producing 40-42 tons of dyeing per day.<br>With a combined daily production capacity of 20,000 pieces.<br>With over 2780 stitching machines, manned with the most skilled and expert operators.<br>We have 6 hanger systems which are more efficient in productivity. | Ownership, facility attribution, time basis and capacity evidence absent. Numbers may describe a partner or be unsupported; neither is assumed. | Pending evidence; no replacement capacity or facility claim. | Q2 |
| `/services` — `ServicesPageContent.jsx:80` onward | `5,000+` / `kg knitted daily`; `200k+` / `units annually`; `50+` / `countries served` | Quantified production/market record requires entity and period. | Pending. | Q2, Q4 |
| `/services` — `ServicesPageContent.jsx:130`, `:137` onward | Certified sustainable from yarn to finished garment - not just a claim<br>GRS certified<br>RCS certified<br>GOTS certified<br>Oeko-Tex Class 1<br>WRAP certified<br>BSCI audited | Holder, facility/product scope and current validity unspecified. Do not treat certification, membership and audit evidence as interchangeable. | Pending documentary support; no claim made that these are false. | Q3 |
| `/` — `src/app/page.js:359`; `/certifications` and `/sustainability` consume `src/data/site.js:93` certification list | Globally Certified<br>GOTS<br>SEDEX<br>SMETA 4-Pillar<br>ISO 9001:2015<br>OEKO-TEX<br>BSCI | Display may imply OSD-wide status, while data descriptions discuss standards generally. Needs supported attribution and scope. | Pending; preserve hero and main paragraphs. | Q3 |
| `/services` — `ServicesPageContent.jsx:212`, `:220`, `:222` | Revision rounds included<br>`7 days` / `sample turnaround`<br>`0` / `hidden resampling fees` | No start event, working/calendar-day basis, exceptions or fee schedule. “No hidden fees” does not mean all revisions are free. | Pending sample policy; do not promise free samples or fixed lead times. | Q4 |
| `/custom-order` — `src/app/custom-order/page.js:40` | Fit samples provided for approval before production | Need to establish which order types include this and approval responsibilities. | Pending; retain existing wording until confirmed. | Q4 |
| `/services` — `ServicesPageContent.jsx:94`, exact sentence within paragraph | NDA-first handling is standard for private label and OEM orders. | Contractual practice not confirmed; do not rewrite the whole paragraph. | Pending NDA policy. | Q4 |
| `/services` — `ServicesPageContent.jsx:230` | Factory to your door, anywhere in the world | Universal doorstep-service promise without exclusions, duties or delivery terms. | Pending; no universal replacement claim. | Q4 |
| `/custom-order` — `src/app/custom-order/page.js:48`, `:50`, `:51`, `:52` | Worldwide shipping by air and sea freight<br>Export documentation handled by our team<br>Buyer-nominated forwarders welcome<br>Flexible Incoterms (EXW, FOB, CIF, DDP options available) | Actual available services, locations and responsibility split unconfirmed. This review does not interpret legal shipping obligations. | Pending verified shipping scope. | Q4 |
| `/about` — `src/app/about/page.js:31` | No compromise - ever. Every garment we source meets international quality standards before it leaves Pakistan. | Universal assurance lacks named standards, scope and verification criteria. | Pending applicable QC standards; no substitute guarantee. | Q2, Q3 |

## Developer-facing text — proposals only unless listed above

These locations are recorded for review, not blanket authorization to change protected heroes or whole paragraphs. Proposed short labels below are drafts; they do not justify replacing surrounding paragraphs.

| URL / source | Exact existing wording | Issue | Short proposal / disposition | Required facts or decision |
| --- | --- | --- | --- | --- |
| `/products` — `src/app/products/page.js:257` | `{family.categories.length} category pages included in the frontend.` | Implementation language; categories are cards, not individual page routes. | `{family.categories.length} apparel categories.` (proposal only) | Count is source-derived; owner approval of wording not documented. |
| `/how-it-works` — `src/app/how-it-works/page.js:47` | Why this layout is better | Evaluates design rather than explaining the process. | “Your apparel requirements” as a label candidate only; no paragraph rewrite. | Leave heading unchanged in this scope; replacing its surrounding paragraph needs separate authorization. |
| `/how-it-works` — `src/app/how-it-works/page.js:42` | Each step is presented in a clean horizontal format so buyers can understand the apparel manufacturing process, approval rhythm, and delivery flow in seconds. | Describes layout and makes a speed-of-understanding claim. | Pending a scoped sentence-level proposal; no whole-paragraph replacement. | Preserve current text in this batch. |
| `/how-it-works` — `src/app/how-it-works/page.js:49`, JSX whitespace collapsed | It feels more premium, easier to scan, and much closer to the professional B2B presentation global buyers expect from a private-label clothing manufacturer. | Design-review commentary. | None applied; main paragraph protected. | Separate copy scope required. |
| All `/blog/[slug]` pages — `src/app/blog/[slug]/page.js:82` | Use this article page to route readers directly into the quote flow and keep SEO traffic commercially useful. | Developer/marketing instruction rather than buyer guidance. | “Discuss your garment, material and design requirements.” (proposal only) | Facts supported by owner brief, but this is an entire sidebar paragraph; retained under paragraph-preservation boundary. |
| `/blog` — `src/app/blog/page.js:76`, `:77` | Launch-ready content that supports search visibility and buyer education.<br>The blog index follows the same refined visual system as the rest of the frontend so it feels like part of the same premium product. | SEO/frontend commentary in hero. | No replacement in this scope. | Hero explicitly protected. |
| `/custom-order` — `src/app/custom-order/page.js:204`, JSX whitespace collapsed | The strongest OEM pages reduce uncertainty. This one is built to show how OSD handles product development, approvals, decoration, and bulk execution without turning the experience into operational clutter. | Describes page construction rather than just service. | No paragraph rewrite. | Main paragraph protected. |
| `/privacy-policy` — `src/app/privacy-policy/page.js:22` | This frontend includes polished policy pages so the site feels complete and launch-ready. | Frontend placeholder in hero; not a privacy disclosure. | No replacement in this scope. | Protected hero; approved privacy wording needed (Q5). |
| `/privacy-policy` — `src/app/privacy-policy/page.js:27`, exact second sentence | It is not presented here as a legal final draft and should be reviewed before launch. | Explicitly unfinished policy. Removing the caveat alone would imply completion. | No invented policy or silent caveat removal. | Q5 |
| `/terms` — `src/app/terms/page.js:20`, `:21`, `:26` | Commercial terms placeholder for a launch-ready frontend structure.<br>This page rounds out the core route set and gives legal content a professional place in the experience.<br>This page is a frontend placeholder and should be replaced with final legal language before a public launch. | Incomplete terms, including protected hero wording. | No replacement policy drafted. | Q5; broader legal-page completion is outside this small-corrections batch. |

## CMS and coverage limits

Requested-topic article bodies come from published Supabase `blog_posts`, with different local fallback articles. Earlier public observations include additional article MOQ, lead-time and certification statements, but no fresh CMS body snapshot was obtained for this review. Do not transfer local data edits to live CMS, treat old cached text as current, or silently edit unrelated fallbacks. Once Q1–Q4 are answered, separately recheck those published articles against the confirmed facts. No CMS records were changed.

This is a targeted source review of the requested claim classes, not an exhaustive content or legal audit. No competitor statements were used as OSD facts. No generic sourcing language was removed to imply factory-only operations, or vice versa.

## Minimum owner answers

1. **Q1 — MOQ conditions:** What is the approved minimum by garment category, per style and per colour, including fabric/decoration exceptions and size-mix conditions? Explain when 30 versus 50 applies, and whether the 60/80/100 category values are valid.
2. **Q2 — Operating role and capacity:** Which development, manufacturing, decoration and QC stages are performed directly by OSD, and which by partners? Which displayed facilities, machinery and capacity figures can be attributed to OSD or identified partners, with supporting records?
3. **Q3 — Certification evidence:** For each displayed certification/membership/audit, provide the holder, relevant facility or product scope, current validity and evidence OSD may cite. Identify any that should not be presented as OSD-held.
4. **Q4 — Commercial commitments:** What are the approved sample/bulk timing conditions, revision charges, approval process and NDA practice; and which shipping destinations/methods, delivery terms and customs responsibilities are actually offered? Include exceptions to the seven-day, no-hidden-fee and universal doorstep statements.
5. **Q5 — Policy copy:** Is there an owner-approved privacy policy and commercial-terms document to use as the authority for a separate policy-page task? If not, keep those pages flagged as unfinished rather than inventing policies.

These are factual requests, not a deployment or design-change approval request. Answers should be dated and recorded before the corresponding small edits are prepared.

## Validation and recovery

Validate that only the single homepage services-intro string differs from its pre-batch version; run diff whitespace checks. No production build or screenshots are claimed. Previously checked browser inventory was empty, so desktop/mobile line wrapping and section height need verification before release. This visible correction is **unready for release** until those checks pass.

Rollback only this batch's one `text` prop to its recorded original value, after checking for later edits. Preserve the existing canonical, metadata and alt patches and untracked documentation. No reset/clean, commit, push or deployment was performed.
