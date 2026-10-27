# Pre-change SEO baseline — 20 October 2026

## Scope and preservation

This is a documentation-only, read-only baseline. No source, content, metadata, URL, redirect, dependency, production setting, or deployment was changed.

- Repository branch: `main`
- Commit: `8bb41b463d9702225e3afe37fa6bad2a9bcf8840` (`Improve page SEO metadata, structured data, and crawl coverage`; 5 September 2026 +05:00)
- Working tree at start: clean; no uncommitted changes existed, so no working-tree snapshot was needed.
- Public URL observed: `https://osdapparels.com` (Vercel; deployment ID unavailable without hosting access).
- Baseline observation time: 20 October 2026, Asia/Karachi.

## Architecture observed

The public application is Next.js 16.2.9 using the App Router. Public routes are under `src/app`; the dynamic sitemap uses `src/app/sitemap.js`, robots uses `src/app/robots.js`, and metadata is centralized in `src/lib/metadata.js`. Blog content can be CMS-backed with static fallback. The separate `osd-admin` application is private and excluded from the public inventory.

## Live crawl and URL findings

The live sitemap returned 46 URLs. All sitemap members have an apex URL in the XML. Direct apex requests for the homepage and all 16 static content pages returned a 308 to the matching `www` URL, then 200. The live HTML declares self-referencing apex canonicals and uses `index, follow` robots directives.

This is a confirmed origin-signal discrepancy: transport redirects resolve to `https://www.osdapparels.com`, while the live sitemap and HTML canonicals use `https://osdapparels.com`. It is recorded only, not corrected. `/printing` is a source-defined redirect to `/services` and is not in the content sitemap. API, admin, authentication, credential, and other non-public routes are excluded.

Full fields (URL, status, redirect destination, canonical, title, description, H1, robots, sitemap membership, and evidence) are in [url-inventory.csv](url-inventory.csv). The article rows reuse the repository's existing local production validation record for detailed metadata/H1 values; static page fields were also checked against live HTML on this baseline date.

## Search Console performance export

The supplied export says `Last 3 months`, Web search, but the chart actually covers 4 September–17 October 2026 (44 days): **74 clicks**, **352 impressions**, **21.02% CTR**. These are Performance-report values, not an indexed-page total.

- Devices: mobile 40 clicks / 199 impressions / 20.10% CTR; desktop 34 / 150 / 22.67%; tablet 0 / 3 / 0%.
- Leading country: Pakistan 60 clicks / 194 impressions / 30.93%. The US has 1 / 34, UK 0 / 10, Canada 1 / 5, and Australia 0 / 3. France and Italy have no rows.
- Leading page: `https://www.osdapparels.com/` with 62 clicks / 196 impressions; `https://osdapparels.com/` separately has 1 / 23, consistent with the origin inconsistency needing later review.
- Visible leading query: `osd apparels`, 18 clicks / 31 impressions / 58.06% CTR. Query reporting is anonymized/thresholded, so visible query rows cannot classify all traffic as branded or non-branded.
- `Search appearance.csv` contains only a header; it reports no available appearance rows.

Raw supplied reports and a checksum-backed derivative are stored locally in ignored `docs/seo/private/`; no credentials or enquiry data were copied. Page Indexing, Sitemaps status, Core Web Vitals, URL Inspection/Google-selected canonicals, conversions, and a hosting deployment ID were unavailable because authenticated Search Console/Vercel access was not provided.

## Visual baseline

No desktop/mobile screenshot artifacts were captured. The available browser automation surface reported no browser, and no headless/browser-screenshot tooling was provided for this run. Consequently navigation, Google Translate language selector, animations, and unsubmitted form rendering could not be visually verified. No form was submitted.

Requested later capture set: homepage, products, menswear, kidswear, services, custom-order, contact, quote, blog index, and one article; use 1440×1600 desktop and 390×844 mobile after visual settling.

See [restore-instructions.md](restore-instructions.md) for the exact recovery reference and [change-log.md](change-log.md) for this no-change record.
