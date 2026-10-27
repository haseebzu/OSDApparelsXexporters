# Manufacturing positioning batch — NOT READY FOR RELEASE

22 October 2026. The owner's latest attached request expressly supersedes the earlier requirement to advertise manufacturing AND sourcing. OSD is now positioned as an apparel manufacturer. Earlier baseline and programme documents are historical where they conflict with this direction; do not reintroduce their sourcing-service proposals.

## Implementation and provenance

Before edits: branch seo/canonical-host-consistency, HEAD 8bb41b463d9702225e3afe37fa6bad2a9bcf8840, six application files already modified and docs/seo untracked. Those changes were preserved. This batch changes 16 application/public text files, including some previously modified files; no CSS, imagery, animation logic, dependency, routing, API, form implementation, translation widget, hosting or security changes. Nothing staged, committed, pushed or deployed.

A pre-batch file checkpoint and SHA-256 manifest are in ignored docs/seo/private/manufacturing-before-2026-10-22/. It also contains the prior Git diff. This preserves the immediate working state, which differs from HEAD; the original baseline is not the correct target for rolling back this batch. Git/checkpoint files do not back up CMS data, environment variables or hosting.

Public content sources:

- Static pages/components and src/data/site.js supply homepage, company, service, product and policy copy. Updated exact spans are in [manufacturing-copy-inventory.md](manufacturing-copy-inventory.md).
- Published Supabase blog_posts records supply live articles through src/lib/blog-posts.js. Three local articles are fallbacks only when the CMS is unavailable/empty. Changed fallback text is explicitly labelled; no CMS writes occurred.
- src/lib/blog-seo.js provides article metadata overrides. CMS titles/excerpts also feed blog cards, title-derived alt attributes, breadcrumbs and BlogPosting. Sourcing-led metadata and CMS editorial content are coordinated pending items, not silently rebranded.
- The language widget translates the same URL at runtime. No manually maintained French/Italian routes were found or edited. Third-party translation output is not a locally reviewed translation.
- Public file inventory found no PDF/Word/spreadsheet download; llms.txt was updated. Source link inspection found no public downloadable-document links requiring edits. Remote CMS assets, text embedded in images and non-crawlable documents are not exhaustively certified.

| URL / surface | Updated local source | Scope |
| --- | --- | --- |
| / | src/app/page.js; HeroSlider.jsx | Manufacturing role, agreed specifications, hero/marquee copy and four figures; brand promise rendered explicitly |
| /about | src/app/about/page.js | Manufacturer identity, specification-led role, no supplier-matching proposition |
| /services | page.js; ServicesPageContent.jsx | Manufacturing metadata, material-selection labels and related service wording |
| /products; /products/mens | respective page.js | Buyer wording and menswear description; broad garment intent retained |
| /certifications; /sustainability | respective page.js | Removed sourcing positioning; no new certifications or ownership assertions |
| /blog; /blog/[slug] | respective page.js; blog-seo.js | Manufacturing index description/schema and generic metadata; sourcing keyword removed, historical article topics retained pending review |
| Fallback blog routes and shared content | src/data/site.js | Role/material wording and three fallback editorial spans; not a live CMS update |
| Customer acknowledgement email | CustomerConfirmation.jsx | “sourcing needs” becomes “garment specifications”; no mail sent or delivery logic changed |
| Shared metadata; /llms.txt | metadata.js; public/llms.txt | Removed sourcing keyword/service description; existing www origin remains |

## Exact homepage text and figures

Existing section title retained: “Inside the custom apparel manufacturing setup behind OSD Apparels”.

| Existing card | New text |
| --- | --- |
| Dyeing Section | Low-liquor-ratio, high-temperature jet machines capable of dyeing 20–25 tons per day. |
| Stitching | Over 278 stitching machines operated by skilled, experienced operators. |
| Production Capacity (formerly Embroidery Facility) | A combined daily production capacity of 2,000 pieces. |
| Hanger System | 5 hanger systems to support production efficiency. |

