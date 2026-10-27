# Technical, AI-search and international review

> **24 October 2026 correction:** The 46-URL statement below is a pre-retirement rendered snapshot. Current local sitemap output is 40 URLs: 16 static and 24 active blog URLs, with six redirect-only articles excluded. See [release-1-readiness-review.md](release-1-readiness-review.md).

Prepared 22 October 2026. This review distinguishes local source, local rendered output, live deployment and observed search performance. It does not claim a deployment, crawler access from provider IPs, rankings, citations, indexing or enquiry gains.

## Local preview and rendered verification

The preview was reachable at `http://localhost:3000` over IPv6 loopback (`[::1]:3000`). The earlier failed probe used `127.0.0.1`, which did not reach that listener. This is a local host-binding difference, not an application defect.

| Route | Local rendered result | Canonical / robots | Structured data | Notes |
| --- | --- | --- | --- | --- |
| `/` | 200; expected homepage title and description | `https://www.osdapparels.com`; `index, follow` | WebSite, Organization | Quote link present. |
| `/products` | 200; custom knitted/woven description rendered | matching `www`; `index, follow` | WebSite, Organization, BreadcrumbList | Current category links resolve to existing hubs. |
| `/products/mens` | 200; current menswear metadata rendered | matching `www`; `index, follow` | WebSite, Organization, BreadcrumbList, ItemList | Quote link present. |
| `/products/kids` | 200; current kidswear metadata rendered | matching `www`; `index, follow` | WebSite, Organization, BreadcrumbList, ItemList | Quote link present. |
| `/services` | 200; owner-confirmed MOQ, sample and shipping wording rendered | matching `www`; `index, follow` | WebSite, Organization, BreadcrumbList | Quote link present. |
| `/custom-order` | 200; accepted-input, sample and shipping wording rendered | matching `www`; `index, follow` | WebSite, Organization, BreadcrumbList | Quote link present. |

All 16 static sitemap routes returned 200 and `index, follow`. The homepage canonical is the valid root form `https://www.osdapparels.com` without a trailing slash; the verification comparison treats that as equivalent. The rendered six-page sample contained no localhost, `127.0.0.1` or Vercel preview hostname in production metadata fields.

`/robots.txt` renders an allow-all rule, `Host: https://www.osdapparels.com`, and the matching sitemap URL. `/sitemap.xml` has 46 unique `www` URLs: 16 static pages and 30 CMS-backed blog records. Thirty blog entries have source-derived `lastmod`; static pages intentionally have no invented date. The sitemap excludes `/printing` and APIs. `/printing` returns the intended 307 redirect to `/services`; an unknown blog slug returns 404. API responses have `X-Robots-Tag: noindex, nofollow`.

The build generates 50 framework/application routes. That is not a public-URL count: it includes API, framework and redirect routes. The earlier 46-route sitemap snapshot is not the current public set; current local sitemap output is 40 routes after retired-post filtering. The historical URL inventory has 47 content records because it retains `/blog/ddd`, which is a local 404 and absent from the current sitemap; `/printing` is a redirect and is checked separately.

Desktop/mobile screenshots, overflow/wrapping, animations, keyboard focus, navigation interaction and language-widget interaction remain unavailable because no browser surface is connected. Manual release checks are: capture 1440×1600 and 390×844 screenshots after hydration; open and close mobile navigation; follow each primary CTA; switch and restore the existing Google translation widget; verify visible service panels and card boundaries; submit no production form.

## Safe enquiry verification boundary

`QuoteForm` has client-side required, email and telephone validation. The API validates before persistence, but `.env.local` has configured Supabase, SMTP and R2 values. A POST could therefore create a real enquiry or send mail. No request was sent. Client validation is source-inspected only; accepted submission, persistence, upload and email delivery are pending an isolated test database/storage/mail sink.

## Technical SEO conclusion

No additional technical SEO code change was justified after the local review. Canonicals, Open Graph URLs, robots sitemap reference, sitemap URLs, redirects, API noindex, unknown-blog 404 handling and existing schemas are consistent in the checked rendered output. JSON-LD parsing confirms syntax and types only; certificate, inspection and product facts remain subject to the owner-evidence record.

One small accessibility correction was made: the floating control leads to `/contact`, so its accessible name changed from `Contact via WhatsApp` to `Contact OSD Apparels` in `src/components/layout/WhatsAppFloat.jsx`. Its icon, target, style and behavior are unchanged. This makes the label truthful for screen readers and user-triggered agents.

## AI-search readiness

