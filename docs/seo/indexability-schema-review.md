# Indexability and structured data review

22 October 2026, Asia/Karachi. Separate from the unfinished canonical-host batch. No application changes were made for this review. No metadata copy, visible content, design, routes, access controls or hosting settings were changed.

## Decision

No independently verified defect justifies a new indexability/schema patch on the evidence available. This is a partial review, not a clean bill of live health. Full HTTP and build verification remain pending. Keep existing schema rather than remove blocks simply because several occur on a page or because they do not qualify for a Google enhancement.

## Findings

| Area | Evidence and decision |
| --- | --- |
| Public robots metadata | Root layout and `createMetadata` default to index/follow. Source search found no public call setting `noIndex: true`. This does not verify current rendered tags or hosting response headers. |
| Private exclusions | `next.config.mjs` retains `X-Robots-Tag: noindex, nofollow` on `/api/:path*`. No private application or authentication code was modified. A robots allow rule is not an access-control mechanism. |
| robots.txt | The preceding canonical batch freshly retrieved live `User-Agent: *`, `Allow: /`, apex Host and apex Sitemap reference. Rules were left unchanged; host correction belongs exclusively to the prior batch. |
| Sitemap membership | Source contains 16 static content routes plus published posts from the same loader used by blog pages. `/printing`, APIs and admin routes are not included. The preceding live check counted 46 URLs. All members' current status/robots values have not been audited, so appropriate membership is not fully certified. |
| Missing and redirect pages | Source retains `/printing` redirect to `/services` and `notFound()` for missing blog posts. September's 307/404 records are historical. Current exact redirect-only and missing-page status codes still require direct checks. |
| Sitemap dates | Static routes omit lastModified. Article dates use valid `updated_at`, falling back to valid `published_at`; unavailable/invalid dates are omitted. There is no blanket current-date assignment. Whether CMS timestamps correspond to significant content updates is not independently verified. |
| Organization | Shared data supplies the visible phone and Faisalabad location. No observed conflicting source values warrant correction. Business ownership/capability claims remain owner-verification matters; do not infer new facts. |
| WebSite | Existing name, URL, language and publisher retained. SearchAction is conditional on `NEXT_PUBLIC_SITE_SEARCH_URL`; deployed environment value was not inspected, so its applicability is pending. |
| Breadcrumbs | Route-level breadcrumbs use the shared helper, sequential positions and existing route paths. Their presence alongside Organization/WebSite/article blocks is not itself duplication or a defect. |
| BlogPosting | Article title/excerpt/image/category come from the post; publication/modification dates are normalized, and mainEntityOfPage uses the article route. JSON-LD is serialized with less-than escaping. No author or other business facts were invented to satisfy recommended properties. Live article JSON parsing remains pending. |
| Product | `src/lib/product-schema.js` generates 10 items per family from the same category names, descriptions and image helper used by visible cards. No offers, stock, ratings or review properties are fabricated. The pages describe categories rather than a single product/variants, so no Google product-snippet eligibility is claimed. Lack of eligibility alone does not establish that the generic markup must be removed. Manufacturer attribution still requires factual confirmation before any change. |
| `/blog/ddd` | Historical inventory has it outside the live sitemap. Current web retrieval failed; that is not proof of HTTP 404. Do not delete, redirect, noindex or add it to the sitemap on that basis. |

## Current official guidance consulted

- [Google Product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet): product rich results focus on a single product or its variants; snippet eligibility also needs an offer, review or aggregate rating. Category-card data should not be padded with invented commerce/review facts to satisfy these requirements.
- [Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): use absolute URLs and accurate last-modified values reflecting significant updates. Existing source date handling does not manufacture today's date; semantic accuracy of CMS timestamps remains a separate check.

## Checks and limitations

- Read sitemap, robots, shared metadata/schema builders, product page rendering and data helpers, blog loader and routes, date normalization and public API header configuration.
- Web retrieval of the menswear page showed the existing category cards. This was text retrieval, not raw-header/schema validation. `/blog/ddd` retrieval failed without a reliable HTTP status.
- A focused source-generator check ran assertions for Organization contact, WebSite with no search environment override, date normalization, category descriptions/names, absence of fabricated offer/review fields, and sitemap output with 16 static routes plus three explicit test fixtures. It reached the final configuration import but then failed with Node `EPERM` while resolving `C:\Users\abdul`. The overall command did not pass; fixtures are not live CMS evidence.
- Focused ESLint could not execute: the initial npx PowerShell shim was restricted, and direct Node invocation then hit the same filesystem-resolution `EPERM`. No lint success is claimed.
- The production build requested by the preceding canonical batch was not executed. Automatic approval review failed due to its usage limit, rather than rejecting the action as unsafe. It was not bypassed or retried under a different permission route. Build verification for both batches remains pending until this approval issue is resolved.
- Full current public-inventory status codes, X-Robots-Tag and meta robots, sitemap dates/membership, JSON-LD parsing and missing-route status need a working approved HTTP/local-build environment.
- Search Console URL Inspection, Google-selected canonicals, Page Indexing, sitemap processing and enhancement reports remain pending. No production submissions, publishing or deployment occurred.

## Reviewable scope and next step

This batch changes documentation only: this report, its change-log entry and the implementation-status update. The pre-existing uncommitted changes to `src/lib/metadata.js` and `src/app/robots.js` belong solely to the canonical batch and remain untouched by this review. `public/llms.txt` was not changed: the prior attempted command failed to parse.

Resolve approval/build access and complete the live route/schema audit before declaring this batch verified. Correct only a concrete defect that the completed checks establish; otherwise retain the no-application-change result. No rollback of application code is needed for this review. Remove/revert only these review documentation additions if required, preserving the separate canonical work and historical baseline.
