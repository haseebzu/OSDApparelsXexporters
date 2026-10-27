# SEO implementation status

> **24 October 2026 correction:** The current local generated sitemap has 40 URLs (16 static and 24 active blog URLs), after six redirect-only blog posts were filtered. Earlier references to 46 describe the dated pre-retirement snapshot of 16 static plus 30 CMS posts. See [release-1-readiness-review.md](release-1-readiness-review.md) for the current reconciliation and release gates.

## Keyword coverage implementation batch — 22 October 2026

Two locally rendered category pages now have concise, evidence-supported buyer guidance: [menswear](../../src/app/products/mens/page.js) and [kidswear](../../src/app/products/kids/page.js). Kidswear metadata now states custom manufacturing rather than wholesale. See [keyword-coverage-batch-review.md](keyword-coverage-batch-review.md), [keyword-verification-questionnaire.md](keyword-verification-questionnaire.md) and [keyword-batch-validation.json](keyword-batch-validation.json).

Only `kidswear manufacturer Pakistan` moved to implemented status in the phrase-level audit. The remaining partial product groups are adequately covered through the category hubs or await verified product evidence; no speculative product page, CMS update, localization, sourcing service or country-page copy was introduced. Visual browser checks remain unavailable and the batch is not deployed.

## Keyword coverage audit — 22 October 2026

[keyword-coverage-audit.md](keyword-coverage-audit.md) is the phrase-level audit of the supplied research against the current local website. It contains 172 unique candidates with source/CMS/fallback/draft distinctions, intended URLs, coverage, status and next action. The audit found strong broad manufacturing, private-label, menswear and kidswear coverage; it does not assert rankings or implementation of research candidates merely because the intent map named them.

No website change was made. Sourcing-service phrases are deliberately excluded under the current manufacturer-only direction. Remaining expansion requires verified business evidence, coordinated CMS review and proper localization rather than keyword repetition.

## Manufacturing direction update — 22 October 2026 — NOT READY FOR RELEASE

The latest owner request supersedes earlier manufacturing-and-sourcing positioning. [manufacturing-review.md](manufacturing-review.md) is the current batch report. Sixteen local application/public text files now reflect manufacturing, with the four exact owner-supplied homepage figures and “Your Brand, Your Way”. Earlier canonical and alt work is preserved; no deployment or CMS write.

Build, scoped lint, 46-page sitemap/SEO validation and twelve non-blog page copy checks passed. Full repository lint now completed and failed with 559 findings, including generated admin files and unchanged admin components; earlier “incomplete” notes are superseded. No screenshots or safe functional/email tests available. Source presentation attributes are unchanged, which is not visual verification.

Public CMS sourcing claims remain: 20 exact proposed edits and 77 retained editorial fields recorded in [manufacturing-cms-proposals.md](manufacturing-cms-proposals.md). Existing sourcing/source slugs remain; do not claim all sourcing removed. [manufacturing-next-batch.md](manufacturing-next-batch.md) supersedes prior commercial sourcing and localization drafts. Complete visual/safe interaction checks and CMS review next. Batch-only recovery patch is manufacturing-batch.patch; do not roll back to the original baseline or apply the older combined patch over this work.

## Programme continuation — 22 October 2026

[programme-audit.md](programme-audit.md) is the current programme entry point, with links to the keyword map, content/localization proposals, authority plan, measurement plan and prioritized backlog. Earlier dated entries below remain historical and are superseded where this update or the release review supplies newer evidence.

Fresh live crawl: 46 sitemap destinations return 200; each has one canonical, no detected noindex, and distinct title/description values. All 46 canonicals and sitemap URLs still use apex while sampled apex URLs redirect 308 to www. Robots also references apex. `/printing` remains 307 to `/services`; `/blog/ddd` and a missing-blog probe return 404. Five sitemap paths lack an incoming link in the crawled HTML; proposed contextual-link review only. See [programme-live-audit.json](programme-live-audit.json).