Checked 22 October 2026:

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) says the usual eligibility requirements for Search apply to AI features; it does not publish an AI-specific markup, ranking shortcut or submission method.
- [Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) requires fully qualified, reciprocal alternate URLs, including self-references, when localized versions exist. Region-only codes are invalid; do not use `EU` or `UK` as hreflang values.
- [OpenAI crawler overview](https://developers.openai.com/api/docs/bots) distinguishes OAI-SearchBot (search) from GPTBot (training). Allowing OAI-SearchBot does not require allowing GPTBot.
- [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) says public content can appear in ChatGPT search if OAI-SearchBot is not blocked; it does not guarantee inclusion or citation.
- [Bing AI Visibility Insights](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/) describes preview reporting for observed citations, intents and topics. Citation share is observational, not a rank.

Local simulated requests using `OAI-SearchBot`, `Googlebot` and `bingbot` user-agent strings returned 200 for the homepage; the local robots file also returned 200. The existing `User-agent: * / Allow: /` rule permits these agents. This simulation does **not** verify a real provider crawler IP, CDN/WAF access, hosting logs or production behavior. No GPTBot or other training setting was changed.

The owner-confirmed manufacturing identity, Pakistan location, custom knitted/woven scope, buyer-supplied requirements, accepted product categories, sample workflow, 30-piece starting minimum, quality-check wording, decoration options and quote-specific shipping arrangements are already readable text in current local pages. `llms.txt` was reviewed as maintenance text only; it is not a documented prerequisite or ranking factor.

## International search intent and localization proposal

The supplied 44-day Search Console export is the only country evidence: Pakistan 60 clicks / 194 impressions; US 1 / 34; UK 0 / 10; Canada 1 / 5; Australia 0 / 3; France and Italy have no reported rows. These small, aggregate values are provisional and do not establish country-market demand, conversion or an individual query/page relationship.

English pages should describe OSD accurately as a Pakistan-based manufacturer available to international buyers. They must not imply a UK, US, Canadian, Australian, French or Italian factory. The approved shipping wording is availability to more than 50 countries, with OSD-arranged or buyer-arranged shipping and destination/quotation-dependent DDP. It is not evidence of customers, exports, included duties/taxes or fixed delivery terms in every country.

No crawlable French or Italian URLs exist. The current selector applies Google translation to the same English URL, so it is not localization coverage and receives no hreflang. A separately approved localization project should begin only after country/enquiry evidence, a native commercial reviewer and ongoing maintenance owner are available.

| Proposed phase | Pages | Required before implementation | Metadata and technical requirements |
| --- | --- | --- | --- |
| 1: English conversion clarity | Existing `/`, `/services`, `/custom-order`, `/products` | Current owner evidence only; no country page | Keep English self-canonicals; no hreflang or country-swapped copy. |
| 2: French pilot | Equivalent complete `/`, `/services`, `/custom-order`, `/products` translations | Native French commercial review; translated labels/errors/policies; factual review; maintenance owner | Stable `/fr/...` routes, `lang=fr`, individual self-canonicals, exact reciprocal `en`/`fr`/`x-default` annotations, sitemap inclusion and full form/mobile QA. |
| 3: Italian pilot | Equivalent complete `/`, `/services`, `/custom-order`, `/products` translations | Same requirements with native Italian review and demonstrated business fit | Stable `/it/...` routes, `lang=it`, individual self-canonicals, exact reciprocal `en`/`it`/`x-default` annotations, sitemap inclusion and full form/mobile QA. |

No translation, hreflang, language route or country page was added in this batch.

## Conditional product-page briefs

These are review briefs, not pages or publication-ready claims.

| Candidate | Target intent / overlap | Buyer-useful draft scope | Evidence, imagery and links required |
| --- | --- | --- | --- |
| Custom hoodies | Hoodie manufacturing; overlaps `/products/mens` and the CMS hoodie guide | Buyer requirements, available confirmed fabrics/construction, sample process, decoration suitability, MOQ conditions and quote CTA. | Approved hoodie specification/options, real permission-cleared photos, product-specific MOQ rules, decoration/fabric matrix; link from menswear and the relevant CMS article. |
| Custom T-shirts | T-shirt manufacturing; overlaps `/products/mens` and cotton-T-shirt CMS article | Buyer requirements, confirmed fabric/construction options, samples, decoration suitability and quote CTA. | Approved T-shirt specification/options, photos, MOQ rules and method/fabric matrix; link from menswear and relevant article. |
| Uniforms / workwear | School/corporate/workwear intent; overlaps kidswear and existing guide | Separate schoolwear from workwear; state only confirmed category availability and buyer requirements. | Scope by buyer type, material/trim evidence, safety/compliance position and actual images. Do not launch from the current broad category claim. |

## Authority and measurement next actions

Use the existing [authority plan](authority-plan.md) only with factual manufacturer-only wording. First collect permission-cleared production imagery, one approved specification sheet and a consented case-study record; then verify eligibility and terms before any association, directory, customer or editorial action. Do not buy links, create fake locations or publish customer names without permission.

Use the existing [measurement plan](measurement-plan.md) after a consent/privacy review. Measure Search Console aggregates by equal period, country and landing page; accepted quote submissions separately from mail delivery and qualified enquiries; genuine contact actions separately from leads; and AI referrals only from actual referrers. Bing Webmaster Tools AI reporting and the documented buyer-question sample are pending account access. No analytics code or customer data was added.

## Recovery

The only source change from this review is the accessible name in `WhatsAppFloat.jsx`. Revert that single prop after reviewing later work, or use `git revert <commit>` once this batch has its own commit. Do not use reset or clean against this shared dirty worktree.
