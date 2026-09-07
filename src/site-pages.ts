// Single source of truth for every indexable route.
// Two consumers read it — BaseLayout (canonical, via pathFor) and sitemap.xml.ts —
// so they cannot drift. An unregistered page is invisible to crawlers.
//
// `lastmod` is a claim made to search engines, not a build artefact. Google uses it
// only while it stays accurate, and discounts it once it doesn't, so bump a date
// only when that page's copy actually changed. Never wire it to the build clock:
// nine pages all claiming to change on every deploy is worse than no date at all.
//
// English-only today. When a second locale lands, add a `locales[]` field here
// rather than a boolean; see CLAUDE.md.
export const SITE_PAGES = [
  { slug: '',                       lastmod: '2026-09-02' },
  { slug: 'support',                lastmod: '2026-09-02' },
  { slug: 'privacy',                lastmod: '2026-09-03' },
  { slug: 'terms',                  lastmod: '2026-09-03' },
  { slug: 'press',                  lastmod: '2026-09-02' },
  { slug: 'box-breathing-app',      lastmod: '2026-09-02' },
  { slug: 'coherent-breathing-app', lastmod: '2026-09-02' },
  { slug: 'hrv-breathing-app',      lastmod: '2026-09-02' },
  { slug: '4-7-8-breathing-app',    lastmod: '2026-09-02' },
] as const;

export type Slug = (typeof SITE_PAGES)[number]['slug'];

export const pathFor = (slug: string) => (slug ? `/${slug}` : '/');
