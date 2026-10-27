# SEO change log

## 2026-10-24 — Release 1 reconciliation and local regression review

- Corrected the current sitemap count: local production output contains **40** URLs, not 46 — 16 static routes and 24 active blog routes. The 46-URL figure was a dated pre-retirement snapshot of 16 static plus 30 CMS posts; six retired posts are now direct 301s and are filtered from the blog index/sitemap.
- Recounted all 172 keyword-audit rows: 37 implemented, 47 partially covered, 47 requiring verified business information, 28 proposed and 13 deliberately excluded sourcing-service terms. Older counts remain dated history only.
- Added [release-1-readiness-review.md](release-1-readiness-review.md): URL inventory, redirect-by-redirect review, in-house claim boundary, separate authentication findings, build/regression results and three-part release readiness.
- Local production build and focused ESLint passed. Local production checks confirmed the 40-URL sitemap, matching robots reference, `www` canonicals, draft 404, six direct 301s and unauthenticated admin redirects. Valid/expired session and logout flows remain dedicated non-production test work; visual and safe form QA remain pre-deployment blockers. No deployment, CMS/database write, push or hosting change.

## 2026-10-24 — consolidated SEO handover

- Added [seo-work-to-date.md](seo-work-to-date.md), a single detailed handover of local SEO work to date: canonical/metadata/indexability work, schema, manufacturing positioning, keyword coverage, CMS boundaries, redirects, drafts, validation, limitations, rollback and next actions. It links to the underlying evidence rather than reclassifying unverified facts as completed.
- Documentation-only update. No website source, CMS record, deployment, push, hosting setting or public URL changed.

## 2026-10-22 — rendered verification and AI/international readiness review

- Diagnosed the local preview: Next listens on IPv6 loopback at `[::1]:3000`; `http://localhost:3000` reaches it while the prior `127.0.0.1` probe did not. This is a local verification detail, not a deployment or hosting change.
- Rendered HTTP checks passed for `/`, `/products`, `/products/mens`, `/products/kids`, `/services` and `/custom-order`: 200, expected current title/description, one `https://www.osdapparels.com` canonical, `index, follow`, expected JSON-LD types and quote links. The 16 static sitemap routes also returned 200 with valid root/page canonicals. `/printing` remains 307 to `/services`; an unknown blog slug is 404; API responses have `X-Robots-Tag: noindex, nofollow`.
- Local sitemap check: 46 unique www URLs, 16 static + 30 current CMS-backed articles, 30 source-derived blog dates, no API or printing URL. The 50 build-generated routes include framework/API/redirect routes and are not a public URL count. No sitemap, robots, schema or canonical change was needed.
- Simulated local requests using OAI-SearchBot, Googlebot and bingbot user-agent strings returned 200. The allow-all robots rule permits them. This does not establish real crawler-IP, production CDN/WAF or hosting-log access. No GPTBot/training permission or bot rule changed.
- Corrected one accessible label in `src/components/layout/WhatsAppFloat.jsx`: `Contact via WhatsApp` → `Contact OSD Apparels`, because the control opens `/contact`, not a WhatsApp destination. Icon, target, styling and behavior are unchanged.
- Added [technical-ai-international-review.md](technical-ai-international-review.md) with rendered evidence, safe-form boundary, official Google/OpenAI/Bing sources, international intent limits, FR/IT rollout conditions, conditional product-page briefs, measurement/authority actions and recovery. Browser surfaces remain unavailable, so desktop/mobile screenshots, interaction, translation-widget and form-client validation are manual release checks; no production enquiry was sent.
- Focused ESLint for `WhatsAppFloat.jsx` completed with no diagnostics; `git diff --check` passed. A fresh Next build regenerated `.next/BUILD_ID`; its tool output stopped after compilation rather than emitting the final route summary, so the earlier successful full build remains the conclusive build record and this invocation is recorded as incomplete output rather than an additional pass.
- Recovery: reverse only the `aria-label` prop and this review documentation after inspecting later changes, or use `git revert <commit>` once committed. No deployment or production rollback is required.

## 2026-10-22 — owner-confirmed manufacturing scope, MOQ, decoration, sampling and shipping batch

