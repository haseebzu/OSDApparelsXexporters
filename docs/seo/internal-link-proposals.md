# Existing article link proposals

22 October 2026. Proposed only; no live CMS records or local fallback content changed. No article links have been implemented in this batch.

## Content source and rendering

`src/app/blog/[slug]/page.js` loads posts through `src/lib/blog-posts.js`. When configured, the loader reads published records from Supabase `blog_posts`; on unavailable/empty data it falls back to three articles in `src/data/site.js`. None of the five requested slugs is in that fallback list. The local `src/lib/blog-seo.js` entries contain metadata overrides, not article bodies. Publicly retrieved bodies for four requested slugs therefore correspond to CMS-backed articles under this source architecture; no authenticated CMS read/write was performed.

The body renderer uses `<p>{paragraph}</p>` for each plain-text paragraph. Raw HTML or Markdown inserted into the CMS would display as text rather than become an anchor. Do not paste the proposals below into the current plain-text field. A later local rendering patch must support explicit, narrowly scoped annotations or structured links safely, without interpreting arbitrary CMS HTML, and preserve the original paragraph text.

There is no established accessible inline article-link style in the inspected CSS: global anchors inherit colour and remove decoration. Existing article buttons are block-like CTAs and cannot be inserted into sentences without layout changes. Do not silently introduce a new link style or reuse a button in a paragraph. Resolve an accessible inline treatment and verify keyboard focus and desktop/mobile wrapping before releasing a link-rendering change.

## Exact proposed annotations

Each proposal wraps only the specified existing phrase, once, leaving all characters and paragraph boundaries unchanged. Revalidate against the current CMS text immediately before implementation: web results include cached observations, not fresh authenticated record snapshots.

| Existing route / source | Paragraph locator | Exact existing anchor | Destination | Reason |
| --- | --- | --- | --- | --- |
| [Kids article](https://www.osdapparels.com/blog/kids-clothing-manufacturing-guide) | First body paragraph, opening phrase | `children's apparel` | `/products/kids` | Relevant category range; avoids attaching the link to unverified certification or quantity claims. |
| [Sourcing article](https://www.osdapparels.com/blog/choose-apparel-sourcing-agent-pakistan) | First body paragraph, immediately after its opening article | `sourcing agent` | `/services` | Connects supplier-selection guidance to the existing sourcing services. |
| [Tech-pack article](https://www.osdapparels.com/blog/how-to-write-a-tech-pack-guide) | Final body paragraph, closing sentence | `Start your project here` | `/custom-order` | Existing call to action leads to garment specifications and development enquiry. |
| [MOQ article](https://www.osdapparels.com/blog/understanding-moq-clothing-manufacturing) | Body paragraph immediately following the sourcing-partner subsection label | `sourcing company` | `/services` | This paragraph discusses sourcing support, making services more relevant than a quantity-specific production promise. |

The fifth requested route is `/blog/custom-hoodie-manufacturing-guide`, intended destination `/products/mens`. The route is recorded in the baseline inventory and metadata overrides, but body retrieval failed in this batch. No exact anchor is proposed from an unseen paragraph. Obtain current public text or a permitted content export first; do not substitute the unrelated local fallback articles.

## Release 1.1 product-page link proposals

24 October 2026. `/products/hoodies` and `/products/t-shirts` are local publication candidates. Do not write these into the CMS without a current record export and approval. Use one contextual link per article; preserve all surrounding text.

| CMS route | Exact anchor to confirm in the current CMS body | Destination | Proposed placement |
| --- | --- | --- | --- |
| `/blog/custom-hoodie-manufacturing-guide` | `custom hoodie manufacturing` | `/products/hoodies` | First occurrence in the introduction or first substantive hoodie-specification paragraph. |
| `/blog/how-to-write-a-tech-pack-guide` | `T-shirt tech pack` | `/products/t-shirts` | First occurrence that specifically discusses a T-shirt brief; if that exact phrase is absent, do not substitute a different anchor without review. |
| `/blog/understanding-moq-clothing-manufacturing` | `minimum order quantity for custom hoodies` | `/products/hoodies` | First occurrence in the buyer-quantity guidance that specifically refers to hoodies; if absent, retain the existing `/services` proposal instead. |

These are exact proposed annotations, not confirmed live-CMS edits. The available audit did not retain the current body text for every proposed phrase, so a CMS export is required before implementation.

## Destination verification and release gate

All four destination route files exist. Web text retrieval succeeded for `/products/kids`, `/services` and `/custom-order` during this batch; `/products/mens` was retrieved during the earlier schema review. Their content fits the proposed destinations. These observations do not certify fresh HTTP status codes or rendered local links. No destinations or source routes were renamed.

Browser inventory returned no apps or browsers. Desktop (1440 x 1600), mobile (390 x 844), keyboard focus, accessible link naming and paragraph-wrapping checks are unavailable. **All link-rendering proposals are unready for release.** The current article renderer and styles are unchanged.

The inspected articles contain existing business/regulatory claims beyond the link task. These proposals do not verify those claims and do not rewrite them. Existing sidebar and navigation links remain intact. No keyword footer lists or repeated anchors were added.
