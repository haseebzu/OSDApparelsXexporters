# OSD Apparels SEO work to date

**Prepared:** 24 October 2026  
**Status:** Local implementation and documentation only. Nothing in this file means a change is deployed, pushed, written to the CMS, or approved for publication.

This is the consolidated handover for the SEO work completed in the local website project. It is a guide to what changed, what was verified, what remains pending, and where the supporting evidence is stored. The detailed chronological record remains in [change-log.md](change-log.md).

## Current operating position

The current approved position is that OSD Apparels is an **in-house custom apparel manufacturer in Faisalabad**. It manufactures against buyer-supplied garment, material, design and specification requirements. The brand line **“Your Brand, Your Way”** remains part of the site.

The local implementation is aimed at buyers in the UK, United States, Canada, Australia and Europe. It does not claim foreign offices, universal shipping terms, certifications, pricing, stock availability, production promises, or product capabilities without owner evidence.

Earlier work that described manufacturing and sourcing together is retained in the history so that it can be reviewed, but the later owner-authorized manufacturing-only direction controls current local work. Sourcing-service keywords are deliberately excluded from current keyword targets.

## Work completed in the local project

| Area | What was completed | Current result |
| --- | --- | --- |
| Canonical host | Set the intended local production origin to `https://www.osdapparels.com` in shared metadata, sitemap and robots output. | Locally rendered indexable pages use one absolute `www` canonical, and local sitemap/robots references match it. The live site had not been updated when last checked. |
| Metadata foundations | Reviewed title template, canonical, Open Graph and shared metadata handling. Corrected only supported metadata, including menswear and kidswear wording. | No preview origin was detected in local tested metadata; pages retain distinct page intent. |
| Sitemap and robots | Reviewed public route membership, redirects, API exclusions and dates. | The current local sitemap contains 40 unique `www` URLs: 16 static pages and 24 active blog entries. The historic 46-URL count was a pre-retirement record of 16 static plus 30 CMS posts; six of those posts are now redirect-only and excluded. Blog dates are source-derived; static pages do not receive invented dates. APIs, draft pages and `/printing` are excluded. |
| Indexability | Checked expected public 200 pages, redirects, missing pages and API headers. | Public pages tested as indexable retain `index, follow`; missing pages are 404; API responses use `X-Robots-Tag: noindex, nofollow`. No robots blocking or blanket noindex was used to solve canonicalization. |
| Redirect preservation | Preserved `/printing` to `/services`. Added direct redirects for six retired sourcing-positioned blog URLs. | `/printing` remains the intended 307 redirect. The six retired blog paths are direct 301s to relevant current routes and are removed from local blog listings and sitemap output. |
| Structured data | Reviewed existing Organization, WebSite, Breadcrumb, BlogPosting, category ItemList and Product markup. | Existing valid schema blocks were retained. Local tests parse JSON-LD and confirm own-site URLs use `www`. No fake offers, prices, ratings, reviews, certifications, FAQ markup, or product facts were added. |
| Manufacturing positioning | Reworked local wording across the homepage, company/service/product surfaces, metadata/fallbacks and supporting text to reflect an in-house manufacturer. | “Your Brand, Your Way” and owner-supplied facility figures are present locally. Existing routes, layout, components, image files, animations, language selector and enquiry flow were preserved. |
| Owner-confirmed commercial facts | Added approved general wording for MOQ, customer inputs, samples, decoration/finishing and quote-specific shipping. | The local copy says the minimum order starts at 30 pieces and asks buyers to confirm their breakdown in a quote. It does not promote an unverified universal MOQ, delivery time or shipping guarantee. |
| Keyword research audit | Audited all 172 supplied research phrases against active local content, CMS-backed content, local fallbacks and drafts. | The audit records actual coverage and does not equate a mapped keyword with an implementation or a ranking. |
| Keyword coverage improvements | Selected menswear and kidswear as the two evidence-supported pages for the first small coverage batch. | Menswear now uses clearer custom-manufacturing enquiry language. Kidswear metadata no longer calls the offer wholesale and instead refers to custom kidswear manufacturing. |
| Content fact review | Audited MOQ, quality, certification, sustainability, sampling, shipping and developer-facing text. | Only facts with owner support were changed. Unsupported factual claims are recorded as correction proposals rather than silently rewritten. |
| Accessibility/alt work | Inspected relevant images and corrected one specific kidswear card description. Corrected a misleading contact-control label. | The kidswear image is described as “Four children wearing short-sleeved shirts with trousers or shorts.” The contact control now accurately says “Contact OSD Apparels.” No image files, crop, dimensions or styling changed. |
| Internal-link review | Located relevant articles and separated CMS content from local fallbacks. | Exact recommended internal-link edits are documented, but no CMS records were modified locally. |
| Performance review | Attempted mobile diagnostics for homepage, product families, services, custom order and a blog article. | Diagnostics and field Core Web Vitals were unavailable, so no speculative image, font, script, caching or layout optimization was made. |
| AI/international review | Reviewed crawler access, machine-readable output, international intent, localization and authority opportunities. | `llms.txt` was aligned to the local `www` host. No promise was made about AI visibility, crawler access, rankings or international performance. |
| International blog foundation | Classified the historic 30-post blog estate under the manufacturing-only direction and created safe editorial planning material. | Six agent/sourcing-focused pages redirect locally; retained topics require CMS review before changed public wording. A 30-topic programme and five complete unpublished article drafts exist only in documentation. |
| Conditional product and market drafts | Created local hoodie, T-shirt and export-markets drafts for owner review. | They are hidden by default: `/products/hoodies`, `/products/t-shirts` and `/export-markets` return 404 unless `SHOW_DRAFT_PAGES=true`. When enabled locally they are `noindex, nofollow`, absent from navigation, sitemap, `llms.txt` and schema. |
| Authentication noise reduction | Adjusted server middleware so missing configuration/cookies do not produce avoidable Supabase refresh-token errors, and invalid session cookies are cleared when Supabase returns an authentication error. | This is an application-authentication change, documented separately in [release-1-readiness-review.md](release-1-readiness-review.md); it is not an SEO change. |

