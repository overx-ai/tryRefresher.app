// Single source of truth for every indexable route.
// Two consumers read it — BaseLayout (canonical) and sitemap.xml.ts — so they
// cannot drift. An unregistered page is invisible to crawlers.
//
// English-only today. When a second locale lands, widen this to
// { slug, locales[] } rather than a boolean; see CLAUDE.md.
export const SITE_PAGES = ['', 'support', 'privacy', 'terms', 'press'] as const;

export type Slug = (typeof SITE_PAGES)[number];

export const pathFor = (slug: string) => (slug ? `/${slug}` : '/');
