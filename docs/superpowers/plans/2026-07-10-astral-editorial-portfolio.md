# Astral Editorial Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a classy single-page Vite + React portfolio website for Astral Pools and Plumbing W.L.L. using logo, photography, services, projects, clients, and contact details extracted from `Profile-3.pdf`.

**Architecture:** The app is a static Vite + React single page. Content lives in focused data arrays, visual sections live as React components in `src/App.jsx`, and all styling/motion lives in `src/App.css` with responsive and reduced-motion rules.

**Tech Stack:** Vite, React, JavaScript, CSS, local static image assets extracted from PDF with bundled Python/Pillow and PDF tools.

## Global Constraints

- Use a single-page smooth-scroll site with sections: Home, About, Services, Expertise, Projects, Clients, Contact.
- Use the logo, photography, service content, project references, and contact details from `Profile-3.pdf`.
- Present Astral as a balanced Bahrain-based contracting company covering pools, plumbing, maintenance, fountains, HDPE, MEP, and projects.
- Use deep Astral blue, white/off-white, pool-water cyan, and small yellow highlights.
- Avoid invented client logos.
- Keep animations elegant and purposeful.
- Include reduced-motion support through `prefers-reduced-motion`.
- Verify the Vite build, local rendered site, desktop/mobile layouts, image loading, navigation, and animation behavior.

---

## File Structure

- Create `package.json`: scripts and dependencies for Vite + React.
- Create `index.html`: Vite root shell and metadata.
- Create `src/main.jsx`: React entrypoint.
- Create `src/App.jsx`: all page sections and content data.
- Create `src/App.css`: layout, responsive styles, animation, and reduced-motion support.
- Create `src/assets/`: optimized image assets extracted from the PDF.
- Create `scripts/extract_pdf_assets.py`: repeatable asset extraction and logo crop script.

---

