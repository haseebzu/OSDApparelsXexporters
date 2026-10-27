# Release 1 readiness review

**Reviewed:** 24 October 2026  
**Scope:** Current local repository, with no deployment, push, CMS/database write or hosting change.

This review supersedes stale current-state totals in earlier handover text. Historic audits remain useful as dated evidence, but they do not describe the current generated local output after retired blog filtering.

## Corrected sitemap count and URL inventory

The local production server generated `sitemap.xml` successfully on 24 October 2026.

- **40 total URLs**
- **16 static URLs**
- **24 active blog URLs**
- **0 of the six retired blog URLs are present**

The previously reported 46 URLs were a **pre-retirement snapshot**: 16 static URLs plus the original 30 CMS posts. Six of those 30 posts now have direct permanent redirects and `getPublishedBlogPosts()` filters them before the blog index and sitemap are built. The current calculation is therefore `16 + (30 - 6) = 40`.

### Static URLs (16)

`/`, `/about`, `/products`, `/products/mens`, `/products/kids`, `/custom-order`, `/services`, `/how-it-works`, `/certifications`, `/sustainability`, `/testimonials`, `/blog`, `/quote`, `/contact`, `/privacy-policy`, `/terms`.

### Active blog URLs (24)

`/blog/faisalabad-cotton-tshirts-high-demand`, `/blog/custom-apparel-packaging-branding-guide`, `/blog/apparel-quality-inspection-stages`, `/blog/private-label-streetwear-brand-launch`, `/blog/dye-sublimation-printing-explained`, `/blog/workwear-uniform-manufacturing-guide`, `/blog/denim-manufacturing-101-pakistan`, `/blog/kids-clothing-manufacturing-guide`, `/blog/source-custom-sportswear-activewear-pakistan`, `/blog/fob-vs-cif-vs-ddp-shipping-terms`, `/blog/low-moq-clothing-manufacturer-startups`, `/blog/fabric-gsm-guide-tshirts-hoodies-sportswear`, `/blog/embroidery-vs-screen-printing-corporate-uniforms`, `/blog/sustainable-apparel-manufacturing-guide`, `/blog/custom-hoodie-manufacturing-guide`, `/blog/start-private-label-clothing-brand-2026`, `/blog/faisalabad-textile-capital-of-asia`, `/blog/aql-inspection-standards-explained`, `/blog/screen-print-vs-dtg-vs-sublimation`, `/blog/how-to-write-a-tech-pack-guide`, `/blog/gots-vs-oeko-tex-certification-clothing`, `/blog/understanding-moq-clothing-manufacturing`, `/blog/questions-to-ask-clothing-supplier`, `/blog/oem-vs-odm-vs-private-label-apparel`.

Static sitemap entries have no fabricated last-modified date. Blog last-modified dates come from `updated_at`, then `published_at`, when supplied by the content source.

## Current keyword snapshot

The 172 rows in [keyword-coverage-audit.md](keyword-coverage-audit.md) were recount-checked on 24 October.

| Current status | Count |
| --- | ---: |
| Implemented | 37 |
| Partially covered | 47 |
| Requires verified business information | 47 |
| Proposed localization/content | 28 |
| Irrelevant — deliberately excluded sourcing-service terms | 13 |
| **Total** | **172** |

This is the current snapshot. Earlier counts are historical records only and must carry their original date.

## In-house claim provenance and boundary

The owner-confirmed company-level statement is that OSD is an in-house apparel manufacturer in Faisalabad and not a sourcing agent. It supports manufacturer positioning, the retained brand line “Your Brand, Your Way,” and these owner-supplied homepage figures:

- Dyeing capability of 20–25 tons per day using low-liquor-ratio, high-temperature jet machines.
- More than 278 stitching machines operated by skilled, experienced operators.
- Combined daily production capacity of 2,000 pieces.
- Five hanger systems supporting production efficiency.

This evidence is recorded in [manufacturing-review.md](manufacturing-review.md) and [owner-answers-implementation.md](owner-answers-implementation.md). It does not support a blanket claim that every activity is performed in-house. In particular, the owner answers confirm listed decoration and finishing methods are available, but leave the responsible party and garment-specific suitability unconfirmed. Development support, inspections, packaging, logistics, certification, performance claims and supplier/site relationships remain evidence-dependent.

No new process-level in-house claim was added in this review.

## Redirect review: six retired articles

All six checks returned a single direct local **301** to the recorded destination. The historic route audit contains titles, descriptions and text-length evidence but no per-URL Search Console metrics, backlink export or referring-domain data. The supplied Search Console data is aggregate/page-level and cannot justify a redirect on link equity or performance grounds.

