# Product capability matrix

This is an internal implementation reference for catalogue copy. It is based on `src/data/site.js`, the existing Services and Custom Order pages, current quote validation, and the supplied local image folders.

| Area | Confirmed information used publicly | Buyer-led requirement to review | Owner confirmation still needed |
| --- | --- | --- | --- |
| All non-kids categories | Custom knitted and woven apparel; bulk orders; tech packs, references, drawings or photographs; paid samples and approval before bulk; labels, tags and packaging | Style, fabric/composition, GSM, fit, grading, measurements, colours, construction, trims, packing and requested delivery date | Exact category MOQ, exact fabric/composition availability and production timing |
| Decoration and finishing | Screen print, puff print, DTG, heat transfer, embroidery, garment washing, sublimation where suitable | Artwork, placement and suitable method for the garment/fabric | Any method-specific limitations or test claims |
| Caps | Panels, crown, visor/peak, closures, branding placement and trims are brief topics | Exact cap construction, fabric and logo technique | Available closure types and material range |
| Apparel categories | Category-specific styles and construction topics in `src/data/catalog.js` | Product construction, fabric, measurements, colour and branding | Fixed GSM, specific compositions, wash effects and performance claims |
| Kitchen/workwear/hospital wear | Separate kitchen, workwear and hospital-use brief sections | Functional pockets, closures, use, laundering and identification/branding needs | PPE, medical protection, antimicrobial, flame or waterproof claims (not published) |
| Shipping | OSD-arranged or buyer-appointed shipping can be discussed; DDP may be quoted where available | Delivery address, terms, packing and documentation | Duties/taxes, clearance, transit time and DDP availability by shipment |
| MOQ | Business-wide starting MOQ of 30 pieces is present in existing site data | Category/style-specific minimum | Resolve legacy 50-piece references before publication |