## Main SEO implementation details

### 1. Canonicals, metadata, sitemap and robots

The baseline showed an apex-to-`www` redirect pattern while canonical URLs and sitemap entries used the apex host. The local implementation makes `https://www.osdapparels.com` the consistent intended production origin.

- Shared metadata uses the `www` origin.
- Indexable pages tested locally emit one intended absolute canonical.
- Relevant Open Graph URLs and own-site schema identifiers use the same origin.
- The sitemap uses `www` URLs and robots references the matching sitemap.
- Relative internal links were retained where they were already appropriate.
- `/printing` remains a redirect to `/services`; it is not an indexable sitemap entry.
- Redirect-only, missing, API and draft paths are excluded from the sitemap.

This was verified locally. The prior live crawl still reflected old apex canonicals, which is expected until an authorized deployment occurs. See [technical-ai-international-review.md](technical-ai-international-review.md), [programme-audit.md](programme-audit.md), [indexability-schema-review.md](indexability-schema-review.md) and [release-review.md](release-review.md).

### 2. Public route and indexability checks

Local rendered checks covered the homepage, products, menswear, kidswear, services, custom order and the static sitemap route set. The recorded results include:

- A pre-retirement local production verification found 46 sitemap pages; the current regenerated sitemap contains 40 after the six redirect-only blog posts were filtered. See [release-1-readiness-review.md](release-1-readiness-review.md).
- Each checked indexable page had one intended canonical and no accidental `noindex`.
- `/printing` returned its intended redirect to `/services`.
- An unknown blog path returned 404.
- `/blog/ddd` is absent from the current local sitemap and returns 404 from current content loading; it needs a CMS audit rather than an invented replacement.
- Unknown API paths carried `X-Robots-Tag: noindex, nofollow`.
- Local requests with Googlebot, Bingbot and OAI-SearchBot user-agent strings received allowed responses. This is only a local user-agent test, not proof that real provider IPs can access production through its CDN/WAF.

