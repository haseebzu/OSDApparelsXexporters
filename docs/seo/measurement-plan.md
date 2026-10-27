# Measurement plan

22 October 2026. Planning only: no tracker, consent tool or event code added. No authenticated analytics, Bing Webmaster Tools or Search Console session is connected. Available evidence is the private Search Console export summarized in [keyword-intent-map.md](keyword-intent-map.md). No customer records were exported.

## Existing implementation

Source search found no GA/GTM, dataLayer, Plausible or PostHog implementation in `src`. This does not establish that hosting injects no analytics. Translation storage/cookies and the hero session marker are existing behaviour, not a measurement platform. Inspect actual browser/network and hosting configuration with authorized access before adding tracking; preserve existing consent choices. Agree the appropriate consent and retention configuration before implementation.

`QuoteForm.jsx` posts to `/api/enquiries` and shows success on an OK response. The API persists an enquiry and returns success identifiers; email sending can fail or be skipped independently. A successful submission therefore means an accepted enquiry, not a delivered email, qualified buyer or sale. No production test submission was sent.

The floating control labelled WhatsApp links to `/contact`, not a WhatsApp outbound URL. No `wa.me` source match was found. Measure that control as contact navigation; do not label it a WhatsApp conversation. Telephone/email links are engagement only.

## Proposed measurement contract

| Measure | Trigger and permitted data | Dedupe / limitation |
| --- | --- | --- |
| Organic search | GSC page, query, country, device and date aggregates; separate branded, ambiguous brand and identifiable nonbrand terms | Compare equal periods/search types; disclose export thresholds, missing queries and small counts. Obtain query-by-page data before claiming associations. |
| `quote_submit_success` | Confirm API OK plus explicit success result after persistence; route and form variant only | Once per accepted submission, not render or click; local dedupe token may remain private and must not be a CRM ID sent to analytics. Handle retries deliberately. Acceptance is not qualification/email delivery. |
| `contact_navigation` | Existing contact/WhatsApp-labelled control to `/contact`; normalized source path | Once per user action, not every listener/render. |
| `contact_click` | Genuine mail/tel activation; channel enum and normalized source route | No email address/phone in payload. Engagement, not lead. |
| `whatsapp_click` | Only an actual approved outbound WhatsApp action if one is later present | No event invented for current contact-route button; cannot prove conversation. |
| Qualified enquiry | Owner classifies accepted records privately: real contact, relevant garment need, requirements sufficient to evaluate and feasible project; finalize definition with owner | Unique accepted enquiry in private CRM, monthly aggregates by consented attribution. No names, messages, files or customer IDs in analytics/Git. |
| AI referrals | Actual referrer/session source from an approved analytics implementation; sanitized landing route | Preserve unknown/direct; do not infer all direct traffic is AI. Strip query strings and any personal data; no attribution when unavailable. |
| AI citations | Observed URL citation with timestamp, exact prompt, platform/model/mode, language, market and response capture privately if needed | A mention is not a link; a citation is not a visit or lead. Repeated samples are contextual, not universal ranking measurements. |

Never send name, company, phone, email, free-text requirements, uploaded file names, raw URLs containing form data or enquiry/reference IDs to analytics. Keep click, accepted submission and qualified lead counts separate. Verify consent denial, success/failure/retry, double-click and back-navigation cases in a safe environment with mail directed to a test sink. Retain only aggregate reports in Git.

Google's AI features are included in overall Search Console Web reporting; do not invent a separate AI dashboard. [Google documentation](https://developers.google.com/search/docs/appearance/ai-features). Bing documents AI citation reporting and preview topic/intent/share comparisons, but this account's access and data remain unverified. Citation share is not traffic share or a ranking. [Microsoft documentation](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/).

## Repeatable citation sample — not yet run

Plan prepared 2026-10-22. Every observation date and cited URL below is pending, not “no citations.” Run in a fresh session with search enabled where available; record actual account location, language, mode/model and date rather than pretending the test ran in a target country. Use the same prompts monthly and after material approved changes; preserve variability rather than cherry-pick successes.

| Platform | Observation date | Language / buyer market | Exact question | Cited URL |
| --- | --- | --- | --- | --- |
| ChatGPT Search | Pending | English / UK | What should a UK clothing brand ask a Pakistan-based custom apparel manufacturer before requesting a quotation? | Not observed |
| ChatGPT Search | Pending | English / US | How can a US brand evaluate a Pakistan-based apparel sourcing agent? | Not observed |
| Google AI search experience, if available | Pending | English / Canada | What information should a Canadian brand include in a private-label clothing tech pack? | Not observed |
| Google AI search experience, if available | Pending | English / Australia | What questions should an Australian brand ask about minimum orders for custom kidswear? | Not observed |
| Microsoft Copilot search | Pending | English / UK | What is the difference between apparel manufacturing and apparel sourcing for a clothing brand? | Not observed |
| Microsoft Copilot search | Pending | English / US | What should I verify before choosing a menswear manufacturer in Pakistan? | Not observed |
| ChatGPT Search | Pending | French / France | Quelles informations une marque française doit-elle fournir pour demander un devis de vêtements personnalisés au Pakistan ? | Not observed |
| Microsoft Copilot search | Pending | Italian / Italy | Quali domande dovrebbe fare un marchio italiano a un fornitore di abbigliamento personalizzato in Pakistan? | Not observed |

Include a separate branded control query “What services does OSD Apparels provide?” on each available platform; record facts and source URLs, not merely a favourable answer. Native review the French/Italian prompts before routine reporting. Current web research of provider documentation is not execution of this sample.

Weekly initially: response/indexing errors and accepted-enquiry delivery failures (private operations). Monthly: equal-period page/country/query search trends, accepted and qualified enquiries, identifiable AI referrals and the sample. Annotate actual deployments and business seasonality; no guaranteed attribution of a traffic change to SEO work.
