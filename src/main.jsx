import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
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

function routeFromHash() {
  const parts = window.location.hash.replace('#/', '').replace('#', '').split('/').filter(Boolean);
  const [page, detailId] = parts;

  if (page === 'news' && detailId) {
    return { page: 'newsDetail', detailId };
  }

  return { page: navKeys.includes(page) ? page : 'home', detailId: null };
}

function slugifyNewsTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getNewsItemId(item) {
  const imageId = item.image?.split('/').pop()?.replace(/\.[^.]+$/, '');
  return item.id || imageId || slugifyNewsTitle(item.title);
}

function App() {
  const [lang, setLang] = useState('en');
  const [route, setRoute] = useState(routeFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topbarTransparent, setTopbarTransparent] = useState(() => routeFromHash().page === 'home');
  const t = content[lang];
  const year = useMemo(() => new Date().getFullYear(), []);
  const activePage = route.page;

  useEffect(() => {
    const syncRoute = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    const syncTopbar = () => {
      if (activePage !== 'home') {
        setTopbarTransparent(false);
        return;
      }

      const hero = document.querySelector('.hero');
      const topbarHeight = document.querySelector('.topbar')?.offsetHeight ?? 88;
      setTopbarTransparent(Boolean(hero && hero.getBoundingClientRect().bottom > topbarHeight));
    };

    syncTopbar();
    window.addEventListener('scroll', syncTopbar, { passive: true });
    window.addEventListener('resize', syncTopbar);
    return () => {
      window.removeEventListener('scroll', syncTopbar);
      window.removeEventListener('resize', syncTopbar);
    };
  }, [activePage]);

  const goToPage = (page) => {
    const nextRoute = { page, detailId: null };
    setRoute(nextRoute);
    setMenuOpen(false);
    window.history.pushState(null, '', `#/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNewsDetail = (item) => {
    const detailId = getNewsItemId(item);
    setRoute({ page: 'newsDetail', detailId });
    setMenuOpen(false);
    window.history.pushState(null, '', `#/news/${detailId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shellClassName = [
    'site-shell',
    activePage === 'home' ? 'is-home' : '',
    topbarTransparent ? 'is-topbar-transparent' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={shellClassName}>
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
              className={activePage === key || (key === 'news' && activePage === 'newsDetail') ? 'active' : ''}
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
          {activePage === 'home' && <HomePage t={t} goToPage={goToPage} goToNewsDetail={goToNewsDetail} />}
          {activePage === 'about' && <AboutPage t={t} />}
          {activePage === 'products' && <ProductsPage t={t} goToPage={goToPage} />}
          {activePage === 'news' && <NewsPage t={t} goToNewsDetail={goToNewsDetail} />}
          {activePage === 'newsDetail' && (
            <NewsDetailPage t={t} detailId={route.detailId} goToPage={goToPage} goToNewsDetail={goToNewsDetail} />
          )}
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

function HomePage({ t, goToPage, goToNewsDetail }) {
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
      <NewsSection t={t} goToNewsDetail={goToNewsDetail} compact />
      <HomeContactTeaser t={t} goToPage={goToPage} />
    </>
  );
}

function AboutPage({ t }) {
  const [activeReport, setActiveReport] = useState(null);

  useEffect(() => {
    if (!activeReport) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveReport(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReport]);

  return (
    <>
      <section className="about-hero-redesign">
        <div className="about-hero-media" aria-label={t.about.videoLabel}>
          <img src="/images/about-factory.jpg" alt={t.about.videoAlt} />
          <button className="play-button" aria-label={t.about.button} type="button">
            <CirclePlay size={68} />
          </button>
          <div className="about-video-caption">
            <span>{t.aboutPage.videoTag}</span>
            <strong>2:18</strong>
          </div>
        </div>
        <div className="about-hero-copy">
          <p className="section-label">{t.about.label}</p>
          <h1>{t.aboutPage.title}</h1>
          <p>{t.aboutPage.body}</p>
          <div className="about-proof-grid">
            {t.aboutPage.proof.map((item) => (
              <span key={item}>
                <CheckCircle2 size={17} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="equipment-section">
        <div className="section-heading">
          <h2>{t.aboutPage.equipmentTitle}</h2>
          <p>{t.aboutPage.equipmentBody}</p>
        </div>
        <div className="equipment-layout">
          {t.aboutPage.equipment.map((item, index) => (
            <article className={index === 0 ? 'equipment-card featured' : 'equipment-card'} key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="report-section">
        <div className="section-heading">
          <h2>{t.aboutPage.reportTitle}</h2>
          <p>{t.aboutPage.reportBody}</p>
        </div>
        <div className="report-grid">
          {t.aboutPage.reports.map((item) => (
            <article className="report-card" key={item.title}>
              <button className="report-preview-button" onClick={() => setActiveReport(item)} type="button">
                <img className="report-cover" src={item.image} alt={item.title} />
              </button>
              <div className="report-content">
                <p>{item.type}</p>
                <h3>{item.title}</h3>
                <dl>
                  {item.meta.map((row) => (
                    <div key={row.name}>
                      <dt>{row.name}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <a className="report-link" href={item.link} target="_blank" rel="noreferrer">
                  {t.aboutPage.reportLinkText}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      {activeReport && (
        <div className="report-lightbox" role="dialog" aria-modal="true" aria-label={activeReport.title}>
          <button className="report-lightbox-backdrop" onClick={() => setActiveReport(null)} type="button" aria-label="Close preview" />
          <div className="report-lightbox-panel">
            <div className="report-lightbox-header">
              <h3>{activeReport.title}</h3>
              <button onClick={() => setActiveReport(null)} type="button" aria-label="Close preview">
                <X size={22} />
              </button>
            </div>
            <img src={activeReport.image} alt={activeReport.title} />
            <a className="report-lightbox-link" href={activeReport.link} target="_blank" rel="noreferrer">
              {t.aboutPage.reportLinkText}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
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

function NewsPage({ t, goToNewsDetail }) {
  return (
    <>
      <NewsSection t={t} goToNewsDetail={goToNewsDetail} />
    </>
  );
}

function NewsDetailPage({ t, detailId, goToPage, goToNewsDetail }) {
  const newsItems = t.news.items.map((item) => ({ ...item, id: getNewsItemId(item) }));
  const article = newsItems.find((item) => item.id === detailId) || newsItems[0];
  const relatedItems = newsItems.filter((item) => item.id !== article.id).slice(0, 3);
  const detail = article.detail || {};
  const paragraphs =
    detail.paragraphs ||
    [
      article.summary,
      t.newsDetail.fallbackParagraph,
      t.newsDetail.fallbackClosing,
    ];

  return (
    <article className="news-detail-page">
      <section className="news-detail-hero">
        <button className="news-back-button" onClick={() => goToPage('news')} type="button">
          <ArrowLeft size={17} />
          {t.newsDetail.back}
        </button>
        <div className="news-detail-meta">
          {article.category && <span>{article.category}</span>}
          <time>{article.date}</time>
        </div>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
      </section>

      <section className="news-detail-layout">
        <div className="news-detail-main">
          <img className="news-detail-cover" src={article.image} alt="" />
          <div className="news-detail-content">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {detail.highlights && (
            <div className="news-detail-highlight-grid">
              {detail.highlights.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="news-detail-sidebar" aria-label={t.newsDetail.sidebarTitle}>
          <div className="news-sidebar-panel">
            <span>{t.newsDetail.sidebarKicker}</span>
            <h2>{t.newsDetail.sidebarTitle}</h2>
            <p>{t.newsDetail.sidebarBody}</p>
            <button className="button button-primary" onClick={() => goToPage('contact')} type="button">
              {t.newsDetail.contactCta}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="news-sidebar-panel related-news-panel">
            <h2>{t.newsDetail.relatedTitle}</h2>
            {relatedItems.map((item) => (
              <button key={item.id} onClick={() => goToNewsDetail(item)} type="button">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <time>{item.date}</time>
              </button>
            ))}
          </div>
        </aside>
      </section>
    </article>
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

function NewsSection({ t, goToNewsDetail, compact = false }) {
  const items = compact ? t.news.items.slice(0, 3) : t.news.items;
  const featuredNews = items[0];
  const moreNews = compact ? items : items.slice(1);

  return (
    <section className={compact ? 'news-section' : 'news-section news-page-section'}>
      <div className="section-heading">
        <h2>{t.news.title}</h2>
        <p>{t.news.subtitle}</p>
      </div>

      {!compact && featuredNews && (
        <article className="news-feature">
          <div className="news-feature-image">
            <img src={featuredNews.image} alt="" />
          </div>
          <div className="news-feature-copy">
            <span>{t.news.featureLabel}</span>
            <time>{featuredNews.date}</time>
            <h3>{featuredNews.title}</h3>
            <p>{featuredNews.summary}</p>
            <button onClick={() => goToNewsDetail(featuredNews)} type="button" aria-label={`${t.news.readMore} ${featuredNews.title}`}>
              {t.news.readMore}
              <ArrowRight size={17} />
            </button>
          </div>
        </article>
      )}

      {!compact && t.news.categories && (
        <div className="news-category-grid">
          {t.news.categories.map((category) => (
            <article className="news-category-card" key={category.title}>
              <span>{category.kicker}</span>
              <h3>{category.title}</h3>
              <p>{category.body}</p>
            </article>
          ))}
        </div>
      )}

      <div className="news-grid">
        {moreNews.map((item) => (
          <article className="news-card" key={item.title}>
            <img src={item.image} alt="" />
            <div>
              {!compact && item.category && <span className="news-card-tag">{item.category}</span>}
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              {!compact && item.summary && <p>{item.summary}</p>}
              <button onClick={() => goToNewsDetail(item)} type="button" aria-label={`${t.news.readMore} ${item.title}`}>
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