The six-file local application candidate is unchanged, with prior production-build, focused-lint and rendered-route evidence intact. No hosted preview or deployment. **No technical change needed** in this continuation: the verified host defect is already fixed locally. The combined candidate remains **NOT READY** pending matching visual/functional checks, full lint completion and reviewable commit packaging. New work is documentation/research only; no CMS writes, tracker, translated route, outreach, training-permission change or performance optimization.

Next smallest useful batch: finish the existing release gates in a browser-enabled safe test environment, then owner-review the factual questions and exact CMS linking proposals. The wider SEO programme remains ongoing; see [prioritized-backlog.md](prioritized-backlog.md).

## Release review — 22 October 2026 — NOT READY

[release-review.md](release-review.md) records the earlier release decision. Production build, focused lint and local HTTP SEO checks then passed, superseding earlier execution-blocked notes. That pre-retirement validation covered 46 sitemap pages with intended www metadata; the current sitemap is 40 URLs as documented above. Historical `/blog/ddd` is a local 404 outside the sitemap. The rollback patch passed reverse-application dry run. Nothing staged, committed, pushed or deployed.

Remaining release blockers: matching desktop/mobile screenshots and navigation/enquiry/translation interactions unavailable, full repository lint incomplete, and separate batches still uncommitted. Search Console checks remain pending. Next action is completing those review gates, not adding SEO scope. See [release-validation.json](release-validation.json) for local evidence and the release report for exact rollback instructions.

## Performance measurement — 22 October 2026

Mobile diagnostics were attempted for all six requested representative pages, but PageSpeed retrieval failed and no browser/local Lighthouse runner was available. No lab or real-user Core Web Vitals values obtained. No evidence-backed bottleneck identified; **no performance code changes** made. [performance-review.md](performance-review.md) records all page statuses, limitations and matching comparison conditions. Next useful step is obtaining baseline diagnostics, not speculative optimization. Prior application edits and their release gates remain unchanged; no deployment.

## Content fact review — 22 October 2026

[content-corrections-proposed.md](content-corrections-proposed.md) records unresolved claims, developer-facing placeholders and five grouped factual questions. One non-hero homepage services-intro sentence was corrected using the owner's documented manufacturing/sourcing and customer-requirements statements. No uncertain numerical, certification, facility, sampling, shipping or policy claims changed. Exact one-string source comparison and diff checks passed; desktop/mobile visual verification is pending and this visible change remains unready for release. No deployment; previous batches preserved.

## Internal linking and alt update — 22 October 2026

One image-alt correction prepared on `/products/kids` after viewing the actual image; no image or layout changes. Four exact CMS-backed article link proposals recorded in [internal-link-proposals.md](internal-link-proposals.md). No CMS/fallback edits or article renderer changes: current bodies are plain text and inline styling/focus requires a deliberate verified implementation. Hoodie body/anchor remains pending. Source checks passed for the alt-only diff and destination file existence. Browser inventory was empty; desktop/mobile visual checks remain unavailable. This batch is **unready for release**, and nothing was deployed. See the change log for exact old/new alt text and recovery instructions.

## Metadata batch update — 22 October 2026

Reviewed eight target pages and changed only `/services` title/description to reflect both manufacturing and sourcing, removing the unresolved numerical MOQ claim. Exact before/after values, reasons and seven intentionally unchanged pages are in [change-log.md](change-log.md). All visible content, headings, keyword arrays and paths remain unchanged. The separate canonical edits were preserved without modification.

Shared metadata-generator checks passed for all eight pages: distinct titles/descriptions, one OSD occurrence per title, matching social fields and unchanged homepage title. Exact file comparison proved only two metadata strings changed; diff whitespace check passed. These are source checks, not fresh rendered output. Localhost had no reachable server and the earlier build approval failure is unresolved; rendered metadata and production-build verification remain pending. Nothing was deployed. Next action is runtime validation, not more metadata rewriting.

## Latest update — separate batches on 22 October 2026

The inspection below records the earlier state and is retained as dated evidence. It is superseded where noted here:

