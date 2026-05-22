import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CheckCircle2,
  CirclePlay,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';
import { content } from './data/content.js';
import './styles.css';

const navKeys = ['home', 'about', 'products', 'news', 'contact'];

function pageFromHash() {
  const page = window.location.hash.replace('#/', '').replace('#', '');
  return navKeys.includes(page) ? page : 'home';
}

function App() {
  const [lang, setLang] = useState('en');
  const [activePage, setActivePage] = useState(pageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const syncPage = () => setActivePage(pageFromHash());
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.history.pushState(null, '', `#/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand brand-button" onClick={() => goToPage('home')} aria-label={lang === 'en' ? t.brandName : t.brandCn}>
          <img src="/images/logo.png" alt="" />
          <span>
            <strong>{lang === 'en' ? t.brandName : t.brandCn}</strong>
          </span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary">
          {navKeys.map((key) => (
            <button
              className={activePage === key ? 'active' : ''}
              key={key}
              onClick={() => goToPage(key)}
              type="button"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language switch">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} type="button">
              EN
            </button>
            <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')} type="button">
              中文
            </button>
          </div>
          <button
            className="menu-button"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <div className="page-transition" key={`${activePage}-${lang}`}>
          {activePage === 'home' && <HomePage t={t} goToPage={goToPage} />}
          {activePage === 'about' && <AboutPage t={t} />}
          {activePage === 'products' && <ProductsPage t={t} goToPage={goToPage} />}
          {activePage === 'news' && <NewsPage t={t} goToPage={goToPage} />}
          {activePage === 'contact' && <ContactPage t={t} />}
        </div>
      </main>

      <footer className="footer">
        <button className="brand footer-brand brand-button" onClick={() => goToPage('home')} type="button">
          <img src="/images/logo.png" alt="" />
          <span>
            <strong>{lang === 'en' ? t.brandName : t.brandCn}</strong>
          </span>
        </button>
        <nav aria-label="Footer">
          {navKeys.slice(1).map((key) => (
            <button key={key} onClick={() => goToPage(key)} type="button">
              {t.nav[key]}
            </button>
          ))}
        </nav>
        <p>© {year} GJ Guangjun Plastics Technology. All rights reserved.</p>
      </footer>
    </div>
  );
}

function HomePage({ t, goToPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => goToPage('products')} type="button">
              {t.hero.primaryCta}
              <ArrowRight size={18} />
            </button>
            <button className="button button-secondary" onClick={() => goToPage('contact')} type="button">
              {t.hero.secondaryCta}
            </button>
          </div>
          <div className="trust-strip" aria-label={t.hero.trustLabel}>
            {t.hero.proof.map((item) => (
              <span key={item}>
                <CheckCircle2 size={17} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AboutVideoSection t={t} compact />
      <ProductsSection t={t} goToPage={goToPage} compact />
      <SolutionsBand t={t} />
      <NewsSection t={t} goToPage={goToPage} compact />
      <HomeContactTeaser t={t} goToPage={goToPage} />
    </>
  );
}

function AboutPage({ t }) {
  return (
    <>
      <AboutVideoSection t={t} />
      <section className="content-band">
        <div className="section-heading">
          <h2>{t.aboutPage.capabilityTitle}</h2>
          <p>{t.aboutPage.capabilityBody}</p>
        </div>
        <div className="feature-grid">
          {t.aboutPage.features.map((item) => (
            <article className="feature-card" key={item.title}>
              <ShieldCheck size={24} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductsPage({ t, goToPage }) {
  return (
    <>
      <ProductsSection t={t} goToPage={goToPage} />
      <SolutionsBand t={t} />
    </>
  );
}

function NewsPage({ t, goToPage }) {
  return (
    <>
      <NewsSection t={t} goToPage={goToPage} />
    </>
  );
}

function ContactPage({ t }) {
  return (
    <>
      <ContactMapHero t={t} />
      <ContactSection t={t} />
    </>
  );
}

function ContactMapHero({ t }) {
  return (
    <section className="contact-map-hero">
      <div className="factory-visual">
        <img src="/images/factory-premium.png" alt={t.contact.factoryAlt} />
      </div>
      <div className="map-panel">
        <iframe
          title={t.contact.mapTitle}
          src="https://www.openstreetmap.org/export/embed.html?bbox=121.214%2C28.565%2C121.335%2C28.684&layer=mapnik&marker=28.625%2C121.275"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="map-location">{t.contact.mapLocation}</span>
      </div>
    </section>
  );
}

function PageIntro({ title, body, image, imageAlt }) {
  return (
    <section className="page-intro">
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <img src={image} alt={imageAlt} />
    </section>
  );
}

function AboutVideoSection({ t, compact = false }) {
  return (
    <section className={compact ? 'video-section compact-section' : 'video-section'}>
      <div className="video-copy">
        <p className="section-label">{t.about.label}</p>
        <h2>{t.about.title}</h2>
        <p>{t.about.body}</p>
        <div className="capabilities">
          {t.about.points.map((point) => (
            <span key={point}>
              <ShieldCheck size={18} />
              {point}
            </span>
          ))}
        </div>
        <button className="button button-primary" type="button">
          {t.about.button}
          <CirclePlay size={18} />
        </button>
      </div>
      <div className="video-frame" aria-label={t.about.videoLabel}>
        <img src="/images/about-factory.jpg" alt={t.about.videoAlt} />
        <button className="play-button" aria-label={t.about.button} type="button">
          <CirclePlay size={68} />
        </button>
        <div className="video-controls">
          <span>0:00 / 2:18</span>
          <span>HD</span>
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ t, goToPage, compact = false }) {
  const items = compact ? t.products.items.slice(0, 5) : t.products.items;

  return (
    <section className="products-section">
      <div className="section-heading">
        <h2>{t.products.title}</h2>
        <p>{t.products.subtitle}</p>
      </div>
      <div className="product-grid">
        {items.map((product) => (
          <article className="product-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button onClick={() => goToPage('contact')} type="button" aria-label={`${t.products.inquire} ${product.title}`}>
                {t.products.inquire}
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionsBand({ t }) {
  return (
    <section className="solutions-band">
      <div className="solutions-image">
        <img src="/images/tech-rd.jpg" alt={t.solutions.imageAlt} />
      </div>
      <div className="solutions-copy">
        <p className="section-label">{t.solutions.label}</p>
        <h2>{t.solutions.title}</h2>
        <p>{t.solutions.body}</p>
        <div className="spec-list">
          {t.solutions.specs.map((spec) => (
            <div key={spec.name}>
              <strong>{spec.name}</strong>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection({ t, goToPage, compact = false }) {
  const items = compact ? t.news.items.slice(0, 3) : t.news.items;

  return (
    <section className="news-section">
      <div className="section-heading">
        <h2>{t.news.title}</h2>
        <p>{t.news.subtitle}</p>
      </div>
      <div className="news-grid">
        {items.map((item) => (
          <article className="news-card" key={item.title}>
            <img src={item.image} alt="" />
            <div>
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              <button onClick={() => goToPage('contact')} type="button" aria-label={`${t.news.readMore} ${item.title}`}>
                {t.news.readMore}
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomeContactTeaser({ t, goToPage }) {
  return (
    <section className="home-contact-teaser">
      <div>
        <h2>{t.homeContact.title}</h2>
        <p>{t.homeContact.body}</p>
      </div>
      <button className="button button-primary" onClick={() => goToPage('contact')} type="button">
        {t.homeContact.button}
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="section-heading invert">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          <ContactItem icon={<MapPin />} title={t.contact.addressTitle} text={t.contact.address} />
          <ContactItem icon={<Phone />} title={t.contact.phoneTitle} text="+86 576 8403 6888" />
          <ContactItem icon={<Mail />} title={t.contact.emailTitle} text="sales@gjguangjun.com" />
          <ContactItem icon={<Globe2 />} title={t.contact.webTitle} text="www.gjguangjun.com" />
          <ContactItem icon={<Clock3 />} title={t.contact.hoursTitle} text={t.contact.hours} />
        </div>
        <form className="inquiry-form" onSubmit={(event) => event.preventDefault()}>
          <input aria-label={t.contact.name} placeholder={t.contact.name} />
          <input aria-label={t.contact.email} placeholder={t.contact.email} type="email" />
          <textarea aria-label={t.contact.message} placeholder={t.contact.message} />
          <button className="button button-primary" type="submit">
            {t.contact.submit}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, text }) {
  return (
    <div className="contact-item">
      <span className="contact-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
