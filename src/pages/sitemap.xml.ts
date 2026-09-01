import type { APIRoute } from 'astro';
import { SITE_PAGES, pathFor } from '../site-pages';

// Hand-rolled rather than @astrojs/sitemap so the sitemap and the head tags read
// from the same manifest and cannot drift.
export const GET: APIRoute = ({ site }) => {
  const origin = (site?.toString() ?? 'https://tryrefresher.app').replace(/\/$/, '');
  const urls = SITE_PAGES.map((slug) => {
    const priority = slug === '' ? '1.0' : slug === 'support' ? '0.7' : '0.5';
    return `  <url>\n    <loc>${origin}${pathFor(slug)}</loc>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