The local development server was also checked on 24 October: `/products/mens` and `/products/kids` returned 200. The new hoodie draft correctly returns 404 unless its local preview flag is enabled.

### 3. Structured data

The project already contained multiple appropriate schema blocks. The work deliberately retained valid multiple blocks rather than removing them merely for co-existence.

- Organization and WebSite markup remain in the shared layout/metadata path.
- Breadcrumb markup remains where the route supplies it.
- BlogPosting remains associated with blog content.
- Existing category ItemList/Product markup remains limited to actual category content.
- No route-specific Product, Breadcrumb or FAQ schema was added to draft hoodie, T-shirt or export-markets pages.
- No price, availability, rating, review, certificate, factory ownership or offer details were invented.

Schema validation checks syntax/type output and local own-site URLs only. It does not certify commercial claims or guarantee rich results.

### 4. Manufacturing-only copy and factual limits

The manufacturing-positioning work made 68 exact local text-span updates across 16 files. It changed wording, not the presentation system. The homepage hero, major layout, colours, typography, spacing, image assets, animation, navigation, language selector, URL structure and enquiry mechanics were retained.

The owner-confirmed claim is company-level: OSD is an in-house apparel manufacturer in Faisalabad, rather than a sourcing agent. That confirmation supports the general manufacturing positioning and the four quoted capacity statements below. It does **not** establish that every development, decoration, washing, finishing, inspection, packaging or logistics step is completed in-house. Process-specific wording stays limited to the owner-confirmed list of available methods and states that suitability depends on the garment, fabric and requested result. The responsible party for each method remains an owner-evidence item.

Owner-supplied figures used on the local homepage are recorded as owner statements, not independent audits:

- Low-liquor-ratio, high-temperature jet machines capable of dyeing 20–25 tons per day.
- More than 278 stitching machines operated by skilled, experienced operators.
- Combined daily production capacity of 2,000 pieces.
- Five hanger systems supporting production efficiency.

The local changes also used approved wording for custom knitted and woven apparel; buyer-supplied tech packs, reference garments, drawings or photographs; charged samples requiring approval before bulk production; specified decoration/finishing methods; labels/tags/packaging; and shipping arrangements confirmed in a quote.

The work intentionally did **not** establish product-specific MOQs, certification ownership/scope, independent inspections, AQL process, universal performance-fabric claims, fixed turnaround times, all-country shipping responsibility, or stock/wholesale status. Those issues remain recorded in [owner-answers-implementation.md](owner-answers-implementation.md), [content-corrections-proposed.md](content-corrections-proposed.md) and [keyword-verification-questionnaire.md](keyword-verification-questionnaire.md).

### 5. Keyword coverage work

The supplied competitor/keyword research was audited as research candidates, not verified volumes or ranking evidence. The full audit is in [keyword-coverage-audit.md](keyword-coverage-audit.md).

Current 24 October status snapshot, recalculated from all 172 phrase-level rows:

| Classification | Count | Meaning |
| --- | ---: | --- |
| Implemented | 37 | An active page materially covered the phrase intent. |
| Partially covered | 48 | Related wording existed, but the exact business/product claim was not proven or sufficiently clear. |
| Requires verification | 47 | Coverage depends on a business fact that is not safely assumed. |
| Localization candidates | 28 | French, Italian, German or other non-English phrases requiring proper localization. |
| Deliberately excluded | 13 | Sourcing-service candidates excluded by the manufacturing-only direction. |

The earlier 22 October audit counts are retained as dated history in [change-log.md](change-log.md) and [keyword-coverage-audit.md](keyword-coverage-audit.md); they are not the current snapshot.

