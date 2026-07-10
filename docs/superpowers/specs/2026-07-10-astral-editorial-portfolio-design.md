# Astral Editorial Portfolio Design

Date: 2026-07-10

## Goal

Build a classy single-page Vite + React portfolio website for Astral Pools and Plumbing W.L.L. using the logo, photography, service content, project references, and contact details from `Profile-3.pdf`.

The site should present Astral as a balanced Bahrain-based contracting company: premium swimming pool and water-feature craftsmanship, backed by serious plumbing, HDPE, MEP, maintenance, and infrastructure capability.

## Source Material

The PDF profile contains:

- Company name: Astral Pools and Plumbing W.L.L.
- Tagline: Committed to honesty and integrity
- Company overview: Bahrain-based specialized contracting company established on 09 September 2016
- Core services: swimming pool construction and maintenance, plumbing contracting, boiler maintenance, swimming pool heater and chiller systems, sauna and steam, fountain and jacuzzi, electrical and irrigation
- Expertise: civil works, HDPE/mechanical works, electrical works, plumbing works, equipment and technology, quality and safety, maintenance and support
- Clients: Eagle Hills, MOM, Kingdom Mall, Youth & Sports, Bahrain Kuwait Embassy, Riffa Views, residential buildings, commercial residences, property developers
- Projects: Marassi Park, Marassi Shore, Iraq Embassy Residence, Dana Mall Phase 2, Kingdom Mall, Bahrain Kuwait Embassy, Park 3 Riffa Views, Youth & Sports Busateen
- Contact: P.O. Box 82365, C.R. 151782-1, Flat 14, Building 446P, Road 1206, Block 712, Al Ramli, Kingdom of Bahrain, Tel +973 7708 8685, Mob +973 39856743 / 33664081, astralpoolsplumbing@gmail.com

## Visual Direction

The design will be an editorial portfolio, not a generic brochure page. It should feel polished, architectural, and trustworthy.

Use:

- Deep Astral blue as the primary brand color
- White and soft off-white surfaces for readability
- Pool-water cyan accents
- Small yellow highlights inspired by the PDF bullets
- Large, confident photography from the PDF
- Clean typography with strong hierarchy and generous spacing

Avoid:

- Overly busy decorative effects
- Generic marketing hero cards
- One-note blue-only styling
- Excessive animation
- Certificate-heavy presentation on the main page

## Page Structure

The site is a single page with smooth-scroll navigation:

1. Home
2. About
3. Services
4. Expertise
5. Projects
6. Clients
7. Contact

## Sections

### Home

Use a strong pool image from the PDF as the visual anchor. Include the Astral logo, company name, tagline, and a concise positioning line:

Astral Pools and Plumbing W.L.L. delivers swimming pool, water-feature, plumbing, HDPE, MEP, and maintenance solutions across Bahrain.

Primary actions:

- View Projects
- Contact Us

### About

Summarize Astral as a Bahrain-based specialized contracting company established in 2016. Keep the text concise and editorial, emphasizing quality workmanship, technical expertise, and timely project delivery.

Include a small fact row:

- Established 2016
- Bahrain-based
- Pools, plumbing, HDPE and MEP
- Residential, commercial and hospitality projects

### Services

Show the seven core services from the PDF in a polished grid or banded layout:

- Swimming pool construction and maintenance
- Plumbing contracting
- Boiler maintenance, supply and installation
- Heater and chiller systems for swimming pools
- Sauna and steam
- Fountain and jacuzzi
- Electrical and irrigation

### Expertise

Use a more technical section to prove capability without making the page feel like a manual. Cover:

- Civil works: pools, balance tanks, water-feature structures, concrete works, waterproofing, tiling and finishes
- HDPE/mechanical: butt fusion, electrofusion, pressure pipelines, pump rooms, filtration and commissioning
- Electrical: pumps, underwater lighting, control panels and automation
- Plumbing: HDPE and UPVC networks, valves, fittings, drainage, rainwater harvesting and irrigation
- Quality and safety: tested materials, proper waterproofing, safe electrical and plumbing practices
- Maintenance: cleaning, servicing, water treatment, equipment inspection, repair and AMC support

### Projects

Make this the visual centerpiece. Use extracted project images from the PDF, especially the wide project images from pages 14 and 15. Present project cards with subtle image movement and caption reveals.

Featured projects:

- Marassi Park: heat cool units
- Marassi Shore: swimming pool
- Iraq Embassy Residence: swimming pool
- Dana Mall Phase 2: plumbing works
- Kingdom Mall: fountain
- Bahrain Kuwait Embassy: swimming pool
- Park 3, Riffa Views: swimming pool
- Youth & Sports, Busateen: swimming pool / fountain

### Clients

Use a restrained text-based client panel. Include the client names and client types from the PDF. Do not invent client logos.

### Contact

End with a strong visual contact section using the contact page imagery or a related pool image. Include full address, telephone, mobile numbers, and email. Provide direct mail and phone links.

## Asset Handling

Extract assets from `Profile-3.pdf` into the site source. Use:

- A logo crop from the rendered PDF cover or contact page
- The cover pool image for the hero
- Project images from pages 14 and 15 for the gallery
- Supporting service/expertise images from pages 8 through 12 where useful

Optimize assets for web use and use descriptive filenames.

## Motion And Interaction

Animations should be elegant and purposeful:

- Sticky header transitions from transparent to solid while scrolling
- Smooth-scroll navigation
- Section reveal animations when content enters the viewport
- Staggered service and expertise reveals
- Hero image slow drift or scale
- Project hover zoom and caption reveal
- Button hover transitions
- Reduced-motion support through `prefers-reduced-motion`

## Responsive Behavior

Desktop should feel spacious and editorial. Mobile should keep the same content but reduce density:

- Stack sections cleanly
- Use a compact sticky header
- Keep CTAs thumb-friendly
- Ensure project cards maintain stable aspect ratios
- Avoid text overlapping images or buttons

## Technical Direction

Use Vite + React with a lightweight implementation:

- React components organized by section
- Plain CSS or CSS modules for polished styling
- Local static assets in the project
- No backend required
- No CMS required

## Verification

Before completion:

- Run the Vite build
- Open the local dev site
- Check desktop and mobile layouts
- Verify images load correctly
- Verify navigation scrolls to the correct sections
- Verify animations are subtle and do not obscure content
- Verify reduced-motion CSS exists