- Canonical batch: live apex-to-www redirects and apex canonical/Open Graph/sitemap/robots mismatch were freshly confirmed. Two uncommitted source edits now exist on `seo/canonical-host-consistency`: `src/lib/metadata.js` shared origin and `src/app/robots.js` shared URL references. No deployment. Build and full output validation are incomplete; `public/llms.txt` and public-origin environment review remain outstanding. This batch must not be described as completed.
- Separate indexability/schema batch: [review report](indexability-schema-review.md) added. No new application changes justified by the available evidence. Source membership/date/schema checks found no confirmed defect requiring alteration, but live headers, complete route status checks and structured-data validation remain incomplete.
- Local focused checks hit filesystem EPERM; the production build was not executed because automatic approval review reached its usage limit. Do not equate these unavailable checks with passing results. Authenticated Search Console checks remain pending.
- Next smallest useful action: resolve the approval/build execution limitation, finish canonical validation independently, then complete current live indexability/schema checks. Preserve all existing work and make no speculative schema/content corrections.

## Earlier inspection record

Inspection date: 22 October 2026 (Asia/Karachi). Scope: inspection and documentation only.

## Current conclusion

No source implementation has occurred since the recorded baseline in this checkout. `HEAD` is exactly `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`, on `main` tracking `origin/main`. The baseline already includes substantial SEO work. Canonical-host alignment remains unimplemented in source; the live redirect and canonical discrepancy recorded on 20 October could not be freshly verified in this session.

Recommend a canonical-only Batch A after successfully reconfirming live host behaviour. Do not repeat the existing metadata, schema, image-alt or sitemap improvements wholesale.

## Scope and evidence handling

- Read both supplied Downloads references: `OSD_Apparels_SEO_Improvement_Plan.docx` (text and tables extracted from OOXML) and `OSD_Competitor_SEO_Keyword_Research.md`. The Word file was not visually reviewed or modified.
- Read [baseline.md](baseline.md), [url-inventory.csv](url-inventory.csv), [restore-instructions.md](restore-instructions.md), and [change-log.md](change-log.md), plus the earlier [SEO review](../SEO-REVIEW.md) and [validation record](../seo-validation.json).
- No applicable `AGENTS.md` was found in the workspace ancestors, repository root, or documentation subtree. No tracked `AGENTS.md` was listed.
- Instructions embedded in reference documents are recommendations, not authorization to implement. In particular, the plan's master prompt to begin Batch A and the research's new-page/translation proposals do not override this request for inspection only.
- Preserve design, layout, colours, typography, spacing, images, animations, responsiveness, navigation, main content, hero wording, product categories, existing paths, enquiries, the language selector, and both manufacturing and sourcing. “Your Brand, Your Way” remains a preservation requirement; the literal phrase was not located by the source text search, so its rendered presence is not certified here. Do not insert or rewrite it during this inspection.
- No new product/country/translated routes or content sections, hidden keywords, unsupported schema, or invented business claims. No deployment, production-triggering push, DNS or hosting changes.

## Repository preservation

At entry, the only non-ignored working-tree entries were five untracked files under `docs/seo/`: `.gitignore`, `baseline.md`, `change-log.md`, `restore-instructions.md`, and `url-inventory.csv`. Both staged and unstaged tracked diffs were empty; `git diff 8bb41b463d9702225e3afe37fa6bad2a9bcf8840 HEAD --stat` was empty.

This inspection adds only this status file. It leaves the existing documentation and historical evidence unchanged. No branch switch or worktree was needed for this additive documentation-only task; no code was changed or staged, and no commit, reset, clean, push or deployment was performed. A later implementation batch should use an isolated branch/worktree and preserve these untracked documents explicitly.

`docs/seo/.gitignore` excludes `private/`; `git check-ignore docs/seo/private/probe.csv` confirmed the rule and `git ls-files docs/seo/private` returned no tracked private files. Private exports were not copied into the report or staged. Environment secrets and customer data were not opened.

## Completed work supported by evidence

These are **already present at the baseline**, not new fixes since it. Historical test results below are dated evidence, not tests rerun today.

