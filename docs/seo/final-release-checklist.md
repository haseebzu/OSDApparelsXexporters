# Final release checklist — Products and Markets

Prepared locally on 12 November 2026. This checklist does not authorize a push or deployment.

## Required Git safety steps

The worktree contained earlier uncommitted changes before this release pass. Do not commit them together.

1. Create `backup/pre-final-release-2026-11-12` and tag `pre-final-release-2026-11-12` at the current `HEAD`.
2. Review and stage only the release-area files for separate commits: market content/routing; product routing and MOQ; claims corrections; documentation.
3. For any release commit, rollback with `git revert <commit-sha>`. Hosting rollback is a redeploy of the immediately preceding verified deployment.

## Preview test — 15 minutes

- Check `/`, `/products`, `/products/hoodies`, `/products/kids`, `/products/mens`, `/markets` and all seven `/markets/*` pages.
- Open the RFQ without submitting it. Confirm product or destination is preselected and editable.
- Open Cal.com from desktop and mobile navigation; confirm the plain booking link works if the popup is blocked.
- Check the six retired blog routes, `/export-markets`, a nonexistent URL and the language selector.
- Confirm MOQ reads “50 pieces per style/design”, or “50 sets” only for matching sets.

## Before production

- Confirm `SHOW_DRAFT_PAGES` is unset.
- Run `npm run build`, `npm run lint` and `git diff --check` in a normal local terminal.
- Check that no `localhost` or preview URL occurs in metadata, canonical tags, sitemap or `robots.txt`.
- Confirm all production canonical URLs use `https://www.osdapparels.com`.

## Same-day production checks

- Verify apex-to-`www` redirect, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, six retired-blog redirects and `/export-markets` (404 or redirect).
- Check canonicals, headings, market official-source links, RFQ availability, Cal.com booking and every MOQ statement.
- Resubmit the sitemap in Search Console. Request indexing gradually: `/markets`, USA, UK, Europe, Canada, Australia, `/products`, then remaining canonical pages.

## Monitoring and re-verification

Review on days 1, 3, 7, 14 and 28: country impressions, indexed pages, canonical warnings, “Crawled – currently not indexed”, non-brand queries and qualified RFQs by country/product.

Re-check the official market sources monthly before changing `reviewedOn`: FTC/CPSC/CBP (US); GOV.UK textile and DCTS guidance; EU GSP, TARIC and Regulation 1007/2011; Competition Bureau/CBSA/Finance Canada; Product Safety Australia/ABF; DGCCRF, Agenzia delle Dogane and the relevant EU sources.

## Owner decisions still required

- Provide proof before reinstating any GOTS, SEDEX, SMETA, ISO 9001, OEKO-TEX or BSCI claim.
- Confirm whether static named testimonials and the “4.8/5” rating are real, permitted and current; otherwise remove them before production.
- Confirm whether OSD is REX-registered and, if so, supply the registration number. The release copy makes no REX-registration claim.
- Confirm any lead time, capacity, response-time, audit or sustainability performance statement before it is published.
