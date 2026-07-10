import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { MIN_INDEXABLE_ITEMS, recordPath } from './src/lib/record-seo.mjs';

// Thin record pages are noindexed (see record/[market]/[date].astro). Keep them
// out of the sitemap too, so Google isn't invited to crawl what we've told it not
// to index. Fetch the same build manifest the record pages use and collect the
// thin paths (item_count = relevant-extraction count). Degrades to an empty set
// (include everything) if the services API is unreachable at build time.
const servicesUrl =
  process.env.PUBLIC_SERVICES_URL ?? 'https://nodalpulse-services-production.up.railway.app';
const thinRecordPaths = new Set();
try {
  const res = await fetch(`${servicesUrl}/public/record/index`, {
    signal: AbortSignal.timeout(15000),
  });
  if (res.ok) {
    for (const { market, date, item_count } of await res.json()) {
      if ((item_count ?? 0) < MIN_INDEXABLE_ITEMS) thinRecordPaths.add(recordPath(market, date));
    }
    console.log(`[sitemap] excluding ${thinRecordPaths.size} thin record pages (< ${MIN_INDEXABLE_ITEMS} items)`);
  } else {
    console.warn(`[sitemap] /public/record/index returned ${res.status} — no thin-page exclusion`);
  }
} catch (e) {
  console.warn('[sitemap] could not fetch record index — no thin-page exclusion', e);
}

export default defineConfig({
  output: 'static',
  site: 'https://nodalpulse.com',
  trailingSlash: 'always',
  // /digest was an unfinished lead-magnet stub (placeholder, never wired to data)
  // — removed. Redirect the two slugs that ever existed to home so any crawled
  // stub resolves instead of 404ing. The lead magnet now lives on record pages.
  redirects: {
    '/digest': '/',
    '/digest/today': '/',
    '/digest/2026-05-09': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/digest/')) return false;
        return !thinRecordPaths.has(new URL(page).pathname);
      },
    }),
  ],
});