| Area | Evidence present now | Status and qualification |
| --- | --- | --- |
| Shared and page metadata | `src/lib/metadata.js`, `src/app/layout.js`, page metadata and `src/lib/blog-seo.js` | Existing canonical, Open Graph, Twitter and robots generation; editorial page/article titles and descriptions. Homepage title already targets custom clothing manufacturing in Pakistan; `/custom-order` already targets private-label manufacturing and `/products/mens` targets menswear. No observed reason to replace these merely to adopt a keyword list. Host consistency remains pending. |
| Organization and WebSite markup | Schema builders in `src/lib/metadata.js`, emitted in root layout | Implemented. Earlier review records aligned visible phone and location, without invented street address. Current business facts and rich-result eligibility are not independently certified. |
| Breadcrumbs and article markup | Route imports/calls and `src/app/blog/[slug]/page.js` | Breadcrumb and BlogPosting output, normalized publication/modification dates and JSON-LD escaping already implemented. September validation reports breadcrumbs on 46 non-home pages and BlogPosting on 31 articles. |
| Unsupported FAQ removal | Services and how-it-works route source; September review | Those routes no longer emit FAQ schema. An unused `buildFaqSchema` helper remains; its existence does not mean FAQ markup is rendered. Do not repeat the removal. |
| Sitemap coverage and dates | `src/app/sitemap.js` | Uses published blog records, actual available article dates, 16 static content routes and shared absolute-URL generation. Excludes `/printing` and nonexistent product-card routes. Does not assign fabricated current dates to static routes. Live CMS membership needs a fresh crawl. |
| Existing redirect | `src/app/printing/page.js` | Still redirects to `/services` and uses that destination for metadata. September validation recorded HTTP 307 and unknown-blog HTTP 404; live statuses not rerun successfully. |
| Image and script handling | `src/lib/image-alt.js`, `next.config.mjs`, `src/components/layout/GoogleTranslate.jsx` | Alt-text helpers, AVIF/WebP configuration, API noindex headers and `afterInteractive`/`lazyOnload` translation scripts already exist. September review records image-format checks and rendered alt coverage. The selector is retained; no new performance result is claimed. |
| Preparation and recovery | Existing October baseline, inventory, change log and restore reference | Documentation exists locally and remains untracked. Source recovery reference is known; matching deployed release and full service recovery evidence are still unavailable. |

The September review reports a successful production build, scoped lint, 47 route checks and an AST comparison preserving visual JSX except alt attributes and JSON-LD. These checks preceded the October baseline. They do not establish today's live health or completed implementation of the new plan.

## Remaining work

1. **Canonical origin consistency.** `src/lib/metadata.js` still sets `siteUrl` to `https://osdapparels.com`; `src/app/robots.js` hardcodes the apex host and sitemap reference. Layout, sitemap, breadcrumbs, article URLs and product-category schema consume the shared origin. `toAbsoluteUrl` preserves already absolute inputs, so future work must inspect individual public URL overrides rather than assume one edit catches all occurrences. The baseline records apex-to-www HTTP 308 redirects with apex canonical/sitemap signals; fresh confirmation is required before selecting the host for a patch.
2. **Current indexability and schema review.** Recheck rendered output and current CMS-backed routes. `src/lib/product-schema.js` currently represents category cards as Product objects and identifies OSD as manufacturer. Their existence is confirmed, but appropriateness and factual support need review against the actual offerings; do not mark all schema as validated or add offers, prices, ratings or certificates. Investigate `/blog/ddd` publication/indexability without deleting or changing its path by assumption.
3. **Selective metadata and contextual links.** Review actual current rendered fields and article bodies first. Preserve already appropriate titles. Later batches may consider two or three observed metadata defects or useful links from existing hoodie, kidswear, sourcing or tech-pack articles to the existing commercial pages. Current CMS article-link coverage was not inspected, so these are assessment candidates, not proven missing links. Do not add keyword lists; existing meta-keyword fields are not a reason to expand them.
4. **Owner-confirmed facts and limited copy proposals.** The source still has “MOQ from 30 Pieces per Style” in `src/components/layout/TopBar.jsx`, versus 50 pieces in `src/data/site.js` and services metadata. Confirm per-style, per-colour and fabric conditions before any correction. The developer placeholder at `src/app/page.js:317` also remains. Prepare exact short replacements only in a later authorized content batch. Manufacturing ownership, partner sourcing, certifications, capacity and delivery claims require evidence, not inference from competitor offers.
5. **Visual and enquiry baseline.** Capture representative desktop/mobile pages and verify selector, navigation and enquiry paths before rendering-affecting work. Do not submit production enquiries as part of a read-only inspection.
6. **International measurement.** Keep existing English pages and language selector for UK, US, Canada, Australia and Europe, particularly France and Italy. Obtain current country/page/query data and qualified-enquiry measures. Research keywords have no verified demand or ranking metrics here. Translated routes, country pages, new product pages and new sections remain out of scope; outreach is not authorized.