These four figures are explicitly owner-provided in section 3 of the latest request, not independently audited or certified. The combined production figure is no longer labelled as embroidery-only output. The existing image, card count and structure are preserved. No matching animated counters for these figures existed; their text was the corresponding statistic. Unrelated capacity statistics elsewhere were not inferred from daily figures. Dyeing is tons/day, garment production is pieces/day; neither promises available capacity or daily delivery.

Hero caption: “Your Brand, Your Way. Custom apparel manufactured to your agreed product specifications.” The literal slogan was absent from the inspected pre-batch source; it is now explicitly present within the existing caption, not a new section.

## Remaining sourcing occurrences and article decisions

**Do not report all sourcing removed.** [manufacturing-cms-proposals.md](manufacturing-cms-proposals.md) records 97 matching public CMS fields from 30 articles: 20 exact replacement proposals and 77 retained editorial fields needing contextual/whole-article review. No record was deleted, redirected or marked noindex.

| Class | Remaining occurrence / disposition |
| --- | --- |
| Pending CMS update | Explicit OSD agent/supplier-matching CTAs and claims; exact original/replacement paragraphs in CMS table. Some also contain unconfirmed certifications/MOQ/timing; proposed neutral manufacturing enquiries do not validate those claims. |
| Historical URL retained | /blog/mistakes-sourcing-clothing-overseas; /blog/apparel-sourcing-timeline-new-brands; /blog/choose-apparel-sourcing-agent-pakistan; /blog/pakistan-vs-bangladesh-vs-china-apparel-sourcing. Related source-form slugs also retained: /blog/source-custom-sportswear-activewear-pakistan, /blog/source-mens-apparel-pakistan-2026-guide, /blog/fashion-trends-2026-what-to-source. |
| Unresolved public editorial copy | Educational sourcing content in CMS and associated explicit metadata overrides in blog-seo.js. Blog index may display sourcing titles/excerpts and title-derived alt text until CMS review. |
| Internal identifier | sourcePage, source_page, sourceTitle and existing slug keys describe software data or URLs; preserved. No benefit from renaming. |
| Third-party material | Translation script/vendor dependencies untouched. Educational references to other suppliers are not converted into OSD-owned capabilities. |
| Historical/private documentation | Earlier SEO reports, research, checkpoint and raw exports intentionally retain original wording; not public service copy. |
| Pending document/image audit | No local public downloadable document found. Remote assets and image-embedded text not comprehensively checked; no image file changed. |

Available Search Console export covers 4 September–17 October (44 days), not current rankings. Relevant www article clicks/impressions: country comparison 0/13; sourcing timeline 0/5; menswear guide 0/3; overseas mistakes 0/2; fashion trends 0/1; agent selection 0/1. Faisalabad textile article 0/31. Zero clicks in this small window is not grounds for deleting a URL. No query-by-page pairing, backlinks or qualified leads established.

Proposed treatment:

- Agent-selection article: useful educational distinction between an agent and manufacturer, but materially different intent from OSD's service. Keep URL/content pending owner editorial decision; exact manufacturing CTA is proposed without pretending OSD is an agent. A wholesale manufacturing rewrite or retirement/redirect requires a separate decision.
- Timeline and overseas-mistake articles: retain useful order-planning purpose; proposed paragraphs focus on specifications, responsibilities and order-specific timing. Review the entire article's numerical promises before publication.
- Country comparison: retain for factual comparative review; do not substitute location names or promise a “best” manufacturer. Country-specific claims need evidence; separate retirement decision if no maintainable purpose exists.
- Menswear/trend guides: revise useful garment-planning material after reviewing underlying claims, without narrowing menswear to hoodies or asserting every product capability. Preserve slugs.

## Validation

