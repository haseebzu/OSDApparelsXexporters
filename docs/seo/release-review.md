# SEO release review

> Current candidate: see [manufacturing-review.md](manufacturing-review.md) for the subsequent owner-authorized manufacturing batch. Its batch-only recovery patch preserves this earlier work. Do not apply the older combined patch below over later changes. Current decision remains NOT READY; full lint has now completed with failures, and CMS/visual/functional gates remain pending. The rest of this file is the earlier review record.

**Decision: NOT READY.** Reviewed 22 October 2026, Asia/Karachi. Local production build, focused lint and HTTP SEO checks now pass. Matching screenshots and interaction checks remain unavailable, and repository-wide lint did not complete. No deployment or push performed.

## Comparison reference and scope

Branch: `seo/canonical-host-consistency`. Immediate pre-change commit: `8bb41b463d9702225e3afe37fa6bad2a9bcf8840` (current HEAD). No later commits or batch commits exist. This happens to equal the original baseline; it is used here because it is the immediate parent of the uncommitted patch, not as authority to restore the whole repository.

The release candidate is the accumulated, separately requested canonical, services-metadata, kids-alt and small-placeholder batches. It is **not** a canonical-only patch. No internal article links, schema corrections or performance optimizations were implemented. Documentation contains proposals that must not be treated as shipped work. Existing baseline documents were untracked before implementation and must not be discarded or silently included in a broad staging operation.

| Changed application file | URL / scope | Actual change |
| --- | --- | --- |
| `src/lib/metadata.js` | All public pages using shared origin, sitemap, social images and relevant schema | Production origin becomes `https://www.osdapparels.com`. |
| `src/app/robots.js` | `/robots.txt` | Host and sitemap reference consume shared origin/helper; crawler rules unchanged. |
| `public/llms.txt` | `/llms.txt` | This review completed 17 public-link host changes to www. Existing paths and prose unchanged. This closes the previously recorded incomplete canonical work. |
| `src/app/services/page.js` | `/services` | Title/description reflect both manufacturing and sourcing; description omits unresolved MOQ number. |
| `src/app/products/kids/page.js` | `/products/kids` | One image-specific alt correction for the inspected casual-clothing image; all other card alts unchanged. |
| `src/app/page.js` | `/` | One Core Services intro placeholder replaced with owner-confirmed manufacturing/sourcing wording. Hero, title and main paragraphs unchanged. |

Review artifacts: [release-batch.patch](release-batch.patch), [release-validation.json](release-validation.json), this report, and updates to the change log/status. The local checker is stored under ignored `docs/seo/private/`; no private export is included in the public results. No credentials or customer records were copied.

## Checks passed

1. **Scope/source preservation:** reviewed all six application-file diffs against HEAD. No route files added/deleted, CSS/font/image files changed, dependency changes, new claims, private-app changes or form/navigation implementations changed. Both manufacturing and sourcing are preserved. This is source-level assurance, not visual equivalence. Previously documented inability to locate the literal slogan remains a pre-existing issue, not a removal by this patch.
2. **Production build:** `npm.cmd run build` completed successfully with Next.js 16.2.9. Existing configured published content was available. No framework upgrade. This supersedes earlier build-unavailable entries for the current working tree.
3. **Focused lint:** `node node_modules/eslint/bin/eslint.js src/app/page.js src/app/products/kids/page.js src/app/services/page.js src/app/robots.js src/lib/metadata.js` exited 0.
4. **Whitespace:** `git diff --check` passed (Git reports a line-ending normalization warning for robots.js, not a whitespace failure).
5. **Local HTTP inventory:** started the production build on localhost and requested the union of the historical 47-record inventory and current sitemap with a Googlebot user agent. 46 pages returned 200; `/blog/ddd` returned 404 and is absent from the sitemap. Unknown test article returned 404. The latter two are not classified as indexable 200 pages.
6. **SEO output on all 46 successful pages:** one canonical, title and description each; canonical and Open Graph URLs use www and the expected path; no accidental noindex in page robots or X-Robots-Tag; homepage title unchanged; services title updated. JSON-LD parsed successfully; inspected first-party URL values used www and did not point to localhost/preview hosts. This is not a Google rich-results eligibility test or independent business-fact validation.
7. **Sitemap and robots:** 46 distinct absolute www sitemap URLs; no API/admin/printing entries; returned lastmod values parse as dates. Source retains actual available article timestamps and omits static lastmod. Robots returns 200 with the www sitemap reference and existing Allow rule. CMS timestamp factual provenance is not independently certified.
8. **Redirect/private header:** `/printing` returned 307 with Location `/services`. An unknown `/api/` test path returned 404 with `X-Robots-Tag: noindex, nofollow`; no real enquiry submission or private-data endpoint was exercised. Access controls remained unchanged.
9. **Rendered alt and public links:** local kids HTML includes the corrected alt; `/llms.txt` returns 200 with no apex links. Root layout has no appending title template; generator checks from the metadata batch found no duplicated brand. No hidden keywords added.
10. **Origin configuration:** shared public metadata origin is hardcoded to www. Relevant local environment-key inspection found no site/search-origin override; `.env.example` contains a development-only `PUBLIC_SITE_URL=http://localhost:3000` with no public-source consumer found. No environment file was edited and no secret values were recorded. Deployed environment remains unverified.
11. **Staging/privacy:** index is empty (`git diff --cached --name-only` returned nothing). No tracked files under `docs/seo/private`; ignore rule verified. Only `.env.example` is tracked among `.env*` paths. Therefore no credentials, customer data or private exports are staged. Repeat this check after any future staging.
12. **Rollback dry run:** reverse application of the exact six-file patch passed `git apply --reverse --check`. No rollback was executed.