### Task 1: Scaffold App And Extract Assets

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/App.css`
- Create: `scripts/extract_pdf_assets.py`
- Create: `src/assets/*`

**Interfaces:**
- Produces: static asset files referenced by `/src/assets/<filename>`.
- Produces: npm scripts `dev`, `build`, and `preview`.

- [ ] **Step 1: Create the Vite + React project files**

Create `package.json`:

```json
{
  "name": "astral-editorial-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {}
}
```

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Astral Pools and Plumbing W.L.L. provides swimming pool, plumbing, HDPE, MEP, water-feature, and maintenance solutions across Bahrain."
    />
    <title>Astral Pools and Plumbing W.L.L.</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Create `src/main.jsx`:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Create minimal placeholders for `src/App.jsx` and `src/App.css` so the first build can run:

```jsx
export default function App() {
  return <main>Astral Pools and Plumbing W.L.L.</main>;
}
```

```css
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
}
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
npm install
```

Expected: `node_modules` and `package-lock.json` are created without dependency errors.

- [ ] **Step 3: Add the PDF asset extraction script**

Create `scripts/extract_pdf_assets.py`:

```python
from pathlib import Path
from PIL import Image
from pypdf import PdfReader
import subprocess
import shutil

ROOT = Path(__file__).resolve().parents[1]
PDF = Path("/Users/asifkhan/Downloads/Profile-3.pdf")
ASSETS = ROOT / "src" / "assets"
TMP = Path("/private/tmp/astral_pdf_assets_build")
PDFTOPPM = Path("/Users/asifkhan/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pdftoppm")

ASSETS.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)

reader = PdfReader(str(PDF))
for page_index, page in enumerate(reader.pages, start=1):
    for image_index, image in enumerate(getattr(page, "images", []), start=1):
        name = f"pdf-page-{page_index:02d}-image-{image_index:02d}{Path(image.name).suffix or '.jpg'}"
        raw_path = TMP / name
        raw_path.write_bytes(image.data)

project_map = {
    "pdf-page-01-image-01.jpg": "hero-pool.jpg",
    "pdf-page-08-image-01.jpg": "hdpe-work.jpg",
    "pdf-page-09-image-01.jpg": "pool-maintenance.jpg",
    "pdf-page-10-image-01.jpg": "equipment-room.jpg",
    "pdf-page-12-image-01.jpg": "site-service.jpg",
    "pdf-page-14-image-01.jpg": "project-marassi-park.jpg",
    "pdf-page-14-image-02.jpg": "project-marassi-shore.jpg",
    "pdf-page-14-image-03.jpg": "project-dana-mall.jpg",
    "pdf-page-14-image-04.jpg": "project-iraq-embassy.jpg",
    "pdf-page-15-image-01.jpg": "project-kingdom-mall.jpg",
    "pdf-page-15-image-02.jpg": "project-bahrain-kuwait-embassy.jpg",
    "pdf-page-15-image-03.jpg": "project-riffa-views.jpg",
    "pdf-page-15-image-04.jpg": "project-youth-sports.jpg",
    "pdf-page-16-image-01.jpg": "contact-pool.jpg",
}

for source_name, target_name in project_map.items():
    source = TMP / source_name
    if source.exists():
        with Image.open(source) as image:
            image = image.convert("RGB")
            image.thumbnail((1800, 1400))
            image.save(ASSETS / target_name, quality=88, optimize=True)

if PDFTOPPM.exists():
    subprocess.run(
        [str(PDFTOPPM), "-f", "1", "-l", "1", "-png", "-r", "220", str(PDF), str(TMP / "render")],
        check=True,
    )
    cover = TMP / "render-01.png"
    with Image.open(cover) as image:
        image = image.convert("RGBA")
        width, height = image.size
        logo = image.crop((int(width * 0.36), int(height * 0.04), int(width * 0.64), int(height * 0.14)))
        logo.save(ASSETS / "astral-logo.png", optimize=True)

print(f"Extracted Astral website assets to {ASSETS}")
```

- [ ] **Step 4: Run the asset extraction script**

Run:

```bash
/Users/asifkhan/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/extract_pdf_assets.py
```

Expected: `src/assets/astral-logo.png`, `hero-pool.jpg`, contact image, support images, and project images exist.

- [ ] **Step 5: Verify the scaffold builds**

Run:

```bash
npm run build
```

Expected: Vite build completes and creates `dist/`.

- [ ] **Step 6: Commit scaffold and assets**

Run:

```bash
git add package.json package-lock.json index.html src scripts
git commit -m "feat: scaffold Astral portfolio app"
```

Expected: one commit containing app scaffold and extracted assets.

---

### Task 2: Build Editorial Portfolio Content And Sections

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: asset files from `src/assets`.
- Produces: section IDs `home`, `about`, `services`, `expertise`, `projects`, `clients`, `contact`.

- [ ] **Step 1: Replace `src/App.jsx` with the complete section structure**

Use imports for images and icons, define arrays for nav items, services, expertise, projects, clients, and render semantic sections with stable IDs.

```jsx
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import logo from './assets/astral-logo.png';
import heroPool from './assets/hero-pool.jpg';
import hdpeWork from './assets/hdpe-work.jpg';
import poolMaintenance from './assets/pool-maintenance.jpg';
import equipmentRoom from './assets/equipment-room.jpg';
import siteService from './assets/site-service.jpg';
import contactPool from './assets/contact-pool.jpg';
import marassiPark from './assets/project-marassi-park.jpg';
import marassiShore from './assets/project-marassi-shore.jpg';
import danaMall from './assets/project-dana-mall.jpg';
import iraqEmbassy from './assets/project-iraq-embassy.jpg';
import kingdomMall from './assets/project-kingdom-mall.jpg';
import bahrainKuwait from './assets/project-bahrain-kuwait-embassy.jpg';
import riffaViews from './assets/project-riffa-views.jpg';
import youthSports from './assets/project-youth-sports.jpg';

const navItems = ['About', 'Services', 'Expertise', 'Projects', 'Clients', 'Contact'];

const services = [
  'Swimming pool construction and maintenance',
  'Plumbing contracting',
  'Boiler maintenance, supply and installation',
  'Heater and chiller systems for swimming pools',
  'Sauna and steam',
  'Fountain and jacuzzi',
  'Electrical and irrigation',
];

const expertise = [
  {
    title: 'Civil Works',
    icon: Building2,
    text: 'Swimming pools, balance tanks, water-feature structures, reinforced concrete, waterproofing, tiling, and architectural finishes.',
  },
  {
    title: 'HDPE & Mechanical',
    icon: Wrench,
    text: 'Butt fusion, electrofusion, pressure pipelines, pump rooms, filtration systems, flushing, testing, and commissioning.',
  },
  {
    title: 'Electrical Systems',
    icon: Zap,
    text: 'Pump power supply, underwater lighting, control panels, and automation systems for pools and water features.',
  },
  {
    title: 'Plumbing Networks',
    icon: Droplets,
    text: 'HDPE and UPVC water supply, drainage, filtration connections, valves, fittings, rainwater harvesting, and irrigation.',
  },
  {
    title: 'Quality & Safety',
    icon: ShieldCheck,
    text: 'Durable materials, proper waterproofing, safe electrical and plumbing practices, and industry-guideline compliance.',
  },
  {
    title: 'Maintenance Support',
    icon: CheckCircle2,
    text: 'Cleaning, servicing, water treatment, equipment inspection, repair, and annual maintenance contracts.',
  },
];

const projects = [
  ['Marassi Park', 'Heat cool units', marassiPark],
  ['Marassi Shore', 'Swimming pool', marassiShore],
  ['Iraq Embassy Residence', 'Swimming pool', iraqEmbassy],
  ['Dana Mall Phase 2', 'Plumbing works', danaMall],
  ['Kingdom Mall', 'Fountain', kingdomMall],
  ['Bahrain Kuwait Embassy', 'Swimming pool', bahrainKuwait],
  ['Park 3, Riffa Views', 'Swimming pool', riffaViews],
  ['Youth & Sports, Busateen', 'Swimming pool / fountain', youthSports],
];

const clients = [
  'Eagle Hills',
  'MOM',
  'Kingdom Mall',
  'Youth & Sports',
  'Bahrain Kuwait Embassy',
  'Riffa Views',
  'Residential Buildings',
  'Commercial Residences',
  'Property Developers',
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Astral home">
          <img src={logo} alt="Astral Pools and Plumbing logo" />
          <span>Astral</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img className="hero-bg" src={heroPool} alt="Luxury swimming pool with waterfall beside a modern villa" />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <img className="hero-logo" src={logo} alt="" aria-hidden="true" />
            <p className="eyebrow">Committed to honesty and integrity</p>
            <h1>Astral Pools and Plumbing W.L.L.</h1>
            <p>
              Swimming pool, water-feature, plumbing, HDPE, MEP, and maintenance solutions delivered across Bahrain.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowRight size={18} />
              </a>
              <a className="button ghost" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <SectionHeading
            eyebrow="About Astral"
            title="Built for refined pool experiences and reliable contracting work."
            text="Established on 09 September 2016, Astral Pools and Plumbing W.L.L. is a Bahrain-based specialized contracting company delivering integrated civil, mechanical, electrical, and plumbing solutions."
          />
          <div className="stats reveal">
            {['Established 2016', 'Bahrain-based', 'Pools, HDPE and MEP', 'Residential, commercial and hospitality'].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <SectionHeading
            eyebrow="Services"
            title="A balanced portfolio of pool, plumbing, maintenance, and water-feature services."
            text="From elegant pool construction to technical infrastructure support, Astral brings design attention and field discipline to every engagement."
          />
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service} style={{ '--delay': `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="section expertise">
          <div className="split">
            <div>
              <SectionHeading
                eyebrow="Expertise"
                title="Technical capability behind the finish."
                text="Astral combines civil works, HDPE piping, electrical systems, plumbing networks, and maintenance support into one coordinated delivery model."
              />
              <div className="expertise-grid">
                {expertise.map(({ title, text, icon: Icon }) => (
                  <article className="expertise-card reveal" key={title}>
                    <Icon size={22} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="image-stack reveal">
              <img src={hdpeWork} alt="Astral technician working on pool and piping installation" />
              <img src={equipmentRoom} alt="Pool pump and filtration equipment" />
              <img src={siteService} alt="Pool maintenance technician at work" />
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across pools, fountains, plumbing, and cooling systems."
            text="A visual look at the project range represented in Astral's company profile."
          />
          <div className="project-grid">
            {projects.map(([name, type, image]) => (
              <article className="project-card reveal" key={name}>
                <img src={image} alt={`${name} ${type}`} />
                <div>
                  <p>{type}</p>
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="clients" className="section clients">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by residential, commercial, and public-facing project teams."
            text="Astral values long-term relationships built on trust, performance, transparent communication, and reliable after-sales support."
          />
          <div className="client-list reveal">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <img src={contactPool} alt="Indoor pool with refined architectural finishes" />
          <div className="contact-panel reveal">
            <Sparkles size={24} />
            <h2>Creating exceptional pool experiences for you.</h2>
            <p>P.O. Box 82365 | C.R. 151782-1 | Flat 14 | Bldg. 446P | Road 1206 | Block 712 | Al Ramli | Kingdom of Bahrain</p>
            <a href="tel:+97377088685"><Phone size={18} /> +973 7708 8685</a>
            <a href="tel:+97339856743"><Phone size={18} /> +973 39856743 / 33664081</a>
            <a href="mailto:astralpoolsplumbing@gmail.com"><Mail size={18} /> astralpoolsplumbing@gmail.com</a>
            <span><MapPin size={18} /> Kingdom of Bahrain</span>
          </div>
        </section>
      </main>
    </>
  );
}
```

- [ ] **Step 2: Run the build to catch import or JSX errors**

Run:

```bash
npm run build
```

Expected: Vite build completes without missing asset or JSX errors.

- [ ] **Step 3: Commit content structure**

Run:

```bash
git add src/App.jsx
git commit -m "feat: build Astral portfolio content"
```

Expected: one commit containing the React section structure.

---

### Task 3: Add Editorial Styling, Motion, And Verification

**Files:**
- Modify: `src/App.css`

**Interfaces:**
- Consumes: class names from `src/App.jsx`.
- Produces: polished desktop/mobile layout, animation, transitions, smooth scrolling, and reduced-motion behavior.

- [ ] **Step 1: Replace `src/App.css` with production styling**

Add CSS for brand colors, header, hero, sections, service cards, expertise layout, projects, clients, contact panel, responsive breakpoints, reveal animations, hover states, and reduced-motion.

```css
:root {
  color: #10223d;
  background: #f7fbfc;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-synthesis: none;
  text-rendering: geometricPrecision;
  --blue: #263d8f;
  --blue-deep: #14275f;
  --cyan: #8fd5ef;
  --aqua: #dff7fb;
  --yellow: #dce800;
  --ink: #10223d;
  --muted: #65768d;
  --paper: #ffffff;
  --soft: #eef7f8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px clamp(20px, 5vw, 70px);
  color: white;
  background: linear-gradient(180deg, rgba(7, 20, 50, 0.65), rgba(7, 20, 50, 0));
  backdrop-filter: blur(10px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0;
}

.brand img {
  width: 54px;
  height: 34px;
  object-fit: contain;
}

.site-header nav {
  display: flex;
  align-items: center;
  gap: clamp(12px, 2vw, 26px);
  font-size: 0.86rem;
  font-weight: 700;
  text-transform: uppercase;
}

.site-header nav a {
  opacity: 0.82;
  transition: opacity 200ms ease, color 200ms ease;
}

.site-header nav a:hover {
  color: var(--yellow);
  opacity: 1;
}

.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: end;
  padding: 130px clamp(22px, 6vw, 86px) 88px;
  color: white;
  isolation: isolate;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: heroDrift 18s ease-in-out infinite alternate;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(8, 22, 52, 0.78), rgba(8, 22, 52, 0.34) 48%, rgba(8, 22, 52, 0.12)), linear-gradient(0deg, rgba(8, 22, 52, 0.38), transparent 45%);
}

.hero-content {
  max-width: 760px;
}

.hero-logo {
  width: min(260px, 58vw);
  margin-bottom: 24px;
}

.eyebrow,
.section-heading span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--yellow);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

.hero h1,
.section-heading h2,
.contact-panel h2 {
  margin: 0;
  letter-spacing: 0;
  line-height: 0.96;
}

.hero h1 {
  max-width: 780px;
  font-size: clamp(3.1rem, 8vw, 7.8rem);
}

.hero p:not(.eyebrow) {
  max-width: 650px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(1.05rem, 2vw, 1.36rem);
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.65);
  padding: 13px 20px;
  font-weight: 800;
  transition: transform 200ms ease, background 200ms ease, color 200ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  border-color: var(--yellow);
  background: var(--yellow);
  color: var(--blue-deep);
}

.section {
  padding: clamp(76px, 10vw, 138px) clamp(22px, 6vw, 86px);
}

.section-heading {
  max-width: 860px;
  margin-bottom: 42px;
}

.section-heading h2,
.contact-panel h2 {
  color: var(--blue-deep);
  font-size: clamp(2rem, 5vw, 4.8rem);
}

.section-heading p {
  max-width: 760px;
  margin: 22px 0 0;
  color: var(--muted);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.75;
}

.about {
  background: var(--paper);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: #d7e8ed;
}

.stats div {
  min-height: 132px;
  display: flex;
  align-items: end;
  padding: 22px;
  background: var(--soft);
  color: var(--blue-deep);
  font-size: clamp(1rem, 1.5vw, 1.45rem);
  font-weight: 800;
}

.services {
  background: #f5fbfc;
}

.service-grid,
.expertise-grid,
.project-grid {
  display: grid;
  gap: 18px;
}

.service-grid {
  grid-template-columns: repeat(7, minmax(180px, 1fr));
  overflow-x: auto;
  padding-bottom: 12px;
}

.service-card {
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 4px solid var(--yellow);
  padding: 22px;
  background: white;
  box-shadow: 0 20px 70px rgba(20, 39, 95, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 90px rgba(20, 39, 95, 0.16);
}

.service-card span {
  color: var(--cyan);
  font-weight: 900;
}

.service-card h3,
.expertise-card h3,
.project-card h3 {
  margin: 0;
  color: var(--blue-deep);
  font-size: 1.18rem;
  line-height: 1.24;
}

.expertise {
  background: var(--blue-deep);
}

.expertise .section-heading h2,
.expertise .section-heading p {
  color: white;
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: clamp(30px, 5vw, 70px);
  align-items: start;
}

.expertise-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.expertise-card {
  min-height: 190px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.expertise-card svg {
  color: var(--yellow);
}

.expertise-card h3 {
  margin-top: 22px;
  color: white;
}

.expertise-card p {
  margin: 12px 0 0;
  line-height: 1.62;
}

.image-stack {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 14px;
}

.image-stack img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.image-stack img:nth-child(2) {
  margin-left: auto;
  width: 72%;
}

.projects {
  background: var(--paper);
}

.project-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.project-card {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  background: var(--blue-deep);
  color: white;
}

.project-card img {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  opacity: 0.86;
  transition: transform 500ms ease, opacity 300ms ease;
}

.project-card:hover img {
  transform: scale(1.06);
  opacity: 0.66;
}

.project-card div {
  position: absolute;
  inset: auto 0 0;
  padding: 22px;
  background: linear-gradient(0deg, rgba(7, 20, 50, 0.82), rgba(7, 20, 50, 0));
}

.project-card p {
  margin: 0 0 7px;
  color: var(--yellow);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.project-card h3 {
  color: white;
}

.clients {
  background: var(--soft);
}

.client-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.client-list span {
  border: 1px solid #cfe1e7;
  background: white;
  padding: 14px 18px;
  color: var(--blue-deep);
  font-weight: 800;
}

.contact {
  min-height: 92svh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.72fr);
  background: var(--blue);
  color: white;
}

.contact > img {
  width: 100%;
  height: 100%;
  min-height: 620px;
  object-fit: cover;
}

.contact-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: clamp(34px, 5vw, 72px);
}

.contact-panel svg {
  color: var(--yellow);
  flex: 0 0 auto;
}

.contact-panel h2 {
  color: white;
}

.contact-panel p,
.contact-panel a,
.contact-panel span {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.6;
}

.contact-panel a:hover {
  color: var(--yellow);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  animation: revealUp 800ms ease forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroDrift {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.055) translate3d(-1.5%, -1%, 0);
  }
}

@media (max-width: 1080px) {
  .site-header {
    align-items: flex-start;
  }

  .site-header nav {
    max-width: 62vw;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .stats,
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .split,
  .contact {
    grid-template-columns: 1fr;
  }

  .image-stack {
    position: static;
    grid-template-columns: repeat(3, 1fr);
  }

  .image-stack img:nth-child(2) {
    width: 100%;
  }

  .contact > img {
    min-height: 420px;
  }
}

@media (max-width: 720px) {
  .site-header {
    padding: 14px 18px;
  }

  .brand span {
    display: none;
  }

  .site-header nav {
    gap: 9px;
    font-size: 0.68rem;
  }

  .hero {
    min-height: 94svh;
    padding: 112px 20px 54px;
  }

  .hero h1 {
    font-size: clamp(2.6rem, 15vw, 4.6rem);
  }

  .section {
    padding: 68px 20px;
  }

  .stats,
  .expertise-grid,
  .project-grid,
  .image-stack {
    grid-template-columns: 1fr;
  }

  .stats div {
    min-height: 96px;
  }

  .service-grid {
    grid-template-columns: 1fr;
    overflow: visible;
  }

  .service-card {
    min-height: 148px;
  }

  .contact > img {
    min-height: 320px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 2: Run the production build**

Run:

```bash
npm run build
```

Expected: Vite build completes.

- [ ] **Step 3: Start the local dev server**

Run:

```bash
npm run dev
```

Expected: Vite serves the site on a local URL such as `http://127.0.0.1:5173/`.

- [ ] **Step 4: Browser-check desktop and mobile**

Open the local site. Verify:

- Hero image and logo render.
- Header links scroll to the correct sections.
- Services and expertise are readable.
- Project cards show captions and hover transitions.
- Contact links are present.
- Desktop viewport has no overlapping text.
- Mobile viewport has no overlapping text.
- Animations are subtle and not blocking content.

- [ ] **Step 5: Commit styling and verified site**

Run:

```bash
git add src/App.css
git commit -m "feat: style Astral editorial portfolio"
```

Expected: one commit containing final styling.

