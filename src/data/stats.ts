// Platform stats — update before each deploy from SQL:
//   SELECT COUNT(*) FROM filings;
//   SELECT COUNT(DISTINCT docket_id) FROM dockets;
//   SELECT COUNT(*) FROM deadlines;
// Round DOWN to nearest conservative milestone (e.g. 14,312 → "14,000+").
export const STATS = {
  filings:   '8,000+',
  dockets:   '1,000+',
  deadlines: '3,000+',
} as const;
