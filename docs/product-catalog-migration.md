# Product catalogue migration

## Audit baseline

The site is a Next.js 16 App Router project using local `public/images` assets, Next metadata/canonicals and `src/app/sitemap.js`. Before this change, the product hub primarily linked a menswear and a kidswear family, with standalone hoodie and T-shirt pages; the existing Kids route and its child-category content were retained. `npm run lint` passed before and after the catalogue work. The repository already contained a local `.next` cache and the supplied category-image folders were untracked; neither was deleted or moved.

## Final canonical routes

`/products` is the hub. Category pages are `/products/caps`, `/products/basic-essentials`, `/products/hoodies`, `/products/polo-shirts`, `/products/t-shirts`, `/products/sweatshirts`, `/products/denim`, `/products/jackets`, `/products/activewear-shorts`, `/products/premium-womenswear`, `/products/workwear-uniforms`, `/products/loungewear`, and `/products/kids`.

Market routes are `/markets`, `/markets/usa`, `/markets/uk`, `/markets/europe`, `/markets/canada`, `/markets/australia`, `/markets/france`, and `/markets/italy`.

## Redirects

`/products/mens` permanently redirects to `/products`. The legacy blog route `/blog/source-mens-apparel-pakistan-2026-guide` redirects directly to `/products`, avoiding a redirect chain. The old menswear page remains in the codebase only to avoid deleting user work; its route is protected by the redirect.

## Image mappings

The supplied folders are mapped explicitly in `src/data/catalog.js`: `Caps` (10), `Blanks essentails` (13), `Hoodies` (10), `Polo` (6), `T-shirts` (9), `Sweatshirts` (8), `Denim Products` (16), `Jackets` (9), `Activewear & shorts` (8), `Premium Womenswear` (26), `kictchen & Workwear & hospital wear` (11), and `Jogger&pants` (9). Kids continues to use its existing images and page.

To add a product image, place it in the appropriate existing folder and add its exact filename to that category's `images` list in `src/data/catalog.js`. This is intentionally explicit to prevent category cross-contamination and gives stable ordering and URLs. A deployment rebuild is required for the new image to appear.

## MOQ note

The site contains legacy references to both 30 and 50 pieces. New category copy preserves the business-wide starting MOQ of 30 pieces and explains that category/style specifications can change the applicable minimum. The business should confirm category-specific minimums before replacing any remaining legacy 50-piece references.
