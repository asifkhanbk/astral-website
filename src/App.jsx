import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Eye,
  HeartHandshake,
  Mail,
  Menu,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import logo from './assets/astral-logo-transparent.png';
import heroPool from './assets/hero-premium-pool.webp';
import equipmentRoom from './assets/equipment-room.webp';
import siteService from './assets/site-service.webp';
import footerPool from './assets/footer-premium-pool.webp';
import marassiPark from './assets/project-marassi-park.webp';
import marassiShore from './assets/project-marassi-shore-night-pool.jpg';
import danaMall from './assets/project-dana-mall.webp';
import iraqEmbassy from './assets/project-iraq-embassy.webp';
import kingdomMall from './assets/project-kingdom-mall-water-feature.jpg';
import bahrainKuwait from './assets/project-bahrain-kuwait-embassy-profile.webp';
import riffaViews from './assets/project-riffa-views-pool-work.jpg';
import youthSports from './assets/project-youth-sports-muharraq.jpg';
import protoAmwaj from './assets/project-proto-amwaj-page4-last.jpg';
import seefTerrasse from './assets/project-seef-terrasse.webp';
import oneOnlyResort from './assets/project-one-only-resort.webp';
import duratAlBahrain from './assets/project-durat-al-bahrain-mona-almoayyed.jpg';
import beaconPrivateSchool from './assets/project-beacon-private-school.jpg';
import retailPump from './assets/retail-pump.webp';
import retailFilter from './assets/retail-filter.webp';
import retailChiller from './assets/retail-chiller.png';
import retailPoolHeater from './assets/retail-pool-heater.png';
import retailUnderwaterLight from './assets/retail-underwater-light.webp';
import retailSsLadder from './assets/retail-ss-ladder.png';
import retailDosingSystem from './assets/retail-dosing-system.png';
import retailPoolAccessories from './assets/retail-pool-accessories.webp';
import retailFloatingHose from './assets/retail-floating-hose.png';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Structure', id: 'team' },
  { label: 'Contact', id: 'contact' },
];

const navSectionGroups = [
  { navId: 'about', sectionIds: ['about'] },
  { navId: 'services', sectionIds: ['services', 'products', 'expertise', 'assurance', 'why-us'] },
  { navId: 'projects', sectionIds: ['projects', 'clients'] },
  { navId: 'team', sectionIds: ['team'] },
  { navId: 'contact', sectionIds: ['closing-note', 'contact'] },
];

const services = [
  ['Pools', 'Swimming pool construction and maintenance'],
  ['Plumbing', 'Plumbing, water supply and drainage'],
  ['Systems', 'Boiler maintenance, supply and installation'],
  ['Climate', 'Heater and chiller systems for swimming pools'],
  ['Wellness', 'Sauna and steam rooms'],
  ['Water Features', 'Water features and jacuzzi'],
  ['Infrastructure', 'Electrical and irrigation'],
];

const products = [
  {
    title: 'Pool Pumps',
    group: 'Circulation',
    image: retailPump,
    note: 'Reliable supply and support',
  },
  {
    title: 'Filters',
    group: 'Filtration',
    image: retailFilter,
    note: 'Selected to suit each pool',
  },
  {
    title: 'Chillers',
    group: 'Heating & Cooling',
    image: retailChiller,
    note: 'For comfortable pool water',
  },
  {
    title: 'Pool Heaters',
    group: 'Heating',
    image: retailPoolHeater,
    note: 'Residential and commercial use',
  },
  {
    title: 'Underwater Lights',
    group: 'Lighting',
    image: retailUnderwaterLight,
    note: 'Safe and refined lighting',
  },
  {
    title: 'Dosing Systems',
    group: 'Water Treatment',
    image: retailDosingSystem,
    note: 'For steady water care',
  },
  {
    title: 'SS Ladders',
    group: 'Access',
    image: retailSsLadder,
    note: 'Durable pool access fittings',
  },
  {
    title: 'Pool Accessories',
    group: 'Cleaning & Care',
    image: retailPoolAccessories,
    note: 'Daily care essentials',
  },
  {
    title: 'Floating Hose',
    group: 'Accessories',
    image: retailFloatingHose,
    note: 'Useful maintenance support',
  },
];