- Local-only implementation on `/products`, `/services`, `/custom-order`, shared MOQ surfaces and `public/llms.txt`. No production CMS record, deployment, push, route, component structure, CSS, image, animation, language selector or enquiry logic changed.
- Replaced generic conflicting 50-piece minimum wording with the approved interim wording: “Minimum order starts at 30 pieces. Confirm the quantity breakdown for your design, colours and sizes when requesting a quote.” Existing product-specific 30/50-piece labels and homepage category MOQ values remain pending because their conditions were not confirmed.
- `/products` now describes the confirmed broader scope: custom knitted and woven apparel for brands, retailers and other businesses ordering in bulk. `/services` now describes the 30-piece starting minimum, buyer-supplied requirements, product-charged samples, buyer sample approval, modest quality checks, confirmed decoration options and quote-specific shipping arrangements. `/custom-order` now accepts tech packs, reference garments, drawings or photographs and accurately states custom sample, labels/packaging, shipping and DDP limitations.
- Metadata changed only where the new visible content supports it: `/products` description adds “custom”; `/services` description now reflects custom knitted/woven manufacturing, samples, decoration and shipping arrangements; `/custom-order` description reflects accepted inputs, sampling, labels/packaging and quoted shipping. No title change in this batch.
- Added [owner-answers-implementation.md](owner-answers-implementation.md): confirmed facts, unresolved limits, exact unsupported certification/sustainability/performance/AQL/in-house claims with locations and proposed evidence-led corrections. Added owner-answer status to [keyword-verification-questionnaire.md](keyword-verification-questionnaire.md).
- Keyword audit updated from 25 to 37 implemented and 59 to 47 requiring verification. Only the eight MOQ/sampling phrases and four broad decoration/finishing phrases moved because active local content now supports their intent. No sportswear, uniform, certification, country-market, localization or product-specific claim was promoted without page-level evidence. Sourcing remains deliberately excluded.
- Validation: `npm.cmd run build` passed on Next.js 16.2.9, generating all 50 routes. `git diff --check` passed. A local server attempt produced no reachable listener, so rendered HTML/metadata/link checks and desktop/mobile screenshots were unavailable for this batch. No enquiry submission was attempted.
- Recovery: no batch commit exists. Before committing, capture the immediate pre-batch reference. Afterwards, use `git revert <batch-commit>` to reverse only this batch. Until then, manually reverse only the files listed above after inspecting later edits; never use `git reset` or `git clean` because the worktree contains prior uncommitted work.

## 2026-10-22 — evidence-supported keyword coverage batch

- Selected only `/products/mens` and `/products/kids` after reviewing all 48 partial-coverage phrases. They are the current category owners with relevant historical Search Console page evidence: menswear 1 click / 102 impressions; kidswear 1 / 33. These values are page totals, not keyword ranks or a forecast. `/products` (1 / 109) remains category discovery; `/custom-order` (0 / 78) already covers private-label/OEM and did not show a supported defect.
- `/products/mens`: replaced the generic catalog prompt with concise custom-manufacturing enquiry guidance. `/products/kids`: replaced “Wholesale” metadata wording with “Kidswear Manufacturer Pakistan” and “custom kidswear manufacturing,” plus equivalent enquiry guidance. Both texts reuse the owner-confirmed model: buyers provide garment, material and design requirements and OSD manufactures to agreed specifications. No specific material, MOQ, safety, decoration, stock or delivery claim added.
- Updated the keyword audit: `kidswear manufacturer Pakistan` is now implemented because the active local page title and description cover that intended intent. All other product-specific phrase statuses remain conservative. Sourcing-service terms stay deliberately excluded. Hoodie/T-shirt pages remain proposals, not active routes.
- Added `keyword-coverage-batch-review.md` (48-phrase grouping, page-selection rationale, exact before/after table, CMS boundary and next batch) and `keyword-verification-questionnaire.md` (deduplicated questions for all 59 verification-dependent phrases). French/Italian/German candidates remain in the localization backlog; no translated fragments were inserted.
- Validation: production build completed successfully; scoped lint run initiated for both changed page files with no diagnostics returned; rendered local checks passed for both pages (200, expected title/description, www canonical, expected visible text and existing quote links). `keyword-batch-validation.json` records results. Browser inventory has no available apps/browsers, so matching desktop/mobile screenshots and interactive responsive verification remain unavailable. No CMS write, deployment or push.
- Recovery: reverse only the mens/kids text and metadata hunks after reviewing later changes; preserve prior manufacturing/canonical work. Documentation and ignored private validation runner can be reversed separately. No production rollback is needed because nothing was deployed.