The first content batch selected `/products/mens` and `/products/kids` because they were the relevant current category owners and had available page-level Search Console evidence in the supplied historic export: menswear 1 click/102 impressions and kidswear 1 click/33 impressions. These figures are page totals, not keyword rankings or forecasts.

Implemented wording changes:

| URL | Before | Current local wording/effect |
| --- | --- | --- |
| `/products/mens` | Generic catalog request prompt and “Source menswear” description. | Describes menswear manufacturing and asks the buyer to share garment, material and design requirements with the quote request. |
| `/products/kids` | “Wholesale Kidswear Manufacturer Pakistan” metadata and generic request prompt. | “Kidswear Manufacturer Pakistan” title, “custom kidswear manufacturing” description, and the same buyer-requirements enquiry guidance. |

No keyword lists, hidden text, forced exact-match repetition, unsupported product claim, repetitive country targeting, translated fragments or homepage stuffing was added. Hoodie/T-shirt terms remain conditional product-depth opportunities, not currently public indexable product pages.

### 6. Blog, CMS and internal-link work

Blog content has a mixed source model:

- `src/lib/blog-posts.js` retrieves published `blog_posts` from Supabase when it is configured.
- It uses a small local fallback from `src/data/site.js` only when CMS data is unavailable.
- Local fallback edits do **not** prove that production CMS content changed.

The local project now filters six sourcing-positioned historic blog slugs and directs them via direct 301 redirects:

| Retired URL | Local redirect destination |
| --- | --- |
| `/blog/choose-apparel-sourcing-agent-pakistan` | `/services` |
| `/blog/apparel-sourcing-timeline-new-brands` | `/how-it-works` |
| `/blog/mistakes-sourcing-clothing-overseas` | `/custom-order` |
| `/blog/source-mens-apparel-pakistan-2026-guide` | `/products/mens` |
| `/blog/fashion-trends-2026-what-to-source` | `/products` |
| `/blog/pakistan-vs-bangladesh-vs-china-apparel-sourcing` | `/services` |

They are no longer included by the local blog listing/sitemap loader. Their public paths remain redirects instead of becoming 404s.

Internal links were researched for the existing hoodie-manufacturing, kidswear, sourcing-agent, tech-pack and MOQ topics. The actual live blog record body is CMS-controlled, so no CMS content was written. Exact safe recommendations are in [internal-link-proposals.md](internal-link-proposals.md); pending CMS manufacturing corrections are in [manufacturing-cms-proposals.md](manufacturing-cms-proposals.md) and [cms-in-house-manufacturing-replacements.md](cms-in-house-manufacturing-replacements.md).

Five complete article drafts exist under [unpublished-article-drafts](unpublished-article-drafts). They are editorial drafts only; they have not been imported, published, linked from public pages, inserted into the sitemap or treated as active keyword coverage.

### 7. Draft product and export-market pages

Three routes exist for local owner review:

- `/products/hoodies`
- `/products/t-shirts`
- `/export-markets`

`src/lib/draft-pages.js` protects all three. Their default behavior is the normal 404. Set `SHOW_DRAFT_PAGES=true` only in a local review environment to view them. In that mode they return 200 with `noindex, nofollow`; they still stay out of public navigation, sitemap, `llms.txt`, structured data and public internal discovery.

Their quote guidance uses the approved form:

> Minimum order quantity depends on the style, fabric and decoration. Tell us your quantity and we confirm it in your quote.

Their owner-sensitive options are deliberately marked for review. Nothing in these drafts is ready to publish without separate owner approval and route-by-route evidence confirmation.

### 8. Accessibility and small usability corrections

Only narrow, evidence-based changes were made:

- The informative kidswear image alt text was corrected to describe the actual image.
- The floating contact control’s accessible label now describes its real `/contact` destination.
- No image asset, dimensions, cropping, visual styling, link focus behavior, navigation structure or responsiveness was changed in the alt/link work.