const retailEssentials = [
  'Tiles',
  'Mosaic finishes',
  'Valves and fittings',
  'Pool covers',
  'Cleaning equipment',
  'Wellness equipment',
];

const expertise = [
  {
    title: 'Civil Works',
    icon: Building2,
    text: 'Pool structures, balance tanks, water features, waterproofing, tiling, and related finishing works.',
  },
  {
    title: 'HDPE & Mechanical',
    icon: Wrench,
    text: 'HDPE piping, pump rooms, filtration systems, pressure lines, testing, and commissioning.',
  },
  {
    title: 'Electrical Systems',
    icon: Zap,
    text: 'Pump power supply, underwater lighting, control panels, and automation systems for pools and water features.',
  },
  {
    title: 'Plumbing Networks',
    icon: Droplets,
    text: 'Water supply, drainage, CDP, filtration connections, valves, fittings, rainwater harvesting, and irrigation.',
  },
];

const values = [
  {
    title: 'Vision',
    icon: Eye,
    text: 'To become a trusted name in the Kingdom of Bahrain for innovative and high quality swimming pool solutions.',
  },
  {
    title: 'Mission',
    icon: Target,
    text: 'To deliver reliable pool and plumbing solutions with careful planning, quality materials, and dependable service.',
  },
  {
    title: 'Core Values',
    icon: HeartHandshake,
    text: 'Quality, integrity, clear communication, and customer satisfaction guide our work from planning to after-sales support.',
  },
];

const whyChooseUs = [
  'Experienced and dedicated team',
  'Customized design approach',
  'High-quality materials and equipment',
  'Timely project execution',
  'Transparent communication',
  'Reliable after-sales support',
];

const assurance = [
  {
    title: 'Quality & Safety',
    icon: ShieldCheck,
    image: equipmentRoom,
    intro: 'We focus on safe working practices, suitable materials, and proper checks before handover.',
    points: [
      'Tested and durable materials',
      'Proper waterproofing systems',
      'Safe electrical and plumbing practices',
      'Compliance with industry guidelines',
    ],
  },
  {
    title: 'Maintenance & Support',
    icon: CheckCircle2,
    image: siteService,
    intro: 'We help clients keep pools running well through regular servicing, inspections, and practical support.',
    points: [
      'Regular cleaning and servicing',
      'Water treatment and balancing',
      'Equipment inspection and repair',
      'Annual Maintenance Contracts (AMC)',
    ],
  },
];

const organizationBranches = [
  {
    title: 'Accounts',
    text: 'Financial coordination and project account support.',
    items: [],
    terminal: true,
  },
  {
    title: 'Projects',
    text: 'Site delivery flow from project control to field teams.',
    items: ['Project Manager', 'Site Engineer', 'Site Supervisor', 'Technician', 'Helper 1'],
  },
  {
    title: 'Office Administration',
    text: 'Administrative support for procurement, documentation, and logistics.',
    items: ['Logistics', 'Purchase', 'Project Support', 'Document Controller'],
  },
];

const projects = [
  ['Marassi Park', 'Heat cool units', marassiPark],
  ['Marassi Shore', 'Swimming pool / plant room', marassiShore],
  ['Proto Amwaj', 'Swimming pool project', protoAmwaj],
  ['Seef Terrasse', 'Infinity pool', seefTerrasse],
  ['One & Only Resort', 'Swimming pool works', oneOnlyResort],
  ['Durat Al Bahrain', 'Residential villa pool', duratAlBahrain],
  ['Iraq Embassy Residence', 'Swimming pool', iraqEmbassy],
  ['Dana Mall at Manama', 'Water supply, drainage and CDP', danaMall],
  ['Kingdom Mall', 'Water feature works', kingdomMall],
  ['Bahrain Kuwait Embassy', 'Swimming pool', bahrainKuwait],
  ['Park 3, Riffa Views', 'Swimming pool works', riffaViews],
  ['Youth & Sports Muharraq', 'Fountain / water feature', youthSports],
  ['Beacon Private School', 'External lighting and MEP works', beaconPrivateSchool],
];

