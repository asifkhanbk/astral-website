import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
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
import heroPool from './assets/hero-premium-pool.jpg';
import equipmentRoom from './assets/equipment-room.jpg';
import siteService from './assets/site-service.jpg';
import footerPool from './assets/footer-premium-pool.jpg';
import marassiPark from './assets/project-marassi-park.jpg';
import marassiShore from './assets/project-marassi-shore.jpg';
import danaMall from './assets/project-dana-mall.jpg';
import iraqEmbassy from './assets/project-iraq-embassy.jpg';
import kingdomMall from './assets/project-kingdom-mall.jpg';
import bahrainKuwait from './assets/project-bahrain-kuwait-embassy.jpg';
import riffaViews from './assets/project-riffa-views.jpg';
import youthSports from './assets/project-youth-sports.jpg';
import staffAli from './assets/staff-ali-salman.jpg';
import staffAjithkhan from './assets/staff-ajithkhan-panamparambil.jpg';
import staffSreemon from './assets/staff-sreemon-janardhanan.jpg';
import staffSanthosh from './assets/staff-santhosh-daniel.jpg';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const navSectionGroups = [
  { navId: 'about', sectionIds: ['about'] },
  { navId: 'services', sectionIds: ['services', 'why-us', 'expertise', 'assurance', 'staff'] },
  { navId: 'projects', sectionIds: ['projects', 'clients'] },
  { navId: 'contact', sectionIds: ['contact'] },
];

const services = [
  ['Pools', 'Swimming pool construction and maintenance'],
  ['Plumbing', 'Plumbing contracting'],
  ['Systems', 'Boiler maintenance, supply and installation'],
  ['Climate', 'Heater and chiller systems for swimming pools'],
  ['Wellness', 'Sauna and steam'],
  ['Water Features', 'Fountain and jacuzzi'],
  ['Infrastructure', 'Electrical and irrigation'],
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
    text: 'To deliver durable, efficient, and beautifully crafted pools through expert design, advanced technology, and reliable service.',
  },
  {
    title: 'Core Values',
    icon: HeartHandshake,
    text: 'Quality, integrity, innovation, and customer satisfaction guide every decision from first concept to after-sales support.',
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
    intro: 'Quality and safety are integral to every stage of our work, from material selection to commissioning.',
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
    intro: 'Astral supports hassle-free ownership through planned servicing and responsive technical care.',
    points: [
      'Regular cleaning and servicing',
      'Water treatment and balancing',
      'Equipment inspection and repair',
      'Annual Maintenance Contracts (AMC)',
    ],
  },
];