### Inventory discrepancy to retain explicitly

The CSV has **47 content records**: 46 marked in the live sitemap and one `/blog/ddd` record marked absent. It does **not** contain a `/printing` row, although section 3 of the Word plan describes the 47 as including that redirect. Source lists 16 static content routes. Do not silently rewrite the historical inventory or equate its content count with all redirects. A fresh validation set should cover all 47 recorded content URLs, `/printing` separately, current sitemap additions/removals, and an unknown blog slug. Article metadata/status entries largely date from September local validation; October sitemap membership is separate evidence.

## Fresh checks and unavailable checks

| Check | Result on 22 October 2026 |
| --- | --- |
| Baseline-to-HEAD and tracked working-tree comparison | Identical source; no staged or unstaged tracked changes at entry. |
| Public homepage text retrieval | Web tool retrieved the [www homepage](https://www.osdapparels.com/), including existing manufacturing/sourcing copy, language control label and developer placeholder. This was a text retrieval, not a screenshot or response-header audit. |
| Direct HTTP headers, canonical and sitemap retrieval | Shell requests to apex/www failed to connect on port 443. Web tool could not retrieve apex, robots.txt or sitemap.xml. Live redirect chain, canonical tags, sitemap count and robots output remain unverified today. The failed sitemap parse's zero matches are a retrieval failure, **not evidence of an empty live sitemap**. |
| Authenticated Search Console and hosting | Not available to this inspection: current indexing, Google-selected canonicals, sitemap processing, Core Web Vitals, deployment ID and deployed source match. No new performance export was supplied. |
| Browser rendering and interactions | Not performed in this inspection. No screenshots, animation/responsive comparison, language switching or enquiry submissions. The baseline's former browser limitation was not retested and is not asserted to remain true. |
| Build, lint and local rendered-route crawl | Not rerun for this documentation-only addition. September results are historical only. No dependencies installed or build artifacts generated. |
| Business verification and CMS state | No owner confirmation of MOQ, certifications, manufacturing ownership or delivery claims; no fresh authenticated CMS or customer-data inspection. |

## Next smallest useful batch

**Batch A: reconfirm and align public SEO origin only, prepared locally with no deployment.**

1. From a working HTTP inspection environment, capture apex and www status/redirect chains, canonical and Open Graph URLs, robots.txt and sitemap.xml. Confirm the intended www destination rather than relying on October 20 evidence alone. If it differs, investigate before editing.
2. On an isolated implementation branch/worktree, align `src/lib/metadata.js` and `src/app/robots.js` to the confirmed origin. Inspect downstream sitemap/layout/article/breadcrumb/product-schema output and any absolute public overrides. Preserve all paths, `/printing` behaviour, relative links, email addresses, historical documents, third-party URLs and private applications. Do not change hosting or environment settings in this batch.
3. Produce before/after URL examples and generated sitemap comparison; run the build and focused checks across the complete inventory plus redirects and any current CMS changes. Check intended canonicals, indexability and absence of preview hosts. Review the diff to confirm no title, visible-copy, design, navigation, language or enquiry implementation changes.
4. Record the batch-specific commit/recovery reference and results in the change log only when that batch is actually implemented. Leave unavailable Google-selected canonical and deployment checks pending. Deployment needs a separate authorized task.

If fresh HTTP evidence remains unavailable, the next useful action is completing that evidence, not combining uncertain canonical edits with keywords or content changes.

## Latest owner-answer batch — 22 October 2026

This section supersedes the older unresolved-MOQ note above where the owner has now supplied a fact. The work remains local and uncommitted.

### Completed work supported by owner evidence

- `/products`, `/services` and `/custom-order` now state the confirmed custom knitted-and-woven manufacturing scope, bulk-business audience and buyer-supplied requirements without asserting specialist capabilities.
- Generic conflicting minimum claims now use the approved 30-piece starting wording and ask buyers to confirm design, colour and size breakdowns.
- `/services` and `/custom-order` now accurately cover the confirmed decoration options, product-charged sampling, buyer sample approval, labels/tags/packaging, NDAs, quality checks and OSD- or buyer-arranged shipping. DDP is limited to quotations where available.
- The keyword audit contains 172 phrases: 37 implemented, 47 partially covered, 47 requiring verification, 28 proposed and 13 deliberately excluded sourcing phrases. The count changes are limited to phrases directly supported by active local content.

### Remaining work

- Confirm product-specific MOQ conditions, homepage category MOQ values and menswear/kidswear 50-piece labels before changing them.
- Obtain certificate/audit holder, scope, validity and approval evidence before retaining or revising certification, sustainability, traceability and material claims.
- Confirm performance/safety/regulatory details for activewear, compression garments, school uniforms and workwear before making related claims more specific.
- Confirm inspection stages, AQL, independent-inspection availability, in-house/external responsibility and shipping terms beyond the approved wording.
- Keep CMS article updates and French/Italian localization separate; no CMS update or translation was made.

### Unavailable checks

- The 22 October production build passed. Local rendered-page validation could not run because the attempted local Next.js server had no reachable listener.
- Browser inventory remains unavailable for matching desktop/mobile screenshots, navigation, language-selector and form-interaction validation. No production enquiry was submitted.
- Authenticated Search Console, deployment match and real-user Core Web Vitals remain pending.

### Next smallest useful batch

Capture desktop and mobile screenshots of `/products`, `/services` and `/custom-order` from a working local preview, verify their metadata and existing enquiry/navigation paths without submitting a production form, then address only the unsupported claims whose owner evidence can be supplied.

## Rendered verification and AI/international review — 22 October 2026

Local rendered verification is available through `http://localhost:3000` over IPv6 loopback. The homepage, products, menswear, kidswear, services and custom-order routes returned 200 with expected metadata, one www canonical, `index, follow`, parseable existing schema and a quote link. The earlier snapshot had 46 URLs (16 static and 30 CMS-backed articles); the current output is 40 after retired-post filtering. API routes are noindex. This validates local output only; it does not validate the current deployment.

The only source correction in this review is the floating contact control’s accessible label, updated because it navigates to `/contact`, not a WhatsApp conversation. No visual design or navigation target changed. Full evidence, AI crawler guidance, localization conditions, product-page briefs, authority and measurement next steps are in [technical-ai-international-review.md](technical-ai-international-review.md).

The local form uses configured Supabase, SMTP and R2 services, so no submission was made. Browser apps remain unavailable; desktop/mobile and interactive verification still needs a browser-based release check. The next smallest useful batch remains the visual/interaction pass followed by exact business-evidence corrections.

## 2026-10-23 — in-house manufacturing positioning batch

### Completed locally

- Created branch checkpoint `seo/in-house-manufacturing-product-drafts` without resetting the pre-existing dirty worktree.
- Replaced active local wording that portrayed OSD as coordinating vendors or export sourcing. The full classification is in [in-house-manufacturing-scan.md](in-house-manufacturing-scan.md).
- Updated selected blog SEO metadata overrides so local metadata does not market OSD as a sourcing agent. Preserved historical blog slugs.
- Stopped emitting `meta[name="keywords"]` from shared metadata.
- Added `/products/hoodies` and `/products/t-shirts` as local owner-review drafts. Both are explicitly noindex and have no sitemap, navigation or incoming internal link.
- Confirmed existing sitemap routes exclude both drafts and still derive URLs from the shared www origin. Existing `/printing` redirect code was not changed.

### Remaining work

- Review all published CMS blog records using [cms-in-house-manufacturing-replacements.md](cms-in-house-manufacturing-replacements.md), then make only approved CMS changes through the CMS workflow.
- Obtain the product facts listed in [in-house-product-draft-questions.md](in-house-product-draft-questions.md) before indexing or linking either product draft.
- Select and approve the intended Open Graph locale convention; current `en_PK` remains unchanged.
- Decide a visually tested semantic approach for the decorative homepage heading; no H1 change was made.

### Unavailable checks

- The local CMS API and preview server were unavailable during this batch, so current rendered CMS body text could not be rechecked.
- No browser surface was available for desktop/mobile screenshot comparison, navigation interaction, translation, or form validation. No form was submitted.
- Authenticated Search Console, crawl/index coverage and real-user Core Web Vitals remain unavailable.

### Next smallest useful batch

1. Obtain owner-approved hoodie and T-shirt specification sheets and complete one product draft for review.
2. In a separate CMS-only review, apply the exact approved replacements to the highest-risk intermediary claims and verify the rendered article output.
3. Run the production build and route/metadata checks once the local preview and CMS connection are available.

### Validation update — 23 October 2026

- `npm.cmd run build` completed successfully outside the filesystem sandbox after the sandboxed Node process failed to resolve `C:\Users\abdul`.
- Focused ESLint completed with no findings for the eight changed/added source files in this batch.
- Production-server checks returned `200` for both drafts with one www canonical each and `noindex, nofollow`; sitemap and robots use the www origin and omit both drafts; `/printing` still returns `307` to `/services`; the rendered homepage has no meta-keywords element and has the www canonical.
- No visual screenshots were available, so desktop/mobile appearance remains unverified. The CMS API remained unavailable.

## 2026-10-23 — international foundation phase 1

### Completed locally

- Added and verified six direct 301 redirects for confirmed sourcing-service blog articles. Retired URLs no longer appear in the locally generated blog index or sitemap.
- Added a noindex, unlinked export-market draft at `/export-markets`; it reuses current components and is excluded from the sitemap.
- Replaced the homepage’s non-descriptive `EXCELLENCE` H1 with `CUSTOM APPAREL MANUFACTURING` through the existing hero component.
- Prepared the complete source/status register and 30-article editorial programme without fabricating bodies, claims or publication details.

### Remaining work

- Obtain a current CMS export to review remaining bodies, current dates and word counts; apply CMS rewrites only after approval.
- Create a safe unpublished CMS draft importer before importing the 30 editorial drafts. The current importer marks every record published.
- Complete full, individually reviewed drafts with verified facts, authors, dates and official regulatory citations before publication.
- Confirm export-market commercial facts and approve/review the draft before removing noindex or adding navigation/sitemap links.

### Unavailable checks

- Current CMS API was unavailable. Search Console query/page metrics, live inbound-link data and current CMS publication dates are unavailable.
- Browser screenshots and mobile Lighthouse results are unavailable. No forms were submitted.

### Next smallest useful batch

Supply a current CMS export with slug, title, excerpt, category, published/updated dates and body for every published post. That enables exact R-article rewrites, final confirmation of the six S classifications, duplicate resolution and a safe publishing queue.

## 2026-10-24 — v3 draft gating

### Completed locally

- Registered the three unfinished routes behind `SHOW_DRAFT_PAGES=true`; default production behavior is the existing normal 404.
- Expanded `/products/hoodies` and `/products/t-shirts` into quote-driven owner-review drafts, with no asserted numeric MOQ, pricing, sampling fee or lead time.
- Verified hidden and visible draft states through separate local production builds.

### Owner markers blocking publication

- Hoodie construction/fabric/decorative/finishing and packaging options marked `[OWNER: remove if not offered]`.
- T-shirt fabric/decorative/finishing and packaging options marked `[OWNER: remove if not offered]`.
- Export market commercial process fields remain `[OWNER TO CONFIRM]`.

### Next smallest useful batch

Write the first five unpublished product/process article drafts to a local non-imported directory, then obtain an approved CMS export before making CMS classification or rewrite decisions.

### Unpublished article batch one

Five local Markdown drafts are available in `docs/seo/unpublished-article-drafts/`. They must remain outside the importer because it currently force-publishes. Owner review must supply author identity, a real last-reviewed date, an approved image and image alt text, plus any needed OSD-specific capability statements. Expand their current 522–721 word drafts before any publishing decision.