const clientProof = [
  ['Residential', 'Private villas, residential buildings, and community pool environments.'],
  ['Commercial', 'Retail destinations, mixed-use assets, and active commercial residences.'],
  ['Institutional', 'Public-facing, diplomatic, and sports-sector project settings.'],
];

const clientGroups = [
  {
    title: 'Developers & Destinations',
    text: 'Supporting developments and destinations that need reliable coordination and a clean finished result.',
    clients: ['Eagle Hills', 'Riffa Views', 'One & Only Resort', 'Property Developers'],
  },
  {
    title: 'Public & Institutional',
    text: 'Working with facilities where clear communication, planning, and dependable site delivery are important.',
    clients: ['MOM', 'Youth & Sports', 'Indian Embassy Residence', 'Bahrain Kuwait Embassy', 'Beacon Private School'],
  },
  {
    title: 'Commercial & Residential',
    text: 'Helping active buildings with pool, fountain, plumbing, and maintenance requirements.',
    clients: ['Kingdom Mall', 'Dana Mall', 'Durat Al Bahrain', 'Commercial Residences', 'Residential Buildings'],
  },
];

function LazyImage({ src, alt, eager = false, onLoad, className = '', ...props }) {
  const imageRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (eager || shouldLoad) return undefined;

    const image = imageRef.current;
    if (!image || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '640px 0px' },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  return (
    <img
      ref={imageRef}
      className={`${className} ${isLoaded ? 'is-loaded' : 'is-pending'}`.trim()}
      src={shouldLoad ? src : undefined}
      alt={alt}
      onLoad={(event) => {
        setIsLoaded(true);
        onLoad?.(event);
      }}
      {...props}
    />
  );
}

