# OSD Apparels Frontend Handoff

This document explains the current frontend before backend work begins.

## 1. Project Overview

The frontend is a `Next.js 16` app using the App Router.

Current identity:
- `Modern Fashion Manufacturer & Exporter Worldwide`
- focused on `custom apparel manufacturing`
- supports `private label`, `OEM`, `low MOQ`, and `global export` positioning

The frontend is currently content-driven and mostly static. Most business data is stored locally in `src/data/site.js`.

## 2. Tech Stack

- `Next.js 16.2.9`
- `React 19`
- `framer-motion`
- `react-hook-form`
- `@emailjs/browser`
- `lucide-react`
- plain CSS in `src/app/globals.css`

No backend is connected yet.

## 3. Current App Structure

Main app routes inside `src/app`:

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`
- `/certifications`
- `/contact`
- `/custom-order`
- `/factory-tour`
- `/how-it-works`
- `/printing`
- `/privacy-policy`
- `/products`
- `/products/mens`
- `/products/kids`
- `/quote`
- `/quality`
- `/services`
- `/sustainability`
- `/terms`
- `/testimonials`
- `robots.txt`
- `sitemap.xml`

## 4. Shared Frontend Building Blocks

Important shared components:

- `src/components/home/HeroSlider.jsx`
  - homepage hero slider
  - uses `heroSlides` from `site.js`

- `src/components/home/HorizontalProductShowcase.jsx`
  - horizontal scrolling product highlights section on homepage

- `src/components/shared/PageHero.jsx`
  - shared hero for inner pages

- `src/components/shared/SectionIntro.jsx`
  - shared section heading block

- `src/components/shared/ProcessTimeline.jsx`
  - used for process/flow section

- `src/components/forms/QuoteForm.jsx`
  - shared enquiry form
  - reused on quote page and other contact-style sections

- `src/components/products/ProductCard.jsx`
  - shared product card

- `src/components/layout/*`
  - `TopBar`
  - `SiteHeader`
  - `Footer`
  - `WhatsAppFloat`

## 5. Where Content Lives Right Now

Primary content file:

- `src/data/site.js`

This file currently contains:

- contact info
- navigation
- homepage hero slides
- stats
- services
- certifications
- process steps
- testimonials
- blog posts
- product families
- product categories
- generated products
- printing techniques
- trust points
- factory zones

This means the frontend is currently using a local pseudo-CMS structure.

## 6. Product Data Model

Product content is structured in two levels:

1. `productFamilies`
   - `mens`
   - `kids`

2. `categories`
   - each family has category entries like:
   - `formal-shirts`
   - `tshirts`
   - `hoodies`
   - `jackets`
   - `coords`
   - etc.

Generated `products` are created from category data.

Current product object shape:

```js
{
  slug,
  family,
  category,
  title,
  subtitle,
  tone,
  description,
  fabrics
}
```

Backend should eventually replace this with real product/category records.

## 7. Blog Data Model

Blog posts are currently stored in `site.js`.

Current blog post shape:

```js
{
  slug,
  category,
  title,
  excerpt,
  date,
  content: string[]
}
```

The frontend already supports:

- blog listing page
- single blog detail page by slug

Backend/CMS should eventually provide:

- title
- slug
- category
- excerpt
- publish date
- content body
- feature image
- SEO metadata

## 8. Quote / Enquiry Form

Shared form file:

- `src/components/forms/QuoteForm.jsx`

Current fields:

- `name`
- `company`
- `email`
- `whatsapp`
- `country`
- `productCategory`
- `quantity`
- `fabric`
- `decoration`
- `description`
- `referenceImages` (client-side file picker)

### Current Behavior

The form currently uses `EmailJS`.

Environment variables expected:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

If those are missing, the frontend falls back to a fake success delay.

### Important Limitation

The uploaded image files are **not actually uploaded to a backend or storage service**.

Right now:

- user can select image files
- preview is shown
- only file names are included in the submission payload

If backend is added, this is one of the first things that should be upgraded.

## 9. Contact / Lead Capture Flows

Lead capture currently exists in these places:

- `/quote`
- `/contact`
- homepage quote section
- `/custom-order`

All of these rely on the same shared form behavior.

Backend should decide whether all enquiries go into:

- one master enquiry table
- or multiple lead types like:
  - quote enquiry
  - contact enquiry
  - custom order enquiry

Recommended normalized backend shape:

```js
{
  id,
  sourcePage,
  name,
  company,
  email,
  whatsapp,
  country,
  productCategory,
  quantity,
  fabric,
  decoration,
  description,
  referenceFiles,
  status,
  createdAt
}
```

## 10. Media / Image Handling

Frontend image assets currently live in:

- `public/images`

Important current images include:

- `hero-menswear.png`
- `hero-kidswear.png`
- `hero-factory.png`
- `factory-overview.png`
- `hoodie-brown.jpeg`
- `hoodie-gray.jpeg`
- `streetwear.jpeg`
- `osd-logo.png`

These are currently hardcoded into sections and cards.

Backend/CMS should eventually support:

- hero images
- category images
- product gallery images
- testimonial avatars
- page banners
- blog images

## 11. SEO / Metadata

Metadata helper:

- `src/lib/metadata.js`

Current metadata is page-based and static.

Backend should eventually support:

- SEO title
- meta description
- Open Graph image
- canonical URL

especially for:

- blog posts
- product categories
- product pages
- service pages

## 12. Current Frontend Design Direction

The frontend has been redesigned around:

- modern fashion manufacturer feel
- worldwide export credibility
- green and white theme
- image-led sections
- stronger product and factory presentation

Important design decisions already implemented:

- solid color buttons instead of gradients
- reduced heading scale from earlier oversized versions
- horizontal product showcase on homepage
- stronger contact page layout
- richer About page
- more image-driven custom order page

Backend should preserve these structures rather than forcing a generic admin-driven layout.

## 13. Pages That Will Benefit Most From Backend

Highest priority:

1. Quote / contact enquiry handling
2. Product families and category content
3. Blog content management
4. Testimonials
5. Certifications / compliance data
6. Homepage hero and homepage sections

Lower priority:

- static policy pages
- simple info pages like terms/privacy

## 14. Recommended Backend Features

### A. CMS / Admin

Needed for:

- hero slides
- homepage sections
- blog posts
- testimonials
- certifications
- product families
- product categories
- product gallery images

### B. Enquiry API

Needed for:

- quote form submission
- image/file upload
- lead status tracking
- CRM/email forwarding

### C. Media Storage

Needed for:

- uploaded references
- product images
- hero images
- blog feature images

### D. Authentication / Admin Roles

Needed if the client wants:

- internal content updates
- enquiry review dashboard
- lead tracking

## 15. Suggested Backend API Areas

Suggested modules:

- `/api/enquiries`
- `/api/products`
- `/api/product-families`
- `/api/categories`
- `/api/blog-posts`
- `/api/testimonials`
- `/api/certifications`
- `/api/site-settings`
- `/api/media`

## 16. Known Frontend Gaps Before Backend

These are important to know:

- image upload is visual only, not real storage
- much of the site content is still hardcoded
- testimonials are static
- blog posts are static
- product images are reused assets, not mapped from a backend source
- contact/quote forms do not yet persist enquiries in a database

## 17. Suggested Backend Start Order

Recommended implementation order:

1. build real enquiry submission API
2. add file upload/storage for reference images
3. move `site.js` content into backend/CMS
4. add blog management
5. add product family/category management
6. add testimonial and certification management
7. add dashboard/admin panel if needed

## 18. Files Backend Team Should Know First

Most important frontend files:

- `src/data/site.js`
- `src/components/forms/QuoteForm.jsx`
- `src/lib/products.js`
- `src/lib/metadata.js`
- `src/app/page.js`
- `src/app/products/page.js`
- `src/app/contact/page.js`
- `src/app/custom-order/page.js`
- `src/app/quote/page.js`
- `src/app/globals.css`

## 19. Final Summary

The frontend is already strong enough to begin backend integration.

What the backend needs to solve first is not visual design, but:

- real enquiry handling
- real media/file storage
- structured content management
- future-proof product/blog/testimonial data delivery

The current frontend already gives a clear blueprint for:

- pages
- forms
- content structure
- reusable sections
- expected backend data fields

This makes it a good foundation for backend development without needing to redesign the UI first.