## 2026-10-22 — keyword coverage audit (documentation only)

- Added `keyword-coverage-audit.md`: 172 unique phrase-level rows from the supplied competitor/keyword research, compared with current local source, CMS-backed blog path, static fallbacks and unpublished localization drafts. No new keyword research, website/CMS/metadata/routing changes or deployment.
- Classified current coverage as 24 implemented, 48 partially covered, 59 requiring verified business information, 28 proposed localized terms and 13 deliberately excluded sourcing-service phrases. Counts are candidate phrases, not search volumes, rankings or opportunities.
- Current manufacturer-only direction governs this audit. Historic live CMS sourcing language and older drafts are identified separately; it is not counted as desired coverage. Existing source/sourcing URL slugs remain untouched.
- Recorded homepage, custom-order, menswear and kidswear as the primary current owners; hoodies/T-shirts are conditional commercial-depth proposals. Country-market and French/Italian terms remain unsupported until genuine buyer evidence, complete localization and native review. Build/test outputs are unchanged because no application source changed.

## 2026-10-22 — owner-authorized manufacturer positioning and homepage figures

- Latest attached user request explicitly supersedes the instruction to preserve sourcing as a service. Updated 68 exact text spans across 16 files; inventory in manufacturing-copy-inventory.md. Changed homepage/hero, about, services, products/mens metadata, certifications/sustainability wording, shared/index/blog metadata, fallback articles, llms and customer acknowledgement text. Existing routes, visuals, animations, form/API logic, language widget, robots policies and prior canonical/alt work preserved.
- Owner-supplied homepage facts (not independent audits): “Low-liquor-ratio, high-temperature jet machines capable of dyeing 20–25 tons per day.”; “Over 278 stitching machines operated by skilled, experienced operators.”; “A combined daily production capacity of 2,000 pieces.”; “5 hanger systems to support production efficiency.” Renamed the prior Embroidery Facility card to Production Capacity to avoid assigning combined production solely to embroidery; image and structure unchanged. No ownership/certification/delivery guarantees added.
- Hero caption now explicitly includes “Your Brand, Your Way” and manufacture-to-agreed-specifications wording. The literal slogan was not found in pre-batch source. Working homepage title retained. No country stuffing or new product capability assertions.
- Read all 30 published public articles. manufacturing-cms-proposals.md contains 20 exact pending CMS edits plus 77 retained editorial sourcing fields; sourcing-led metadata/slugs remain coordinated review items. No fallback change claimed as a CMS update. No live CMS write, route migration, deletion, noindex, outreach or deployment.
- Validation: production build and scoped ESLint on all 15 changed JS/JSX files passed. Local checker passed 47 historical routes (46 current sitemap pages 200, removed article 404), canonicals/OG/schema origins, sitemap/robots, intended printing redirect and exclusions. Four figures/slogan rendered; twelve checked non-blog pages have no sourcing wording in non-script HTML. JSX tag/presentation attribute comparison passed; no screenshot claim.
- Existing full npm.cmd run lint completed with exit 1: 559 findings (516 errors, 43 warnings), including generated osd-admin/.next and unchanged admin components. Kept unrelated code/config untouched. Desktop/mobile wrapping and interaction comparisons, safe form/email tests, authenticated Search Console/CWV and hosting bot logs pending. Current release NOT READY.
- Current live read-only probes still show apex-to-www 308 and apex services canonical; local work not deployed. OAI-SearchBot/Googlebot/bingbot UA probes return 200 but do not establish real crawler-IP/CDN access. Official Google/OpenAI/Bing guidance consulted; no training preference/security change or AI guarantee.
- Checkpoint: ignored docs/seo/private/manufacturing-before-2026-10-22/ contains immediate pre-batch source, manifest and pre-existing diff. HEAD remains 8bb41b463d9702225e3afe37fa6bad2a9bcf8840; that commit alone does not represent the pre-batch dirty state. Public batch-only manufacturing-batch.patch SHA-256 a5d7ee0923d364ff19b240b7fa3e36772b28711159db381bfe297c9caf4d193f; reverse dry run passed. For intended rollback inspect later work, verify hash, run git apply --reverse --check docs/seo/manufacturing-batch.patch, then reverse only matching batch hunks. Never reset/clean. Preserve docs/private records; CMS/environment/hosting need separate recovery.
- Automatic approval initially misclassified the supplied figures as unsupported. Re-read the exact owner authorization in the attachment and retried successfully; no approval blockage remains for the implemented edits.

