# Mobile performance measurement status

22 October 2026 (Asia/Karachi). Measurement unavailable; no optimization implemented. Existing uncommitted SEO/content changes were preserved.

## Requested pages and results

Production origin requested: `https://www.osdapparels.com`. These are attempted public measurements, not measurements of the local uncommitted changes.

| Path | Mobile lab result | Real-user Core Web Vitals | Before/after |
| --- | --- | --- | --- |
| `/` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |
| `/products/mens` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |
| `/products/kids` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |
| `/services` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |
| `/custom-order` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |
| `/blog/how-to-write-a-tech-pack-guide` | Unavailable: PageSpeed API retrieval failed | Unavailable | Not measured |

No performance score, LCP, CLS, INP, FCP, TBT, Speed Index, transfer-size saving or timing improvement was obtained. Unavailable values are not zeroes, failures of the website, or evidence of insufficient CrUX samples.

## Measurement attempts and limitations

- Requested Google's `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` endpoint with each absolute URL and `strategy=mobile` through the web tool. All six requests returned tool-access failures, not usable Lighthouse reports or API error payloads.
- A direct sandboxed curl request for the homepage mobile report failed to connect to `www.googleapis.com:443` (curl error 7). It did not measure site response time or prove a Google API outage.
- Fresh browser inventory returned no apps or browsers. Browser-based mobile diagnostics, screenshots and interaction checks were unavailable.
- The project has no performance script. No installed Lighthouse package/command or Playwright/Puppeteer packages were found in the checked local locations. No dependencies or framework versions were changed to obtain a score.
- No current CrUX report or authenticated Search Console Core Web Vitals evidence was available. Do not infer field performance from the existing search-click export.
- Earlier local build approval and filesystem limitations remain recorded in the change log. No build was attempted for this documentation-only task, and no old build output is presented as a new measurement.

## Lab versus real users

Lighthouse produces controlled lab diagnostics. CrUX field data describes real users over a rolling collection period and may be available at page or origin level. A lab score cannot certify real-user Core Web Vitals; a field result must retain its aggregation scope and period. Google documents the distinction in [About PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about). No such data was successfully retrieved for this batch.

## Decision and trade-off

No concrete performance bottleneck was established, so there is no evidence-backed optimization to implement. Source-level use of an image, font, animation or translation script is not itself a measured bottleneck. Preserve image dimensions, cropping, priority, animation, language selection, fonts, layout and caching behaviour. The trade-off is that possible performance opportunities remain unquantified; no experience regression is introduced by a speculative change.

This batch changes only this report, the change log and implementation status. No application, dependency, image, cache, environment or hosting change; no deployment. All five pre-existing modified application files remain part of earlier batches, not this performance task.

## Matching conditions for the next measurement

1. Obtain a working mobile Lighthouse/PageSpeed runner and record the source revision/deployment, tool/browser version, device/viewport, CPU/network settings, test location and cache state. Keep the URL/host and CMS article content consistent.
2. Capture at least three baseline runs per requested page under those conditions and retain individual reports plus medians. Record the actual LCP element, loading/resource evidence, layout-shift sources and long tasks before choosing at most two fixes.
3. Prepare the smallest isolated change on a local production build or authorized non-production preview. Compare that build against an equivalent pre-change build under the same runner/settings; do not directly compare a production CDN baseline against a localhost result as proof of improvement.
4. Repeat matching runs, inspect metric variability and verify the targeted cause improved. Separately record any available field LCP/INP/CLS with page/origin scope and collection dates; do not label an immediate lab comparison a real-user improvement.
5. Verify desktop/mobile navigation, menus, quote/contact fields and validation, uploads where applicable, language switching, animation, image crop and responsive behaviour. Test submission only through a safe test environment or separately authorized production test. Revert only the responsible optimization if it introduces regressions.

Navigation, forms, translations and responsive behaviour were **not verified** in this batch. No new optimization is awaiting those checks, but prior rendering-affecting batches remain unready for release until their own visual/functional checks pass. Existing restore instructions remain unchanged.
