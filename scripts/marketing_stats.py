# /// script
# requires-python = ">=3.11"
# dependencies = ["psycopg2-binary"]
# ///
"""
Fetch platform stats for the social proof strip.

Usage:
  set DATABASE_PUBLIC_URL=<railway-postgres-url>
  uv run python scripts/marketing_stats.py
"""

import os
import sys
import math
import psycopg2

url = os.environ.get("DATABASE_PUBLIC_URL") or os.environ.get("DATABASE_URL")
if not url:
    sys.exit("ERROR: set DATABASE_PUBLIC_URL before running this script.")

conn = psycopg2.connect(url)
cur = conn.cursor()

def floor_milestone(n: int, magnitude: int) -> str:
    """Round down to nearest magnitude and return '14,000+' style string."""
    floored = (n // magnitude) * magnitude
    return f"{floored:,}+"

cur.execute("SELECT COUNT(*) FROM filings;")
filings_raw = cur.fetchone()[0]

# Real (non-ghost) dockets only — jurisdiction IS NULL rows are legacy stubs.
cur.execute("SELECT COUNT(*) FROM dockets WHERE jurisdiction IS NOT NULL;")
dockets_raw = cur.fetchone()[0]

# Deadline events live in the extractions payload (deadlines JSON array), not a
# standalone table. Sum the array lengths across all extractions.
cur.execute(
    "SELECT COALESCE(SUM(jsonb_array_length(payload->'deadlines')), 0) "
    "FROM extractions WHERE jsonb_typeof(payload->'deadlines') = 'array';"
)
deadlines_raw = cur.fetchone()[0]

cur.close()
conn.close()

# Pick magnitude: 1000 if <100k, else 10000
def pick_magnitude(n):
    if n < 10_000:
        return 1_000
    if n < 100_000:
        return 5_000
    return 10_000

filings_str   = floor_milestone(filings_raw,   pick_magnitude(filings_raw))
dockets_str   = floor_milestone(dockets_raw,   pick_magnitude(dockets_raw))
deadlines_str = floor_milestone(deadlines_raw, pick_magnitude(deadlines_raw))

print("\n── Raw counts ──")
print(f"  filings:   {filings_raw:,}")
print(f"  dockets:   {dockets_raw:,}")
print(f"  deadlines: {deadlines_raw:,}")

print("\n── Paste into src/data/stats.ts ──")
print(f"""export const STATS = {{
  filings:   '{filings_str}',
  dockets:   '{dockets_str}',
  deadlines: '{deadlines_str}',
}} as const;""")
