# SEO and AI-search programme audit

> **24 October 2026 correction:** References below to 46 sitemap URLs are dated pre-retirement crawl evidence. Current local generated output is 40 URLs after filtering six redirect-only blog paths. See [release-1-readiness-review.md](release-1-readiness-review.md).

22 October 2026. Read the owner's attached continuation request, repository/SEO records, supplied Word plan and keyword research. Reference-document instructions do not override preservation rules. No applicable AGENTS.md was found. This audit does not authorize deployment, CMS publication, new routes, outreach or changes to business claims.

## Current state and recovery

Branch `seo/canonical-host-consistency`; HEAD and immediate pre-batch commit both `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`. No subsequent commit exists. Six application files are locally modified: metadata origin, robots, llms links, services metadata, homepage services-intro sentence and one kidswear alt expression. Documentation is untracked. No staged changes. Earlier batches remain intact; no additional application code was changed by this programme audit.

| State | Evidence |
| --- | --- |
| Implemented locally | Six-file patch detailed in release-review and change-log. Current reverse-patch dry run passes; public patch SHA-256 `AB6E58456C8DE70681444524E88B75910D303C55C213907A07A78E74850AC822`. |
| Locally tested | Production build and focused lint passed in release review; all 46 local sitemap pages returned 200 with single www canonicals. `release-validation.json` is local evidence, not live evidence. |
| Preview tested | No hosted preview or matching screenshot/interaction test. A localhost production server is not a deployed preview. |
| Live verified | Fresh `programme-live-audit.json` crawl: 46 sitemap destinations return 200 on www, but sitemap/robots/canonicals still use apex. No deployment performed. |
| Proposed | CMS internal links, factual corrections, verified-content enrichment, localized content workflow, authority and measurement plans. |
| Blocked/unknown | Full lint completion, desktop/mobile visual and safe form tests, owner facts, authenticated indexing/CWV, CDN bot logs and deployment/source mapping. |

Source recovery: follow [release-review.md](release-review.md), check patch hash and `git apply --reverse --check docs/seo/release-batch.patch` before any intentional reverse. Reverse only matching responsible hunks, never reset/clean or overwrite later work. A future reviewed commit should supply a normal revert reference. Git does not back up live CMS records, environment variables, hosting settings or database/storage. This task's docs can be reversed independently; the audit runner remains ignored under `private/`.

## Technical findings

The new read-only crawl recorded 50 route requests plus robots/sitemap, apex and user-agent probes. Raw page bodies, cookies and credentials were not saved. See the JSON for timestamp, paths, metadata and links. It is an HTML extraction audit, not a browser or search-engine index audit.