## 2026-10-22 — evidence-based programme continuation (documentation only)

- Added `programme-audit.md`, `programme-live-audit.json`, `keyword-intent-map.md`, `content-localization-proposals.md`, `authority-plan.md`, `measurement-plan.md` and `prioritized-backlog.md`; updated implementation status. These distinguish local implementation, localhost testing, absent preview, current live state, proposals and unavailable checks.
- Fresh public HTTP crawl: 46 sitemap pages 200, one canonical each, distinct titles/descriptions, no detected noindex; all still apex-canonical live. Sampled apex routes 308 to www; printing 307 to services; removed/missing blog samples 404. Tracking-parameter canonical drops query. Five paths without incoming links in crawled HTML recorded as review candidates. UA probes returned 200 but do not prove real provider-IP/CDN accessibility.
- Used aggregate private Search Console export evidence and candidate keyword research without claiming volumes/rankings or pairing separate query/page tables. Prepared buyer-content gaps and conditional drafts, native-review language samples/workflow, official-provider AI guidance, legitimate authority opportunities with unsent drafts, and a privacy-conscious measurement contract with an unrun citation sample.
- **No technical change needed** beyond the existing locally prepared host correction. No application source changes in this continuation; all six existing modified files preserved. No tracker, CMS write, new section/route, outreach, deployment or production enquiry. No performance score or screenshot verification invented.
- Checks: fresh live crawl completed without fetch errors; `git diff --check` passed; existing six-file recovery patch hash unchanged and reverse-application dry run passed; no staged files; private runner/exports remain ignored. Earlier production build/focused lint/local rendered checks still apply to unchanged source. Build not repeated for documentation-only work. Full lint, desktop/mobile visual and safe enquiry interactions, authenticated indexing/CWV and hosting logs remain pending.
- Recovery: reverse only this documentation addition if desired, preserving historical records and prior application work. For the existing source candidate use the exact patch hash and conditional reverse approach in `release-review.md`, never reset/clean. No Git backup of CMS/environment/hosting is implied. Current release decision remains NOT READY.

## 2026-10-22 — release review: NOT READY

- Compared the accumulated uncommitted candidate to immediate parent HEAD `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`; no later commits exist. Kept the separately requested batches identifiable and preserved all existing work.
- Completed the outstanding 17 host-only public links in `public/llms.txt`; paths and wording unchanged. No other application edits during review.
- Production build now passed, as did focused lint on all five changed JS files. Local HTTP validation covered 47 inventory routes: 46 indexable 200 pages with one www canonical each; `/blog/ddd` now 404 and absent from sitemap. Sitemap, robots, `/printing` 307, unknown-article 404 and API noindex checks passed. See [release-validation.json](release-validation.json).
- Repository-wide lint was interrupted after several minutes without final diagnostics; it is incomplete, not passing. Browser inventory remained empty; matching screenshots and enquiry/navigation/translation interactions unavailable. No submissions made.
- Added [release-review.md](release-review.md) and a six-file [rollback/review patch](release-batch.patch). Reverse-application dry run passed. Index empty; ignored private artifacts not staged. No commit, push or deployment.
- This review supersedes earlier build/local-route-unavailable notes for the current source, but does not clear visual, functional, full-lint or Search Console gates. Fresh live services check still showed old title/apex canonical. Local validation server stopped after checks.

## 2026-10-22 — mobile performance measurement unavailable; no optimization