Desktop and mobile visual comparison was unavailable, so the work should receive visual QA before release.

### 9. Performance work

No performance optimization was implemented. PageSpeed/mobile requests for the homepage, menswear, kidswear, services, custom order and a representative article could not return usable results. Browser, Lighthouse, Playwright and real-user Core Web Vitals access were also unavailable.

No scores, Core Web Vitals, bottleneck, or improvement claim was invented. This avoided unmeasured changes to image priority, image sizing, fonts, scripts, caching, animations or layouts. The measurement plan and limitations are in [performance-review.md](performance-review.md) and [measurement-plan.md](measurement-plan.md).

## Validation performed

The following evidence is recorded for the local candidate. It must not be presented as a production result.

| Check | Result | Limitation |
| --- | --- | --- |
| Next production build | Passed for the relevant implementation batches, generating 50 application/framework/API/redirect routes. | One later rebuild ended with incomplete tool output after compilation; it was not counted as a new pass. |
| Focused lint | Passed for the specifically changed files in multiple batches. | Repository-wide lint has substantial pre-existing findings, including generated admin output; it is not a passing release check. |
| Diff hygiene | `git diff --check` passed in the recorded batches. | Must be re-run after any later edits. |
| Local HTTP SEO checks | The earlier pre-retirement run passed for 46 sitemap pages. The current regenerated sitemap has 40 URLs and passed expected redirects, 404s, API noindex headers, canonical/robots/metadata samples and schema checks. | Checks are local and do not alter or certify the live website. |
| Draft gating | Passed both modes: default 404; `SHOW_DRAFT_PAGES=true` gives 200 with `noindex, nofollow`. | No visual browser comparison was available. |
| Route regression check | On 24 October local dev server returned 200 for `/products/mens` and `/products/kids`; hoodie draft was correctly 404 by default. | Development server compilation state can differ from a fresh production verification. |
| Responsive/visual QA | Not available. | Desktop and mobile screenshots, navigation, language switching and interactive form checks require manual/pre-production testing. |
| Safe enquiry submission | Not run. | No production enquiry was sent. Test only in a safe authorized environment. |
| Search Console/CrUX/hosting logs | Not available. | Index coverage, Google-selected canonicals, Core Web Vitals and real crawler access remain post-deployment checks. |

## What remains pending

1. **CMS export and review:** Obtain a current export of published blog records before editing or publishing CMS content. Apply the prepared exact CMS replacements only after owner review.
2. **Business evidence:** Confirm product/category MOQ conditions, product-specific scope, activewear/safety claims, QC process, certificate/audit holder and scope, shipping responsibilities, sampling terms and current commercial policy. The grouped questions are in [keyword-verification-questionnaire.md](keyword-verification-questionnaire.md).
3. **Unsupported visible claims:** Review existing certification, sustainability, QC, performance, delivery and category-MOQ wording using the documented inventory. Do not retain a claim merely because it existed before the SEO work.
4. **Localization:** Produce properly localized French/Italian content only after market evidence, translated content, native review, URL/hreflang strategy and support processes are approved. Do not insert translated keyword fragments into English pages.
5. **Draft publication decision:** Review each hoodie, T-shirt and export-markets draft, remove or confirm owner markers, validate all claims, and explicitly approve publication before making it publicly available or indexable.
6. **Visual and functional QA:** Compare desktop/mobile pages in matching conditions. Test navigation, enquiry routes/forms, translations, image behavior, focus states and new wording wraps without submitting an unsolicited production enquiry.
7. **Live post-deployment verification:** Check both apex and `www` redirects, canonical tags, sitemap/robots, selected structured data, `noindex` behavior, Search Console processing and Google-selected canonical after an authorized deployment.
8. **Performance measurement:** Obtain a valid mobile lab runner plus real-user data before proposing one or two measured optimizations.
9. **Release preparation:** Make small logically separated commits, retain a rollback reference, repeat build/targeted lint/HTTP validation and address any actual regression before deployment approval.