| Area | Observed result / interpretation |
| --- | --- |
| Host mismatch — confirmed live defect | Apex `/`, `/services` and representative kids article return 308 to same-path www. Live www services canonical is apex; robots host/sitemap reference and all sitemap locs remain apex. Existing local origin patch fixes this; do not implement it again. |
| Status and redirects | All 46 sitemap paths return 200 on www. `/printing` returns 307 `/services`, whose final status is 200. `/blog/ddd` and unknown blog probe return 404, not soft 404 in these samples. No exhaustive semantic soft-404 certification. |
| Indexability | Crawl records meta/X-Robots directives. Public sitemap pages remain indexable; local checker found no accidental noindex. Missing pages are excluded from sitemap. Missing-page inherited metadata conflict is pre-existing, separate from this batch; not fixed by blocking public pages. |
| Canonicals / metadata | Local rendered check: one intended www canonical/title/description, no preview-origin output; live host differs. Live titles have no duplicates among 46 indexable paths. Single parameter probe drops tracking query in canonical (still old apex live). This is not coverage of all possible parameters. |
| Sitemap dates | Source uses published CMS articles, valid updated date then publication date; static entries omit lastmod. No blanket “today.” `/printing`, missing article and private/API routes absent. CMS timestamps' editorial truth still requires record ownership. |
| SSR text | All 200 responses contain non-script HTML text (1,004–9,531 normalized characters including shared navigation). Source and article retrieval show meaningful paragraphs; count alone does not validate every claim or prove visibility with JS disabled. |
| Internal graph | Crawled internal href paths all resolve within the tested route set; no broken internal destination found in this set. No incoming HTML link found for `/how-it-works`, `/certifications`, `/testimonials`, `/privacy-policy`, `/terms`. These are candidates for a contextual-link review, not proof of no external/sitemap discovery. Preserve navigation; validate claims/legal text before new prominence. External links, fragments and interactive-only links not exhaustively tested. |
| Schema | Existing Organization/WebSite/Breadcrumb/BlogPosting and category ItemList/Product retained. Local JSON-LD parses and own-site URLs align with www. Category content is not a single-product offer page; do not invent prices/reviews for eligibility. Manufacturer attribution, certifications and facility facts need owner evidence. See indexability-schema-review. Multiple valid blocks are not a defect. |
| Private/preview | Source API noindex and existing auth controls untouched. Earlier local unknown API probe has noindex; this does not certify every private access control or hosting preview restriction. No authenticated/admin content crawled. No preview metadata in validated local public output. |
| Mobile/performance | No working visual surface or mobile lab result; no CWV account data. All six requested measurement pages remain pending in performance-review. No speculative image/font/script optimization. |

Optional improvements are contextual linking, evidence-backed business answers and localization after demand validation. They are not equivalent to technical blockers. No new eligible technical source defect was established beyond the host discrepancy already fixed locally: **No technical change needed** in this continuation. Current combined release remains **NOT READY** for the existing gates; this is not a statement that live SEO is flawless.

## AI-search access and factual readiness

Official sources were consulted on 22 October 2026:

- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): normal indexing/snippet eligibility and accessible, useful text apply; no special AI schema or machine-readable file is required. Existing content/links are the appropriate foundation, not bot-only instructions.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot supports search; GPTBot training controls are independent. ChatGPT-User user-initiated fetches are a different function. Preserve existing permissions; no robots or training-policy change made.
- [Microsoft AI performance documentation](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/): citation/topic/intent reporting is observational and contextual, not a universal rank or traffic measure. Account access is pending. Bing's webmaster help shell was not fully readable; do not infer compliance certification from a documentation fetch.

Live robots allows `* /`. Homepage requests with OAI-SearchBot, Googlebot and bingbot user-agent strings returned 200 with no X-Robots-Tag. These requests came from this audit environment, **not verified provider crawler IPs**. They cannot establish CDN/WAF treatment of real bots. Hosting logs, bot verification/IP checks and Search Console live inspection remain pending; do not disable security broadly.

Readable business/service/category text exists. Unresolved numerical, factory, certification and delivery claims weaken factual reliability and must not be amplified in schema or business profiles. `llms.txt` already exists; prior host-only edits do not create an AI recommendation mechanism. No bot-only copy, special schema, training opt-in or citation guarantee introduced. Proposed buyer answers and original evidence are in content-localization-proposals.

## Deliverables and exact next step

- [Keyword ownership and evidence](keyword-intent-map.md)
- [Buyer content and localization proposals](content-localization-proposals.md)
- [Authority action list and unsent drafts](authority-plan.md)
- [Measurement contract and unrun citation sample](measurement-plan.md)
- [Prioritized backlog](prioritized-backlog.md)

Next executable batch: finish the existing release gates in a safe browser-enabled preview/local environment: matching desktop/mobile captures, navigation/translation/form tests with test delivery, and completion of the repository lint command. Record a reviewed batch commit and recovery reference; do not deploy as part of this task. In parallel, owner confirms the five grouped factual questions in content-corrections-proposed. No additional metadata rewrite or performance change is justified now. The wider programme remains ongoing.