- Attempted mobile PageSpeed reports for homepage, menswear, kidswear, services, custom order and `/blog/how-to-write-a-tech-pack-guide`. All six web-tool API retrievals failed; direct sandboxed API access also failed to connect. No scores or metric values obtained.
- Browser inventory was empty; checked workspace had no installed Lighthouse runner or Playwright/Puppeteer packages. Real-user Core Web Vitals and authenticated Search Console evidence remain unavailable.
- No measured bottleneck identified and no speculative image/font/script/priority/cache changes made. No dependencies upgraded or installed. All earlier application changes preserved.
- Added [performance-review.md](performance-review.md) with per-page status, lab/field distinction, unavailable interaction checks and matching before/after conditions. Updated implementation status. No production build needed for these documentation-only additions; no build success claimed.
- No navigation/form/translation/responsive checks could be completed; no performance improvement or regression claim. No deployment. Recovery for this batch is limited to its documentation additions; no application rollback needed.

## 2026-10-22 — factual-content review and one confirmed placeholder correction

- Created [content-corrections-proposed.md](content-corrections-proposed.md) with exact wording, URLs/source locations, issues, proposed short replacements and five grouped owner questions covering MOQ, operating role/capacity, certification evidence, commercial commitments and approved policy copy.
- Implemented only `src/app/page.js` Core Services intro: `Service cards should read as compact strategic modules, not image tiles repeated with new headlines.` → `Custom apparel manufacturing and sourcing based on your garment, material and design requirements.`
- Authority: the owner's initial request explicitly confirms custom apparel manufacturing AND sourcing and customer-specified garments, materials and designs. No additional business promises inferred.
- All 30/50 and category-specific MOQ values, certification/factory claims, sampling/shipping commitments and policy wording remain untouched pending confirmation. Protected hero wording, main paragraphs and headings unchanged. No CMS edits.
- Exact comparison against pre-batch homepage confirms only that one string changed. `git diff --check` passed. Earlier canonical, metadata and alt work preserved. Desktop/mobile wrapping remains unverified because the available browser inventory was empty; visible correction is unready for release. No build pass claimed and no deployment.
- Recovery: reverse only the recorded Core Services `text` prop after checking for later edits; preserve all prior batches and documentation. No production rollback needed.

## 2026-10-22 — internal-link and alt batch rechecked

- Repeated request reviewed against the existing worktree. The single inspected-image alt correction is already present; no duplicate or additional speculative alt edits made.
- Confirmed article bodies still render as plain text and the four exact proposals in [internal-link-proposals.md](internal-link-proposals.md) remain unapplied. CMS and fallback content remain untouched. No existing accessible inline article-link treatment was found to reuse without introducing styling changes.
- Retried public hoodie-article retrieval: still a cache-miss failure, not evidence that the route is missing. Its anchor remains pending current paragraph text.
- Rechecked browser inventory: no apps or browsers available. Desktop/mobile and keyboard-focus verification remain unavailable; the batch remains unready for release.
- All earlier source edits preserved. This continuation changes this log only; no deployment or CMS writes.

## 2026-10-22 — internal-link proposals and one image-alt correction

- Traced all five requested article routes to the CMS-backed loader, not the three local fallback bodies. No CMS writes or fallback edits. Four exact phrase/destination proposals are recorded in [internal-link-proposals.md](internal-link-proposals.md); hoodie text retrieval failed and its anchor remains pending. No article links implemented: current renderer treats bodies as plain text, and no suitable existing accessible inline article-link style was found.
- Application change for this batch: only the image alt expression in `src/app/products/kids/page.js`. For the Kids Swimwear card using `/images/Kids.png`, changed `Kids Swimwear from the OSD Apparels clothing collection` to `Four children wearing short-sleeved shirts with trousers or shorts`.
- Evidence: opened the actual local image with the image-viewing tool. It shows four children in casual shirts and trousers/shorts, not swimwear. Conditional matching uses the inspected image path; all nine other card alts retain their original output. Other uses of the image and decorative images remain untouched. Image file, source mapping, dimensions, fill, sizes, cropping/classes, category labels and layout are unchanged.
- Verification: generator/data assertions confirmed one affected card out of ten and existing destination files. Initial test expected `Swimwear` rather than the actual `Kids Swimwear`; corrected the test expectation and reran successfully. Source comparison confirmed no non-alt changes to this page. `git diff --check` passed. Destination text retrieval evidence and its limitations are in the proposal document.
- Visual release gate: browser inventory returned no available apps/browsers. No desktop/mobile or screen-reader rendering verification was possible. Alt patch remains prepared but unready for release until the affected page is checked at both baseline viewports; link proposals require rendering and focus verification before implementation can be released. Build remains unverified under the previously recorded approval limitation.
- Earlier canonical and metadata changes are preserved and excluded from this batch. No deployment, image modification, new styles, content rewrite or new routes.
- Rollback: reverse only this alt expression and this batch's documentation additions after reviewing the diff; preserve prior batches. No production rollback needed.

