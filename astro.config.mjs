import { defineConfig } from 'astro/config';

// No integrations. @astrojs/sitemap is deliberately absent — src/pages/sitemap.xml.ts
// generates it from the one page manifest, which is also what drives the head tags.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://tryrefresher.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Inline the CSS so first paint costs no extra request.
    inlineStylesheets: 'always',
  },
});
