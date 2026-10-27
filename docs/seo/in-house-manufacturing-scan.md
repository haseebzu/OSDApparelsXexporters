# In-house manufacturing positioning scan

Date: 23 October 2026. Scope: active local application source, public static files and import scripts. Historical SEO records under `docs/seo/` are retained as dated evidence and are not active website content.

## Owner-approved operating position

OSD Apparels is a full in-house apparel manufacturer in Faisalabad, Pakistan. It is not presented as a sourcing agent, buying house, intermediary, supplier-matching service, or vendor-management service. The site continues to use “Your Brand, Your Way”.

## Active-source classification and action

| Location | Existing wording or token | Category | Action in this batch |
| --- | --- | --- | --- |
| `src/data/site.js` → Global Dispatch Support | “export coordination” | B — could imply intermediary coordination | Replaced with quotation-confirmed shipping arrangements. |
| `src/app/about/page.js` → About story | “export coordination” | B | Replaced with shipping arrangements. |
| `src/app/about/page.js` → Why OSD | “managing multiple vendors” | B | Replaced with direct in-house expertise wording. |
| `src/data/site.js` → local blog fallback | “suppliers that can explain…” | B | Replaced with “manufacturers that can explain…”. This fallback is used only when the CMS is unavailable. |
| `src/lib/blog-seo.js` → 14 article metadata overrides | sourcing/agent/supplier wording in public metadata | A/B | Replaced metadata titles and descriptions with manufacturing-focused wording; historical slugs are preserved. |
| `scripts/import-blog-posts.mjs` → default category | “Apparel Sourcing” | A, future imported CMS content | Replaced with “Apparel Manufacturing”. |
| CMS blog title, excerpt and body fields | see `cms-in-house-manufacturing-replacements.md` | A/B | Not written. The local CMS endpoint was unavailable, and no live CMS update was authorized. Exact replacement decisions remain documented. |
| `sourcePage`, `source_page`, `sourcePath`, local variables named `source` | technical provenance/form fields | D — technical | Retained. These do not describe an OSD service or render as marketing copy. |
| Article slugs containing `source` or `sourcing` | public URL paths | D — historical URL | Retained to preserve existing public paths. |
| Existing historical SEO documents | previous research and audit evidence | D — historical record | Retained unchanged; do not reuse their earlier sourcing assumptions. |

## Result and limitation

The remaining application-source matches are technical field names or preserved public blog slugs. Dynamic CMS blog bodies were not locally retrievable during this review, so they remain a release blocker for the zero-A/B-rendered-content target. The current metadata override makes search snippets manufacturing-focused, but it does not replace visible CMS body copy.

## Technical proposals deliberately not applied

- The homepage’s decorative `EXCELLENCE` heading needs a separate visual decision before changing heading semantics.
- `og:locale` is currently `en_PK`; select `en_US` or `en_GB` only after confirming the intended English market convention.
- The WhatsApp control already has the accurate accessibility label “Contact OSD Apparels”. Its target should change only after an approved WhatsApp business number and consent workflow are provided.
