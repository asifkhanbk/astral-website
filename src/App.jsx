import { useEffect, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
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
            <p className="tagline">Committed to honesty and integrity</p>
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
