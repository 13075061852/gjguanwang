CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  locale TEXT NOT NULL DEFAULT 'en',
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  cover_key TEXT,
  published_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  created_at TEXT NOT NULL
);

INSERT OR IGNORE INTO news (id, locale, title, summary, cover_key, published_at)
VALUES
  ('chinaplas-2026-en', 'en', 'Thank You for Visiting Us at Chinaplas 2026', 'GJ Guangjun met partners and shared new modified plastics solutions for export markets.', 'news/company.jpg', '2026-05-15T00:00:00Z'),
  ('rd-upgrade-en', 'en', 'New R&D Lab Upgrade Strengthens Material Innovation', 'The upgraded lab expands testing and formulation support for global manufacturing customers.', 'news/tech.jpg', '2026-04-28T00:00:00Z'),
  ('gf-series-en', 'en', 'New Glass Fiber Reinforced Series for Demanding Applications', 'A new reinforced material series supports higher stiffness and process stability.', 'news/industry.jpg', '2026-04-10T00:00:00Z');