Raw public output and test results are in [release-validation.json](release-validation.json). Its timestamp is UTC; review date above uses Asia/Karachi. Tests validate this local build, not the current deployment.

## Checks failed or incomplete

- **Release gate failed:** no matching desktop/mobile screenshots or functional interaction evidence for the visible homepage sentence and alt correction. Do not release this combined candidate on source review alone.
- **Repository-wide lint incomplete:** `npm.cmd run lint` (`eslint .`) started but produced no final diagnostics after several minutes. It was interrupted and exited 1. This is not a confirmed code-lint defect and not a pass. Focused lint success does not replace the existing full command. Investigate its execution scope separately without modifying unrelated files merely to obtain a green check.
- **Batch isolation incomplete:** several requested batches remain together as uncommitted hunks; there is no release commit or per-batch revert commit. Their source edits are distinct by file, but commit packaging and review are still outstanding. Do not describe the branch as canonical-only when submitting the combined diff.

No confirmed code regression caused by the patch was found in completed checks. The stale public links in llms.txt were an unfinished consistency edit and were corrected. No speculative schema or content fix was introduced during review.

## Checks unavailable

- Browser inventory again returned no apps or browsers. No 1440 x 1600 desktop or 390 x 844 mobile before/after captures; no settled-animation comparison, layout-shift inspection, keyboard focus, menu/navigation interaction, language switching or responsive checks.
- Contact/quote routes returned 200, but field validation, upload behaviour, email delivery and end-to-end submissions were not tested. Use a safe test environment with non-production delivery destinations. No production enquiry was sent.
- Authenticated Search Console indexing, Google-selected canonical, sitemap processing, enhancement reports and real-user Core Web Vitals remain pending. No production deployment ID/source mapping was established.
- Live-to-local whole-site equivalence, current CMS edits during future review and live hosting-level private exclusions were not exhaustively tested. Existing schema facts still need owner evidence where previously flagged.

## Current live site versus local candidate

A fresh read-only check during this review found apex homepage HTTP 308 to www. Live `/services` still returns the old title “Low MOQ Clothing Manufacturer Services | OSD Apparels” and apex canonical `https://osdapparels.com/services`. Local `/services` returns the revised title and www canonical. This confirms the reviewed patch is local and has not corrected the deployed site. It is not a reason to deploy without completing the gates above.

## Unrelated/pre-existing findings

- `/blog/ddd` was historically recorded as 200, but current local published-content loading yields 404 and omits it from sitemap. The loader/route logic is unchanged. Its 404 HTML includes a framework noindex alongside inherited index directives and homepage metadata; track separately rather than changing missing-page behaviour in this release review.
- Numerical MOQ, facility/certification claims and unfinished legal text remain in [content-corrections-proposed.md](content-corrections-proposed.md). Their presence is not caused by this batch and does not authorize speculative corrections.
- Product category schema has no new offers/reviews; Google enhancement eligibility and attribution concerns remain as documented in the separate schema review. Article linking and performance opportunities are pending, not implemented.

## Exact rollback approach

The source patch is `docs/seo/release-batch.patch`, SHA-256 `AB6E58456C8DE70681444524E88B75910D303C55C213907A07A78E74850AC822`. It contains only the six application files listed above, relative to immediate parent `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`. It excludes documentation and private data.

For the current uncommitted candidate, first inspect `git status` and the current diff, preserve later work, and confirm the patch hash. From the repository root run:

```powershell
git apply --reverse --check docs/seo/release-batch.patch
```

Only if the target hunks still match the reviewed batch and a rollback is intended, apply:

```powershell
git apply --reverse docs/seo/release-batch.patch
```

The dry run passed during this review. If later changes overlap, stop and manually reverse only the responsible hunks; do not force application, reset, clean, or restore whole files from the historical baseline. For a single batch, reverse only its listed files/hunks rather than the combined patch. Keep historical and review documentation, append the rollback outcome, and do not remove `docs/seo/private`.

Once reviewed changes are committed, record the actual batch/release commit and use a reviewed `git revert` of the responsible commit, preserving later work. No commit was created here. There is no production release from this work to roll back; hosting recovery would need the actual authorized deployment reference, which is currently unavailable.

## Required before release and after an authorized deployment

Before release: complete full lint investigation, obtain matching screenshots and safe functional tests, identify the release commit and rollback mapping, and review the distinct batches explicitly. Re-run local checks if source/content changes after this report. The local validation server was stopped after checks.

After a separately authorized deployment:

1. Record deployment ID, source commit and time. Repeat public inventory statuses and redirects on apex/www, including `/printing` and removed/missing articles.
2. Confirm one intended www canonical per indexable page, sitemap/robots consistency, absence of accidental noindex or preview URLs, correct title/description/social output and valid relevant JSON-LD. Separate 404 pages from indexable pages.
3. Verify homepage/kids screenshots, navigation, enquiry paths and translation behaviour on desktop/mobile. Use only authorized safe submissions; do not send unsolicited enquiries.
4. Check Search Console sitemap processing, URL Inspection/Google-selected canonicals and indexing when access permits. Record them pending until observed; do not infer immediate search consolidation.
5. Monitor actual errors and qualified enquiries; revert only the responsible change for a verified regression. Evaluate search performance over comparable periods rather than treating a daily fluctuation as proof of regression.