## 2026-10-22 — metadata-copy batch, one page

Only `src/app/services/page.js` was changed in this batch. The earlier uncommitted canonical edits remain separate and untouched. No visible copy, headings, keyword arrays, routes, schema, design or enquiry code changed. No deployment.

| URL | Original metadata | Revised metadata | Reason | Validation |
| --- | --- | --- | --- | --- |
| `/services` | Title: Low MOQ Clothing Manufacturer Services \| OSD Apparels<br>Description: Explore OSD Apparels clothing manufacturing services: low MOQ from 50 pieces per style, fabric sourcing, sampling, quality checks, and export coordination. | Title: Apparel Manufacturing & Sourcing Services \| OSD Apparels<br>Description: Explore OSD Apparels manufacturing and sourcing services, from fabric sourcing and sample development to garment production, quality checks and export coordination. | The page covers sourcing, development, manufacturing, quality control and export coordination, not only low-MOQ work. Remove the specific minimum while 30/50-piece source claims remain unresolved. Do not infer a new MOQ. | Actual shared metadata generator evaluated for all eight target pages: distinct titles/descriptions, one OSD occurrence per title, matching Open Graph/Twitter titles and descriptions. Exact source comparison confirms only these two strings changed. `git diff --check` passed. Fresh rendered HTML remains pending. |

### Pages intentionally unchanged

- `/`: retained exactly “Custom Clothing Manufacturer Pakistan | OSD Apparels” and its description. Matches the existing manufacturing content; baseline evidence supports protecting the leading landing page.
- `/custom-order`: existing private-label manufacturer title/description already match customization, sampling, sizing and decoration content. No reason to substitute a near-synonym merely to match a keyword phrase.
- `/products`: knitted/woven title and description already describe the broad catalog, including menswear and kidswear.
- `/products/mens`: broad menswear title and category-specific description retained; not narrowed to hoodies.
- `/products/kids`: kidswear manufacturing metadata matches the visible category offering; no unsupported ready-stock claim added.
- `/about`: existing identity, Faisalabad location, sourcing and private-label description match the page. No new factory ownership claim inferred.
- `/how-it-works`: existing process metadata matches enquiry, sampling, production, quality control and delivery content. No rewrite for character count or keyword variation alone.

### Evidence and verification limits

Reviewed the eight page metadata declarations and associated visible content, including `ServicesPageContent.jsx`, category data and shared layout/helper. The root layout is the only `layout.js` under `src/app`; it uses a plain title rather than an appending template. Generator checks passed without importing the framework or accessing private data. No fresh page/query evidence was supplied to justify additional rewrites; the keyword map is intent guidance, not measured demand.

No local server was reachable at `http://localhost:3000/services`, so the revised metadata has not been checked in freshly rendered Next.js HTML. Historical rendered validation is not a substitute. The earlier build approval failure remains unresolved; no build was retried by bypassing it. Before deployment, verify exactly one rendered title and description, unchanged homepage title, matching social metadata and no duplicated brand using a successful local production build. This patch is prepared, not fully runtime-verified.

Rollback: after reviewing the current diff, restore only the two metadata strings above in `src/app/services/page.js`. Leave canonical changes and all other work intact. No production rollback is needed.

## 2026-10-22 — canonical-host batch prepared partially, not verified or deployed

- Branch: `seo/canonical-host-consistency`; source base `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`. Existing untracked documentation preserved.
- Fresh read-only live checks confirmed apex HTTP 308 redirects to www for `/`, `/services`, `/products/mens`, two blog articles, `/printing`, sitemap and robots. Sampled www HTML retained apex canonicals and Open Graph URLs. Live sitemap had 46 apex URLs; robots retained apex host/sitemap references. The www homepage returned HTTP 200.
- Uncommitted source changes: shared origin in `src/lib/metadata.js` now uses www; `src/app/robots.js` consumes that shared origin/helper. No metadata copy, content, layout, paths, redirect implementation or robots rules changed.
- `public/llms.txt` remains unchanged because its attempted edit command failed to parse. Public-origin configuration review and complete generated-output verification remain unfinished.
- Build not executed: automatic approval review could not complete because its usage limit was reached. Not a finding that the action was unsafe. No bypass, commit, push or deployment.
- Recovery: reverse only this batch's shared-origin and robots-import/reference edits after inspecting the current diff; do not reset/clean the worktree. Source base above is the comparison reference, not an instruction to overwrite later work. No deployment rollback is needed.