function DecorativeIcon({ icon: Icon, size = 24 }) {
  return <Icon size={size} aria-hidden="true" focusable="false" />;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function BrandLockup({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'compact' : ''}`}>
      <img src={logo} alt="" aria-hidden="true" decoding="async" />
      <div>
        <span className="brand-arabic">أسترال لبرك السباحة والسباكة ذ.م.م</span>
        <strong>ASTRAL</strong>
        <small>Pools and Plumbing W.L.L.</small>
      </div>
    </div>
  );
}

function Preloader({ isLeaving }) {
  return (
    <div className={`preloader ${isLeaving ? 'is-leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading Astral Pools and Plumbing">
      <div className="preloader-content">
        <img className="preloader-logo" src={logo} alt="Astral Pools and Plumbing logo" decoding="async" />
        <div className="preloader-copy">
          <span className="preloader-arabic" lang="ar" dir="rtl">أسترال لبرك السباحة والسباكة ذ.م.م</span>
          <div className="preloader-waterline" aria-hidden="true" />
          <strong>ASTRAL</strong>
          <small>Pools and Plumbing W.L.L.</small>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderLeaving, setPreloaderLeaving] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [renderDeferredSections, setRenderDeferredSections] = useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(window.location.hash && !['#home', '#about', '#services', '#expertise'].includes(window.location.hash));
  });
  const navToggleRef = useRef(null);
  const mobileNavPanelRef = useRef(null);

  useEffect(() => {
    const sectionNavTargets = navSectionGroups.flatMap((group) =>
      group.sectionIds.map((sectionId) => ({ sectionId, navId: group.navId })),
    );
    let sectionPositions = [];

    const updateSectionPositions = () => {
      sectionPositions = sectionNavTargets
        .map(({ sectionId, navId }) => {
          const section = document.getElementById(sectionId);
          return section ? { top: section.offsetTop, navId } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);
    };

    const getActiveNavId = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.42;

      return sectionPositions.reduce((activeNavId, { top, navId }) => {
        return top <= readingLine ? navId : activeNavId;
      }, navItems[0].id);
    };

    const updateScrolledState = () => {
      const nextScrolledState = window.scrollY > 32;
      setIsScrolled((currentScrolledState) =>
        currentScrolledState === nextScrolledState ? currentScrolledState : nextScrolledState,
      );
    };

    const updateActiveSection = () => {
      const nextActiveSection = getActiveNavId();
      setActiveSection((currentActiveSection) =>
        currentActiveSection === nextActiveSection ? currentActiveSection : nextActiveSection,
      );
    };

    let frameId = 0;
    let hashChangeTimeoutId = 0;

    const updateViewportState = () => {
      frameId = 0;
      updateScrolledState();
      updateActiveSection();
    };

    const requestViewportUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateViewportState);
    };

    const handleLayoutChange = () => {
      updateSectionPositions();
      requestViewportUpdate();
    };

    const handleHashChange = () => {
      window.clearTimeout(hashChangeTimeoutId);
      hashChangeTimeoutId = window.setTimeout(requestViewportUpdate, 180);
    };

    updateSectionPositions();
    updateViewportState();
    window.addEventListener('scroll', requestViewportUpdate, { passive: true });
    window.addEventListener('scrollend', requestViewportUpdate, { passive: true });
    window.addEventListener('resize', handleLayoutChange);
    window.addEventListener('load', handleLayoutChange);
    window.addEventListener('hashchange', handleHashChange);

    const revealed = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealed.forEach((item) => observer.observe(item));

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(hashChangeTimeoutId);
      window.removeEventListener('scroll', requestViewportUpdate);
      window.removeEventListener('scrollend', requestViewportUpdate);
      window.removeEventListener('resize', handleLayoutChange);
      window.removeEventListener('load', handleLayoutChange);
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [renderDeferredSections]);

  useEffect(() => {
    if (renderDeferredSections) return undefined;

    const loadDeferredSections = () => setRenderDeferredSections(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadDeferredSections, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(loadDeferredSections, 350);
    return () => window.clearTimeout(timeoutId);
  }, [renderDeferredSections]);

  useEffect(() => {
    const start = window.setTimeout(() => setPreloaderLeaving(true), 3200);
    const finish = window.setTimeout(() => setShowPreloader(false), 3860);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(finish);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
        navToggleRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1080) setIsNavOpen(false);
    };

    document.body.classList.toggle('nav-open', isNavOpen);
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);

    if (isNavOpen) {
      mobileNavPanelRef.current?.querySelector('a')?.focus();
    }

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  return (
    <>
      {showPreloader ? <Preloader isLeaving={preloaderLeaving} /> : null}
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Astral home">
          <BrandLockup compact />
        </a>
        <button
          ref={navToggleRef}
          className="nav-toggle"
          type="button"
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          {isNavOpen ? <X size={22} aria-hidden="true" focusable="false" /> : <Menu size={22} aria-hidden="true" focusable="false" />}
        </button>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              onClick={() => {
                setActiveSection(item.id);
                setIsNavOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <button
        className={`mobile-nav-backdrop ${isNavOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsNavOpen(false)}
      />
      <aside
        id="mobile-navigation"
        ref={mobileNavPanelRef}
        className={`mobile-nav-panel ${isNavOpen ? 'is-open' : ''}`}
        aria-hidden={!isNavOpen}
        aria-label="Mobile navigation panel"
      >
        <span className="mobile-nav-kicker">Navigation</span>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              tabIndex={isNavOpen ? 0 : -1}
              onClick={() => {
                setActiveSection(item.id);
                setIsNavOpen(false);
                navToggleRef.current?.focus();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero">
          <LazyImage
            className="hero-bg"
            src={heroPool}
            alt="Luxury swimming pool with waterfall beside a modern villa"
            eager
            width="1672"
            height="941"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <p className="tagline">Committed to honesty and integrity</p>
            <h1>Astral Pools and Plumbing W.L.L.</h1>
            <p>
              Swimming pool, water-feature, plumbing, HDPE, MEP, and maintenance solutions delivered across Kingdom of Bahrain.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects" onClick={() => setRenderDeferredSections(true)}>
                View Projects <ArrowRight size={18} aria-hidden="true" focusable="false" />
              </a>
              <a className="button ghost" href="#contact" onClick={() => setRenderDeferredSections(true)}>
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <SectionHeading
            eyebrow="Vision, Mission & Values"
            title="Built on trust, craft, and technical reliability."
            text="Established on 09 September 2016, Astral Pools and Plumbing W.L.L. serves clients across pool construction, plumbing, HDPE, MEP, water features, and maintenance with a focus on reliable workmanship."
          />
          <div className="values-grid">
            {values.map(({ title, text, icon: Icon }) => (
              <article className="value-card reveal" key={title}>
                <DecorativeIcon icon={Icon} size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <div className="service-index">
            <div className="service-index-intro">
              <SectionHeading
                eyebrow="Our Services"
                title="A balanced portfolio of pool, plumbing, maintenance, and water-feature services."
                text="Astral helps clients with pool construction, plumbing, maintenance, and water-feature works through clear planning and dependable site execution."
              />
            </div>
            <div className="service-list reveal">
              {services.map(([category, service], index) => (
                <article className="service-row" key={service} style={{ '--delay': `${index * 55}ms` }}>
                  <span>{category}</span>
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section products">
          <div className="products-shell">
            <div className="products-header">
              <SectionHeading
                eyebrow="Our Products"
                title="A complete pool supply range for every project need."
                text="Astral supplies pool equipment, finishes, and accessories to suit each project, with guidance on selection, installation, and maintenance."
              />
              <div className="product-range-note reveal">
                <span>Complete supply support</span>
                <strong>From main equipment to finishing items, Astral can source pool products based on your requirement.</strong>
                <a href="#contact" onClick={() => setRenderDeferredSections(true)}>
                  Ask About Product Supply <ArrowRight size={16} aria-hidden="true" focusable="false" />
                </a>
              </div>
            </div>

            <div className="product-rail-wrap reveal" aria-label="Pool equipment product rail">
              <div className="product-rail">
                {products.map((product, index) => (
                  <article className="product-tile" key={product.title} style={{ '--delay': `${index * 45}ms` }}>
                    <LazyImage
                      src={product.image}
                      alt={`${product.title} supplied by Astral Pools and Plumbing`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <span>{product.group}</span>
                      <h3>{product.title}</h3>
                      <small>{product.note}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="product-range-footer">
              <p>Products can be supplied for new pools, upgrades, maintenance work, and replacement needs.</p>
              <div className="retail-essentials reveal" aria-label="Additional retail items">
                {retailEssentials.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section expertise">
          <div className="split">
            <div>
              <SectionHeading
                eyebrow="Our Expertise"
                title="Pool systems planned and built properly."
                text="Astral brings together civil, plumbing, HDPE, electrical, and maintenance teams so clients can manage related pool works with one partner."
              />
              <div className="expertise-grid">
                {expertise.map(({ title, text, icon: Icon }) => (
                  <article className="expertise-card reveal" key={title}>
                    <DecorativeIcon icon={Icon} size={22} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {renderDeferredSections ? (
          <>
            <section id="assurance" className="section assurance">
              <SectionHeading
                eyebrow="Quality, Safety & Support"
                title="Support that continues after handover."
                text="We use suitable materials, follow safe installation practices, and support clients after handover through maintenance and service."
              />
              <div className="assurance-showcase">
                <div className="assurance-media reveal">
                  <LazyImage
                    className="assurance-main-image"
                    src={equipmentRoom}
                    alt="Pool equipment installation by Astral Pools and Plumbing"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="assurance-media-caption">
                    <span>Checked systems</span>
                    <strong>Installed with care, tested before handover.</strong>
                  </div>
                  <LazyImage
                    className="assurance-inset-image"
                    src={siteService}
                    alt="Pool maintenance and site support by Astral Pools and Plumbing"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="assurance-content">
                  <p className="assurance-kicker reveal">Reliable delivery needs disciplined work on site and useful support after completion.</p>
                  <div className="assurance-promises">
                    {assurance.map(({ title, intro, points, icon: Icon }) => (
                      <article className="assurance-card reveal" key={title}>
                        <DecorativeIcon icon={Icon} size={24} />
                        <h3>{title}</h3>
                        <p>{intro}</p>
                        <ul>
                          {points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="why-us" className="section why-us">
              <div className="why-layout">
                <SectionHeading
                  eyebrow="Why Choose Us"
                  title="Careful work, clear updates, and reliable support."
                  text="Clients choose Astral for experienced teams, clear communication, careful coordination, and support after the work is complete."
                />
                <div className="why-grid">
                  {whyChooseUs.map((item, index) => (
                    <article
                      className="why-card reveal"
                      key={item}
                      style={{ '--delay': `${index * 55}ms` }}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3>{item}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="projects" className="section projects">
              <SectionHeading
                eyebrow="Our Projects"
                title="Completed pool, plumbing, and water-feature works."
                text="A selection of completed pool, fountain, plumbing, and cooling works across residential, commercial, and public-facing projects."
              />
              <div className="project-grid">
                {projects.map(([name, type, image]) => (
                  <article className="project-card reveal" key={name}>
                    <LazyImage src={image} alt={`${name} ${type}`} loading="lazy" decoding="async" />
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
                eyebrow="Our Clients"
                title="Trusted by residential, commercial, and public-facing project teams."
                text="Astral works to build long-term client relationships through reliable service, clear updates, and after-sales support."
              />
              <div className="client-showcase">
                <aside className="client-proof reveal" aria-label="Client sectors">
                  {clientProof.map(([label, text]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </aside>

                <div className="client-groups">
                  {clientGroups.map((group, index) => (
                    <article
                      className="client-group reveal"
                      key={group.title}
                      style={{ '--delay': `${index * 70}ms` }}
                    >
                      <div className="client-group-copy">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h3>{group.title}</h3>
                        <p>{group.text}</p>
                      </div>
                      <ul aria-label={`${group.title} clients`}>
                        {group.clients.map((client) => (
                          <li key={client}>{client}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="team" className="section organization">
              <SectionHeading
                eyebrow="Our Structure"
                title="Clear responsibility from management to site delivery."
                text="Astral's organization structure keeps project communication, site execution, administration, and support responsibilities clearly defined."
              />
              <div className="org-chart reveal" aria-label="Astral organization structure">
                <div className="org-top">
                  <span
                    className="org-heading-tooltip"
                    tabIndex={0}
                    data-tooltip="Central direction for project decisions, client communication, and delivery standards."
                  >
                    Executive Management
                  </span>
                </div>
                <div className="org-connectors" aria-hidden="true">
                  {organizationBranches.map((branch) => (
                    <span key={branch.title} />
                  ))}
                </div>
                <div className="org-branches">
                  {organizationBranches.map((branch, index) => (
                    <article className={`org-branch${branch.terminal ? ' is-terminal' : ''}`} key={branch.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="org-heading-tooltip" tabIndex={0} data-tooltip={branch.text}>{branch.title}</h3>
                      {branch.items.length > 0 && (
                        <ol>
                          {branch.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="closing-note" className="closing-note" aria-label="Closing statement">
              <div className="closing-note-inner reveal">
                <span>Our Promise</span>
                <p>We look forward to creating exceptional pool experiences for you.</p>
              </div>
            </section>

            <section id="contact" className="contact" aria-labelledby="contact-heading">
              <LazyImage
                className="contact-bg"
                src={footerPool}
                alt="Refined indoor-outdoor pool with architectural lighting"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
              />
              <div className="contact-wave" />
              <div className="contact-panel reveal">
                <div className="footer-brand">
                  <BrandLockup />
                </div>
                <div className="contact-details" id="contact-heading">
                  <div className="contact-heading">
                    <span>Contact Us</span>
                  </div>
                  <div className="contact-lines">
                    <p><MapPin size={20} aria-hidden="true" focusable="false" /> P.O. Box 82365 | C.R. 151782-1 | Flat 14 | Bldg. 446P | Road 1206 | Block 712 | Al Ramli | Kingdom of Bahrain</p>
                    <a href="tel:+97377088685" aria-label="Telephone +973 7708 8685"><Phone size={20} aria-hidden="true" focusable="false" /> +973 7708 8685</a>
                    <a href="tel:+97339856743" aria-label="Mobile +973 39856743 or 33664081"><Phone size={20} aria-hidden="true" focusable="false" /> +973 39856743 | 33664081</a>
                    <a href="mailto:astralpoolsplumbing@gmail.com" aria-label="Email astralpoolsplumbing@gmail.com"><Mail size={20} aria-hidden="true" focusable="false" /> astralpoolsplumbing@gmail.com</a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null}
      </main>
    </>
  );
}