const staff = [
  {
    name: 'Ali Salman Ali Salman Almadhawab',
    role: 'Managing Director',
    image: staffAli,
    text: 'Leads the company direction, client trust, and delivery standards behind Astral’s pool and plumbing portfolio.',
  },
  {
    name: 'Ajithkhan Panamparambil',
    role: 'Business Development Manager',
    image: staffAjithkhan,
    text: 'Coordinates business development, client communication, and commercial relationships across project opportunities.',
  },
  {
    name: 'Sreemon Janardhanan',
    role: 'MEP Coordinator',
    image: staffSreemon,
    text: 'Supports coordinated mechanical, electrical, and plumbing execution for pool systems and site delivery.',
  },
  {
    name: 'Santhosh Daniel',
    role: 'Project Manager',
    image: staffSanthosh,
    text: 'Oversees project execution, site coordination, and practical delivery from planning through completion.',
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

function BrandLockup({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'compact' : ''}`}>
      <img src={logo} alt="" aria-hidden="true" />
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
        <img className="preloader-logo" src={logo} alt="Astral Pools and Plumbing logo" />
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

  useEffect(() => {
    const sectionNavTargets = navSectionGroups.flatMap((group) =>
      group.sectionIds.map((sectionId) => ({ sectionId, navId: group.navId })),
    );

    const getActiveNavId = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.42;

      return sectionNavTargets.reduce((activeNavId, { sectionId, navId }) => {
        const section = document.getElementById(sectionId);
        if (!section) return activeNavId;
        return section.offsetTop <= readingLine ? navId : activeNavId;
      }, navItems[0].id);
    };

    const updateActiveSection = () => setActiveSection(getActiveNavId());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
      updateActiveSection();
    };

    const handleHashChange = () => {
      window.setTimeout(updateActiveSection, 180);
    };

    let frameId;
    let lastScrollY = -1;
    let lastInnerHeight = -1;
    const trackScrollPosition = () => {
      if (window.scrollY !== lastScrollY || window.innerHeight !== lastInnerHeight) {
        lastScrollY = window.scrollY;
        lastInnerHeight = window.innerHeight;
        handleScroll();
      }
      frameId = window.requestAnimationFrame(trackScrollPosition);
    };

    handleScroll();
    frameId = window.requestAnimationFrame(trackScrollPosition);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', updateActiveSection, { passive: true });
    window.addEventListener('resize', handleScroll);
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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', updateActiveSection);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

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
      if (event.key === 'Escape') setIsNavOpen(false);
    };

    document.body.classList.toggle('nav-open', isNavOpen);
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isNavOpen]);

  return (
    <>
      {showPreloader ? <Preloader isLeaving={preloaderLeaving} /> : null}
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Astral home">
          <BrandLockup compact />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          {isNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              href={`#${item.id}`}
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
      <aside className={`mobile-nav-panel ${isNavOpen ? 'is-open' : ''}`} aria-hidden={!isNavOpen}>
        <span className="mobile-nav-kicker">Navigation</span>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                setIsNavOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main>
        <section id="home" className="hero">
          <img className="hero-bg" src={heroPool} alt="Luxury swimming pool with waterfall beside a modern villa" />
          <div className="hero-overlay" />
          <div className="hero-content reveal">
            <p className="tagline">Committed to honesty and integrity</p>
            <h1>Astral Pools and Plumbing W.L.L.</h1>
            <p>
              Swimming pool, water-feature, plumbing, HDPE, MEP, and maintenance solutions delivered across Kingdom of Bahrain.
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
            eyebrow="Vision, Mission & Values"
            title="Built on trust, craft, and technical reliability."
            text="Established on 09 September 2016, Astral Pools and Plumbing W.L.L. delivers integrated civil, mechanical, electrical, plumbing, HDPE, pool, and water-feature solutions with a disciplined focus on durable results."
          />
          <div className="values-grid">
            {values.map(({ title, text, icon: Icon }) => (
              <article className="value-card reveal" key={title}>
                <Icon size={24} />
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
                eyebrow="Services"
                title="A balanced portfolio of pool, plumbing, maintenance, and water-feature services."
                text="From elegant pool construction to technical infrastructure support, Astral brings design attention and field discipline to every engagement."
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

        <section id="why-us" className="section why-us">
          <div className="why-layout">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Detail-led delivery with the discipline clients expect."
              text="Astral focuses on long-lasting results, careful coordination, and transparent project communication from the first site discussion to after-sales support."
            />
            <div className="why-grid">
              {whyChooseUs.map((item, index) => (
                <article className="why-card reveal" key={item} style={{ '--delay': `${index * 55}ms` }}>
                  <Award size={20} />
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
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
          </div>
        </section>

        <section id="assurance" className="section assurance">
          <SectionHeading
            eyebrow="Quality, Safety & Support"
            title="Built to perform after handover."
            text="Every project is supported by durable materials, safe installation practices, and maintenance care designed to protect long-term performance."
          />
          <div className="assurance-grid">
            {assurance.map(({ title, intro, points, image, icon: Icon }) => (
              <article className="assurance-card reveal" key={title}>
                <img src={image} alt={`${title} by Astral Pools and Plumbing`} />
                <div>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{intro}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="staff" className="section staff">
          <SectionHeading
            eyebrow="Key Staff"
            title="Experienced leadership for commercial and technical delivery."
            text="Our leadership and technical team help clients move from initial discussions to coordinated site execution with clear responsibility and practical support."
          />
          <div className="staff-grid">
            {staff.map(({ name, role, image, text }) => (
              <article className="staff-card reveal" key={name}>
                <img src={image} alt={`${name}, ${role}`} />
                <div>
                  <p>{role}</p>
                  <h3>{name}</h3>
                  <span>{text}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across pools, fountains, plumbing, and cooling systems."
            text="Explore a selection of completed work across swimming pools, fountains, plumbing, and cooling systems for varied project environments."
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

        <section id="contact" className="contact" aria-labelledby="contact-heading">
          <img className="contact-bg" src={footerPool} alt="Refined indoor-outdoor pool with architectural lighting" />
          <div className="contact-wave" />
          <div className="contact-panel reveal">
            <div className="footer-brand">
              <BrandLockup />
            </div>
            <div className="contact-details">
              <span id="contact-heading" className="contact-label">Contact Us</span>
              <div className="contact-lines">
                <p><MapPin size={20} /> P.O. Box 82365 | C.R. 151782-1 | Flat 14 | Bldg. 446P | Road 1206 | Block 712 | Al Ramli | Kingdom of Bahrain</p>
                <a href="tel:+97377088685"><Phone size={20} /> Tel: +973 7708 8685</a>
                <a href="tel:+97339856743"><Phone size={20} /> Mob.: +973 39856743 | 33664081</a>
                <a href="mailto:astralpoolsplumbing@gmail.com"><Mail size={20} /> E-mail: astralpoolsplumbing@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
