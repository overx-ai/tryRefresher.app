// Single source of truth for every indexable route.
// Two consumers read it — BaseLayout (canonical, via pathFor) and sitemap.xml.ts —
// so they cannot drift. An unregistered page is invisible to crawlers.
//
// `lastmod` is a claim made to search engines, not a build artefact. Google uses it
// only while it stays accurate, and discounts it once it doesn't, so bump a date
// only when that page's copy actually changed. Never wire it to the build clock:
// nine pages all claiming to change on every deploy is worse than no date at all.
//
// `locale` defaults to 'en'. A de/es entry is a native page, not a twin of an
// English one, so it is self-canonical and carries no hreflang; see CLAUDE.md.
export const LOCALES = { en: 'en-US', de: 'de-DE', es: 'es-ES' } as const;
export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';

export interface SitePage { slug: string; lastmod: string; locale?: Locale }

export const SITE_PAGES = [
  { slug: '',                       lastmod: '2026-09-02' },
  { slug: 'support',                lastmod: '2026-09-02' },
  { slug: 'privacy',                lastmod: '2026-09-03' },
  { slug: 'terms',                  lastmod: '2026-09-03' },
  { slug: 'press',                  lastmod: '2026-10-19' },
  { slug: 'community',              lastmod: '2026-10-19' },
  { slug: 'box-breathing-app',      lastmod: '2026-10-09' },
  { slug: 'coherent-breathing-app', lastmod: '2026-11-09' },
  { slug: 'hrv-breathing-app',      lastmod: '2026-11-09' },
  { slug: '4-7-8-breathing-app',    lastmod: '2026-10-09' },
  { slug: 'wim-hof-breathing-app',  lastmod: '2026-09-23' },
  { slug: 'resonance-frequency-breathing', lastmod: '2026-11-09' },
  { slug: 'paced-breathing',        lastmod: '2026-11-09' },
  { slug: 'kohaerentes-atmen',      lastmod: '2026-10-26', locale: 'de' },
  { slug: 'box-atmung-app',         lastmod: '2026-10-26', locale: 'de' },
  { slug: 'respiracion-coherente',  lastmod: '2026-11-02', locale: 'es' },
  { slug: 'respiracion-cuadrada',   lastmod: '2026-11-02', locale: 'es' },
] as const satisfies readonly SitePage[];

export type Slug = (typeof SITE_PAGES)[number]['slug'];

export const LANGUAGE_NAMES: Record<Locale, string> = { en: 'English', de: 'Deutsch', es: 'Español' };

// One topic, written natively per locale. Each page links to the others as related
// reading in another language. They are separate self-canonical articles, so this is
// never an hreflang group; it exists to give de/es pages inbound links from en.
export const TOPIC_PEERS: Partial<Record<Locale, { slug: Slug; title: string }>>[] = [
  {
    en: { slug: 'coherent-breathing-app', title: 'Coherent breathing app' },
    de: { slug: 'kohaerentes-atmen', title: 'Kohärentes Atmen' },
    es: { slug: 'respiracion-coherente', title: 'Respiración coherente' },
  },
  {
    en: { slug: 'box-breathing-app', title: 'Box breathing app' },
    de: { slug: 'box-atmung-app', title: 'Box-Atmung App' },
    es: { slug: 'respiracion-cuadrada', title: 'Respiración cuadrada' },
  },
];

export const pathFor = (slug: string, locale: Locale = DEFAULT_LOCALE) => {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}` : prefix || '/';
};

// Fails the build when a page or a sibling link points at a slug that has no
// entry in that locale, which would otherwise ship a 404 or a wrong canonical.
export const registeredPath = (slug: string, locale: Locale) => {
  const pages: readonly SitePage[] = SITE_PAGES;
  if (!pages.some((e) => e.slug === slug && (e.locale ?? DEFAULT_LOCALE) === locale)) {
    throw new Error(`No SITE_PAGES entry for slug "${slug}" in locale "${locale}"`);
  }
  return pathFor(slug, locale);
};

export const topicPeers = (slug: string, locale: Locale) => {
  const group = TOPIC_PEERS.find((g) => g[locale]?.slug === slug) ?? {};
  return (Object.entries(group) as [Locale, { slug: Slug; title: string }][])
    .filter(([l]) => l !== locale)
    .map(([l, peer]) => ({ ...peer, locale: l, href: registeredPath(peer.slug, l) }));
};