| Check | Result |
| --- | --- |
| npm.cmd run build | Passed, Next 16.2.9 production build |
| ESLint on all 15 changed JS/JSX files | Passed, exit 0 |
| npm.cmd run lint | Failed, exit 1: 559 problems (516 errors, 43 warnings). Output includes osd-admin/.next generated runtime and unchanged admin React components. These files/config were not edited. No blanket fixes or suppressed rules. |
| Local public SEO output | Passed: 47 historical content routes checked; 46 current sitemap pages 200; /blog/ddd 404 outside sitemap. One intended www canonical/title/description per indexable page; no accidental noindex/preview URL; JSON-LD parses and own-site schema URLs align. manufacturing-validation.json |
| Redirect and discovery output | /printing 307 to /services; unknown blog 404; unknown API remains noindex; sitemap/robots/llms references www. No new redirects, routes, fabricated lastmod or private exposure. |
| New content checks | Four exact figures and slogan in server-rendered homepage. Twelve representative non-blog pages 200 with no sourcing/sourced wording in non-script HTML. manufacturing-additional-validation.json |
| Presentation source comparison | JSX tag sequence and inspected class/style/image/size/link/motion attributes unchanged in changed JS/JSX files. This is source evidence only, not a screenshot/layout test. |
| Desktop/mobile screenshots | Unavailable: browser inventory returned no apps/browsers. Wrapping, spacing, animation states and responsive appearance NOT visually verified. |
| Quote/contact | Pages and existing links return 200; form/API logic unchanged. Customer email text changed only. No safe submission/mail rendering/delivery or translation interaction test; no production enquiry sent. |
| Performance | No new measured bottleneck; no optimization. Earlier mobile lab/CWV limitations remain. |
| Recovery/private data | Batch-only reverse patch check passed; private checkpoint/export ignored; no staged files. |

Current live remains distinct: latest read-only probes show apex 308 to www, live services still apex canonical, and public CMS still contains sourcing language. Homepage requests with OAI-SearchBot, Googlebot and bingbot user-agent strings returned 200; these are not real provider-IP verification. Local changes are not deployed.

## SEO and AI-search outcomes

Kept working homepage and product titles; services now “Apparel Manufacturing Services | OSD Apparels”. Existing host fix, sitemap/date logic, redirects, private exclusions and schema structure remain intact. Changed blog index schema description follows manufacturing positioning. Unverified Product capabilities/certification facts remain owner-dependent; parsing success is not factual validation or rich-result eligibility.

Official documentation rechecked:

- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): ordinary index/snippet eligibility and accessible useful text apply; no special AI markup requirement.
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots): search crawler control and training preferences are separate. Neither existing permissions nor security controls changed.
- [Bing AI performance](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/): contextual citation reporting is not a universal ranking or traffic guarantee. Account access remains unavailable.

Meaningful server-rendered content and crawlable links remain; the prior live internal-link audit found no broken destination in its tested set. No route/href edits introduced here. Five graph-isolated paths remain a separate contextual-link proposal. No bot-only content, new AI schema or performance claims. Authenticated indexing, Google-selected canonicals, field CWV, real crawler/CDN logs, preview protections and AI citation samples remain pending.

## Recovery and readiness

**NOT READY FOR RELEASE:** CMS service claims remain pending, screenshots and safe functionality checks unavailable, full repository lint fails, and no review commit exists. Ready for source/content review only.

Batch-only patch: docs/seo/manufacturing-batch.patch

SHA-256: a5d7ee0923d364ff19b240b7fa3e36772b28711159db381bfe297c9caf4d193f

After inspecting later changes and confirming that hash, dry-run:

    git apply --reverse --check docs/seo/manufacturing-batch.patch

Only when rollback is intended and the check passes, apply:

    git apply --reverse docs/seo/manufacturing-batch.patch

This reverses this manufacturing batch to its immediate pre-batch working state, preserving earlier canonical/metadata/alt work. If later hunks overlap, stop and reverse only responsible changes manually. Do not reset/clean or apply the older combined release patch first. Preserve the audit docs and ignored checkpoint. Record an actual commit and reviewed revert reference when packaging is authorized; no production rollback is required because nothing was deployed.

Next batch and owner inputs: [manufacturing-next-batch.md](manufacturing-next-batch.md).
