// Shared record-page SEO thresholds, used by BOTH the record page (for the
// robots noindex meta) and astro.config.mjs (to drop thin pages from the
// sitemap) so the two never drift.
//
// item_count = number of haiku_verdict='relevant' extractions for a (market,
// date) — i.e. how many filing items the page actually renders. Pages below the
// floor are genuinely thin (a quiet day with 1–2 relevant filings); Google marks
// them "crawled, currently not indexed" and they drag on domain quality. We keep
// them live (no 404s) but noindex them and leave them out of the sitemap.
export const MIN_INDEXABLE_ITEMS = 3;

export function recordPath(market, date) {
  return `/record/${market}/${date}/`;
}
