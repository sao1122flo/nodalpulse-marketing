// Platform stats — regenerate before each deploy with scripts/marketing_stats.py
// (or run the SQL directly):
//   SELECT COUNT(*) FROM filings;
//   SELECT COUNT(*) FROM dockets WHERE jurisdiction IS NOT NULL;
//   SELECT COALESCE(SUM(jsonb_array_length(payload->'deadlines')),0)
//     FROM extractions WHERE jsonb_typeof(payload->'deadlines')='array';
// Round DOWN to nearest conservative milestone (e.g. 14,312 → "14,000+"). Never round up.
// Last refreshed 2026-07-02 from prod: 40,531 filings / 2,187 dockets / 2,390 deadlines.
export const STATS = {
  filings:   '40,000+',
  dockets:   '2,000+',
  deadlines: '2,000+',
} as const;