## 2026-10-22 — separate indexability and structured-data inspection

- See [indexability-schema-review.md](indexability-schema-review.md) for source findings, official references and incomplete checks.
- No new application defect was independently established; no indexability or schema code was changed. Kept existing private/API exclusions, sitemap date logic and schema blocks. Did not invent product offers, reviews or business facts.
- Existing canonical edits are explicitly excluded from this batch. No metadata-copy work or deployment.
- Focused lint and generator-check command could not finish because Node encountered filesystem-resolution EPERM. Production build remains pending on approval-system recovery; full live status/header/schema checks and authenticated Search Console checks remain pending.
- Documentation-only recovery: revert this review's documentation additions independently; preserve the canonical patch and historical evidence. No application rollback is needed for this review.

## 2026-10-20 — pre-change baseline only

- Scope: Git state, repository routing/metadata/sitemap review, live public URL checks, supplied Search Console performance export, and documentation.
- Production changes: none.
- Code/content/design/URLs/metadata/redirects/dependencies/settings: unchanged.
- Deployment: none.
- Findings recorded: apex-to-www redirect versus apex sitemap/canonicals; missing authenticated Search Console and Vercel evidence; visual capture blocked by unavailable browser surface.
- Recovery reference: `main` at `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`.

## 2026-10-23 — in-house manufacturing positioning and local product drafts

- Owner-confirmed positioning now governs this batch: OSD Apparels is an in-house apparel manufacturer in Faisalabad, Pakistan. No sourcing-agent, supplier-matching, buying-house or intermediary claims were added.
- Replaced the remaining active local presentation strings that implied vendor coordination: Global Dispatch Support now says “Packaging, labeling, and shipping arrangements confirmed in the quotation for international orders”; the About story now says “shipping arrangements”; and the Why OSD statement now describes coordinated in-house expertise rather than managing multiple vendors. The local fallback blog phrase now refers to manufacturers, and the import script’s default category is `Apparel Manufacturing`.
- Updated 14 CMS-blog metadata overrides in `src/lib/blog-seo.js` from sourcing/agent language to manufacturing-focused titles and descriptions. Historical slugs remain unchanged. CMS-visible article bodies were not edited; [cms-in-house-manufacturing-replacements.md](cms-in-house-manufacturing-replacements.md) contains reviewed exact replacements and six owner-decision articles.
- Removed emitted meta-keywords from the root layout and metadata helper. Existing caller keyword arrays were left intact because they no longer render as a meta-keywords element.
- Added local, noindex drafts at `/products/hoodies` and `/products/t-shirts`. They use existing components and inspected existing images, have no Product or FAQ schema, no sitemap entry, and no incoming navigation/internal link. Each visibly lists `[OWNER TO CONFIRM: …]` facts. See [in-house-product-draft-questions.md](in-house-product-draft-questions.md).
- Added [in-house-manufacturing-scan.md](in-house-manufacturing-scan.md). Remaining source matches are technical names or historical URL slugs. The dynamic CMS endpoint was unavailable, so rendered CMS-body verification and CMS updates remain pending.
- No deployment, CMS write, push, navigation change, URL rename, redirect change, image modification, design/CSS change or production enquiry occurred. `/printing → /services` is untouched.
- Rollback: revert only the files listed by this dated entry after reviewing later work; retain the existing dirty-worktree changes and do not reset/clean. The working branch checkpoint is `seo/in-house-manufacturing-product-drafts`.

### Validation update