| Retired path | Original intent | Destination and relevance | Retirement reason | Decision / concrete follow-up |
| --- | --- | --- | --- | --- |
| `/blog/choose-apparel-sourcing-agent-pakistan` | Selecting a sourcing agent in Pakistan. | `/services` is a manufacturing-services page; **weak** intent match. | The article positioned OSD as an agent, conflicting with the confirmed operating role. | Keep the tested 301 for now. Before any later change, obtain query/backlink evidence. If demand is material, prepare an owner-reviewed buyer guide on choosing a clothing manufacturer and retain the old path only if the new content fully answers its legacy intent. |
| `/blog/apparel-sourcing-timeline-new-brands` | Understanding the stages/timeline of apparel sourcing for new brands. | `/how-it-works` explains the production process; **strong** match. | The source described OSD through sourcing stages. | Retain the 301. Review only if CMS/query evidence indicates a more specific production-timeline article is needed. |
| `/blog/mistakes-sourcing-clothing-overseas` | Avoiding mistakes when arranging clothing production overseas. | `/custom-order` addresses requirements and quote preparation; **moderate** match. | Sourcing-partner positioning conflicted with manufacturing-only direction. | Retain the 301. A future evidence-led buyer checklist could be published at a suitable existing/new CMS route only after content approval. |
| `/blog/source-mens-apparel-pakistan-2026-guide` | Finding menswear production in Pakistan. | `/products/mens` is the menswear category; **strong** match. | The historic article represented OSD as connecting buyers with manufacturers. | Retain the 301. |
| `/blog/fashion-trends-2026-what-to-source` | Fashion trends and sourcing decisions. | `/products` offers a product-category overview; **weak** match. | Trend/sourcing language conflicts with the current role. | Keep the tested 301 until evidence is available. If the URL has meaningful demand/links, propose an owner-reviewed manufacturing-oriented seasonal product-planning article before changing the redirect. |
| `/blog/pakistan-vs-bangladesh-vs-china-apparel-sourcing` | Comparing sourcing countries. | `/services` covers OSD services; **weak** match. | The historical comparison relied on the sourcing-agent proposition and contains unverified country/cost/timing claims. | Keep the tested 301. Do not create comparison content without fact review. If evidence warrants recovery, prepare a neutral, source-supported comparison before reconsidering the destination. |

No additional URLs were retired in this review.

## Authentication review — separate from SEO

The storefront proxy in `src/proxy.js` delegates to `src/utils/supabase/middleware.js`. Storefront pages are public; there are no private storefront routes in this application. The separate `osd-admin` application protects `/admin` and its subroutes.

| Scenario | Result | Evidence / limit |
| --- | --- | --- |
| Storefront public request without an auth cookie | Passed. `/` returned 200 in the local production server. | `updateSession()` immediately continues without a Supabase auth call when no auth cookie exists. |
| Storefront with missing Supabase configuration | Code reviewed. It immediately continues so a public site does not fail when configuration is absent. | Not separately runtime-tested because the local environment loads configured variables. |
| Storefront valid session | Not exercised. | Requires a dedicated non-production test account; no user credentials or customer data were used. |
| Storefront expired/invalid real session | Not conclusively exercised. | Source calls `getUser()` and clears only Supabase auth cookies when Supabase returns an error. A generic dummy cookie returned 200 but did not prove the real stale-token error branch. Test this with a safely issued, expired test session against non-production Supabase. |
| Admin protected routes without a session | Passed. Local `HEAD /admin` and `/admin/blog` returned 307 to `/login?redirectTo=…`; `/login` returned 200. | This verifies fail-closed private-route handling for an unauthenticated request. |
| Admin valid session and allowlist | Not exercised. | Requires the same dedicated test account, both allowlist paths and a controlled test database. |
| Logout | Code reviewed, not exercised. | `logoutAction()` calls `supabase.auth.signOut()` and redirects to `/login`; validate cookie clearing and post-logout admin denial with the dedicated test account. |

The middleware change should be released only with those remaining non-production authentication tests. It is not a reason to alter SEO metadata, robots, sitemap or public route access.

## Completed local verification

- `npm run build` completed successfully on Next.js 16.2.9.
- Focused ESLint completed with no diagnostics for sitemap, robots, metadata, blog loader, retired-route map, proxy, Supabase middleware, product-family pages and local drafts.
- Local production checks passed for homepage, menswear, kidswear, services and custom order: 200, `www` canonical and `index, follow` metadata.
- `/products/hoodies` returned 404 with the draft flag off.
- `robots.txt` references `https://www.osdapparels.com/sitemap.xml`.
- Sitemap output had 40 URLs and excluded all six retired slugs.
- The six redirect headers returned one direct 301 each; `/printing` remained a 307 to `/services`.

## Actual pre-deployment blockers

1. Perform matching desktop and mobile checks for the changed/public routes. Confirm no visual wrapping, navigation, language-selector, responsive, focus-state or animation regression.
2. Test enquiry/quote/contact paths in a safe test environment. Do not send unsolicited production enquiries.
3. Use a non-production Supabase test account to verify valid session refresh, an expired/invalid matching session cookie, admin allowlist behavior, logout cookie clearing and post-logout denial.

## Post-deployment verification

- Confirm apex-to-`www` redirects, one canonical per indexable route, sitemap and robots references on the deployed host.
- Request the sitemap in Search Console and check processing, coverage and Google-selected canonical over time.
- Check the six redirect responses on the deployed host and watch 404/soft-404 reports.
- Review per-URL query/backlink evidence when it becomes available, especially for the three documented weak redirect matches; keep the current tested redirects unless an evidence-led alternative is approved.
- Monitor public authentication errors and authorized admin sign-in/logout behavior without logging credentials or customer data.
- Compare real user/Core Web Vitals data when access is available; do not infer it from the local build.

## Optional future growth work

- Owner-approved CMS corrections for factual claims and manufacturing position.
- Evidence-led recovery/rewrite options for weak redirect topics.
- Properly localized French/Italian content with native review, URL/hreflang plan and support process.
- Product-depth pages only after product scope, MOQ and proof are approved.
- Measured performance improvements after valid mobile lab and field data are available.
- Editorial publication of the existing unpublished article drafts after factual/content approval.

## Release decision

**NOT READY FOR DEPLOYMENT YET.** The source build and focused technical regression checks pass. The remaining blockers are the specific manual visual/form checks and non-production authentication session tests above. Live indexing results and field performance data are post-deployment verification, not pre-deployment blockers.
