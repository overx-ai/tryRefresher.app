---
id: 001
title: "German and Spanish technique pages, with the minimum locale plumbing"
status: done
priority: p1
created: 2026-10-21
updated: 2026-10-21
repo: refresher
release:
story:
depends_on: []
conflicts_with: []
tasks: [T1, T2, T3]
source: owner, 2026-10-21: "creating articles in popular european languages so that we can rate for other locales better ... we must push more articles"; pilot locales de/es
---

# 001 - de and es technique pages

> **TL;DR** - The site gains `/de/...` and `/es/...` technique pages. They are written natively from each locale's own
> keyword research (e.g. "Box-Atmung", "respiración cuadrada") and are never translations of the English pages. The
> `SITE_PAGES` manifest gets the `locales[]` field that CLAUDE.md already planned. No i18n library is added.

## Why
The app's UI ships in 7 languages and its App Store listing in 10 locales, but the website has only English. The
2026-10-09 GSC export shows 22 impressions and 1 click.

## Requirements
1. **T1 Manifest.** Each `SITE_PAGES` entry gets `locale` (default `en`). `pathFor(slug, locale)` gives
   `/{locale}/{slug}` for non-English pages. `BaseLayout` sets `<html lang>` (`en-US`/`de-DE`/`es-ES`) and `og:locale`
   from the entry. The sitemap lists every entry.
2. **T2 Canonical, no hreflang.** Localized technique pages are separate pages, not twins, so each one is
   self-canonical with no hreflang. The README build check (`grep -r 'hreflang' dist/`) stays as it is, since it still
   holds. CLAUDE.md's "English-only" rule changes to: native pages per locale, never translated, hreflang only for
   twins.
3. **T3 Content.** Pages are built with `TechniqueLayout.astro`. Its UI strings (headings, CTA, byline label) come from a
   small per-locale object next to the layout, chosen by the page's locale. Content is written via
   `/seo write <keyword> --lang de|es`, 2-3 pages per locale to start. The `seo/keywords.md` and `seo/published.md`
   tables gain a `Locale` column.

## Out of scope
- Localizing the home, support, privacy, terms, press or community pages.
- Locales beyond de and es until `/seo review` shows impressions.

## Verification
- `npm run build` passes. `dist/de/<slug>.html` has `lang="de-DE"` and its own canonical. `grep -r hreflang dist/`
  still finds nothing.
- `dist/sitemap.xml` lists the de and es URLs.

## Follow-ups before the first de/es page
- Header, Footer and BaseLayout `og:image:alt` are still English. Technique names and patterns in the datasheet come from `TECHNIQUES` in `src/app.ts` (English), so pass a native `crumb`.
- Writer flow: `src/pages/<locale>/<native-slug>.astro` with `TechniqueLayout locale="<locale>"`, plus a `SITE_PAGES` entry `{ slug, lastmod, locale }`. `registeredPath` fails the build when the pair is unregistered or a sibling slug is missing in that locale.
