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
  { slug: 'coherent-breathing-app', lastmod: '2026-10-09' },
  { slug: 'hrv-breathing-app',      lastmod: '2026-10-09' },
  { slug: '4-7-8-breathing-app',    lastmod: '2026-10-09' },
  { slug: 'wim-hof-breathing-app',  lastmod: '2026-09-23' },
  { slug: 'resonance-frequency-breathing', lastmod: '2026-10-09' },
] as const satisfies readonly SitePage[];

export type Slug = (typeof SITE_PAGES)[number]['slug'];

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