- `npm.cmd run build`: passed.
- Focused ESLint for this batch’s changed and added source files: passed with no findings.
- Started the local production server only for read-only verification, then stopped it. `/products/hoodies` and `/products/t-shirts` returned `200` with www canonicals and `noindex, nofollow`; both are absent from `/sitemap.xml`. `/robots.txt` references the www sitemap. The homepage emitted no meta-keywords element. `/printing` still returned `307` to `/services`.
- No desktop/mobile screenshot comparison was possible because no browser surface was available. The CMS API was unavailable, so this does not certify visible CMS article bodies.

## 2026-10-23 — international foundation, phase 1

- Checkpoint branch: `seo/international-foundation-drafts`; recorded base `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`. Existing dirty work was preserved.
- Classified the CMS-backed blog estate from available historic route/body evidence in [international-blog-audit.md](international-blog-audit.md). Six articles are sourcing-service articles and now use direct local **301** redirects: agent → `/services`; sourcing timeline → `/how-it-works`; overseas sourcing mistakes → `/custom-order`; mens sourcing guide → `/products/mens`; trends → `/products`; country-comparison sourcing guide → `/services`.
- `src/lib/retired-blog-routes.js` is the single redirect/exclusion map. `getPublishedBlogPosts()` filters those slugs, so the blog index and sitemap omit them without a CMS write. The old URLs remain permanent redirects, not 404s.
- Added local noindex `/export-markets` as a draft, with existing components and official UK, US, EU, Australia and Canada guidance links. Commercial process fields are visibly marked owner-confirmation items. It is not linked or added to the sitemap.
- Changed the homepage hero H1 display from `EXCELLENCE` to `CUSTOM APPAREL MANUFACTURING`; it uses the existing heading/component and existing long-heading responsive class. No CSS or component structure changed.
- The 30 requested articles are documented as unpublished editorial briefs in [international-article-programme.md](international-article-programme.md). They are not imported because the existing import script force-publishes every record; no safe local draft-import format is currently implemented. No thin or unsupported mass content was added.
- Build passed. Focused local verification confirmed all six 301 redirects, sitemap exclusion, and noindex www canonical on `/export-markets`. Browser screenshots, full CMS-body reading, form interaction and CMS data writes remain unavailable/pending. No deployment, push or CMS update.

## 2026-10-24 — v3 draft gating and quote-driven product drafts

- Added [draft-pages.js](../../src/lib/draft-pages.js), registering `/products/hoodies`, `/products/t-shirts` and `/export-markets`. The routes call the shared gate and return the existing normal 404 unless `SHOW_DRAFT_PAGES=true`.
- Removed route-specific Breadcrumb JSON-LD from all three unfinished pages. Global Organization/WebSite JSON-LD from the layout remains site-wide; no Product, BreadcrumbList or FAQ schema is emitted for drafts.
- Reworked the hoodie and T-shirt drafts around a buyer-led quote process. Both now state: “Minimum order quantity depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.” No fixed MOQ, price, sampling fee, sampling time or lead time was added.
- Added the approved options as owner-review copy and marked sensitive options `[OWNER: remove if not offered]`. Both pages retain existing components, existing image files and their inspected alt text, and end with a prominent `/quote` link. No form fields, submission handling, navigation, sitemap or internal incoming links changed.
- Validation: production build with `SHOW_DRAFT_PAGES=false` returned 404 for all three routes. Fresh production build with `SHOW_DRAFT_PAGES=true` returned 200 and `noindex, nofollow` for all three routes; no route-specific Product/Breadcrumb/FAQ schema was present. `git diff --check` passed. Visual comparison remains unavailable.
- Publishing is blocked until owner markers are zero and route-specific approval is given in this conversation.

## 2026-10-24 — first five unpublished article drafts

- Added five non-imported Markdown drafts under `docs/seo/unpublished-article-drafts/`: apparel sample types; private-label labels/hang tags/packaging; size grading; garment defect review; and fabric shrinkage questions.
- These topics were selected instead of duplicating the existing live hoodie and fabric guides. Every draft contains front matter, answer-first copy, one H1, logical headings, three contextual links, buyer questions, and explicit author/review/image placeholders.
- Draft word counts are 721, 697, 591, 522 and 555. They are useful editorial first drafts but below the programme's typical 1,000–1,800-word range; expand each only with reviewed product/QC/fabric facts before publication. They are not ready to import, publish or link from the live site.
- No CMS record, sitemap, blog index, metadata override or visible site page was changed by this article batch. `git diff --check` passed.