## Important items intentionally not done

- No deployment, production push, DNS, hosting, framework upgrade, CMS write, database migration or auto-deploy branch action.
- No public URL rename, route deletion, country landing page, translated route, visible FAQ section, product launch, new navigation item, design redesign or language-selector removal.
- No invented MOQ matrix, prices, stock, reviews, ratings, certifications, factory ownership claim, delivery promise, foreign office, product specification or shipping promise.
- No keyword stuffing, hidden text, meta-keywords, unsupported schema or automatic noindex approach to canonicalization.
- No performance change without measurements.
- No claim of rankings, rich results, real-user Core Web Vitals, indexing completion, crawler access from provider IPs or conversion improvement.

## Recovery and release references

The repository is intentionally still a preserved dirty worktree. Do **not** use `git reset` or `git clean` to remove SEO work, because other uncommitted work predates and coexists with these batches.

- Original historic baseline: `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`.
- The immediate pre-batch state is not represented by that commit alone because prior work was already uncommitted.
- `docs/seo/release-batch.patch` and `docs/seo/manufacturing-batch.patch` are review/recovery aids for their respective earlier batches. Their recorded reverse-application dry runs passed at the time of review.
- Before a new commit, inspect the current diff and create a discrete commit for each approved batch. After a commit, use `git revert <commit>` for that specific batch.
- Before committing, reverse only matching hunks after checking for later edits. Preserve documentation and private ignored artifacts separately.

The formal earlier review was **NOT READY FOR RELEASE** because browser visual/functional QA, full lint completion, live Search Console/field data and safe-form validation were unavailable. That decision should remain in place until those checks are completed for the final candidate.

## Supporting documents

| Document | Use it for |
| --- | --- |
| [change-log.md](change-log.md) | Chronological implementation history and exact batch-level changes. |
| [implementation-status.md](implementation-status.md) | Current status, remaining work, unavailable checks and next small batches. |
| [release-review.md](release-review.md) | Earlier release decision, checks and rollback approach. |
| [technical-ai-international-review.md](technical-ai-international-review.md) | Canonical, robots, sitemap, AI/international and local rendered evidence. |
| [keyword-coverage-audit.md](keyword-coverage-audit.md) | Full 172-keyword coverage table and intent decisions. |
| [keyword-coverage-batch-review.md](keyword-coverage-batch-review.md) | Exact menswear/kidswear keyword batch rationale and before/after wording. |
| [keyword-verification-questionnaire.md](keyword-verification-questionnaire.md) | Deduplicated owner questions for business facts still needed. |
| [owner-answers-implementation.md](owner-answers-implementation.md) | Confirmed owner facts already used and unsupported claims not yet corrected. |
| [manufacturing-review.md](manufacturing-review.md) | Full manufacturing-positioning evidence and validation record. |
| [manufacturing-cms-proposals.md](manufacturing-cms-proposals.md) | Exact CMS edits awaiting a current export and approval. |
| [international-blog-audit.md](international-blog-audit.md) | Blog classifications and the six redirect decisions. |
| [performance-review.md](performance-review.md) | Measurement attempts, limitations and the safe next performance process. |
| [content-corrections-proposed.md](content-corrections-proposed.md) | Factual inconsistency proposals and business questions. |
| [restore-instructions.md](restore-instructions.md) | Baseline restoration context; use with care around the shared dirty worktree. |

## Recommended next batch

The smallest useful next batch is to obtain a current CMS export and owner answers for the remaining factual questions, then make one narrow, reviewable CMS/content correction batch. Start with the highest-risk factual claims: product-specific MOQ, certificates/sustainability, quality-control wording and shipping responsibilities. Follow it with manual desktop/mobile and safe enquiry-path QA before considering an authorized deployment.
