import { APP } from './app';

// One MobileApplication object for every page that mentions the app, so the
// feature list and author cannot drift between the pillar and the technique pages.
export const appSchema = (site: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: APP.fullName,
  alternateName: ['Refresher', 'Refresher Breathing App'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS 18.0 or later, watchOS 10.0 or later',
  url: `${site}/`,
  image: `${site}/og-image.jpg`,
  downloadUrl: APP.appStoreUrl,
  installUrl: APP.appStoreUrl,
  sameAs: [APP.appStoreUrl],
  identifier: APP.appStoreId,
  author: { '@type': 'Person', name: APP.developer, url: APP.publisherUrl },
  datePublished: '2026-09-01',
  dateModified: '2026-09-02',
  publisher: { '@type': 'Organization', name: APP.publisher, url: APP.publisherUrl },
  isAccessibleForFree: true,
  featureList: [
    'Box breathing at 4-4-4-4, 4-7-8, coherent breathing at 5.5 breaths per minute, and the Wim Hof method',
    'A pacer with no drift between phases',
    'Heart rate before and after each session, measured on Apple Watch',
    'A 30-day HRV trend read from Apple Health',
    'HealthKit mindfulness-minute logging and iCloud sync',
    'Apple Watch app, Live Activities, and Home Screen widgets',
    'No ads, no account required',
  ],
});

export const breadcrumb = (site: string, name: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
    { '@type': 'ListItem', position: 2, name, item: `${site}/${slug}` },
  ],
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en-US',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
