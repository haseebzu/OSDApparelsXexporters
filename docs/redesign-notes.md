# OSD Apparels Redesign Notes

## Swapping Placeholder Images

- Replace the current images in `public/images/` with graded factory, product, and buyer-facing photography.
- Keep the same filenames if you want existing sections to update without code edits.
- For best consistency, prefer warm editorial grading, darker shadows, and similar crop ratios across hero, process, and about sections.

## Reduced Motion

- The process timeline checks `prefers-reduced-motion`.
- When reduced motion is enabled, GSAP scroll scrubbing does not run and the timeline stays static.
- Standard reveal components continue to work as lighter motion layers.

## Adding Blog Posts

- Blog content currently lives in `src/data/site.js`.
- Add new objects to the `blogPosts` array using the same shape:
  - `slug`
  - `category`
  - `title`
  - `excerpt`
  - `date`
  - `content`

## Adding Products

- Product structure also lives in `src/data/site.js`.
- Update `productFamilies` and related product/category entries there to extend the catalog without changing the shared product components.

## Motion Stack

- Framer Motion handles reveal and load transitions.
- GSAP + ScrollTrigger is used only for the signature process timeline behavior to keep the bundle more disciplined.
