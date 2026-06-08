---
title: "How daily briefs work"
description: "When the crawl runs, when your brief arrives, what each item means, and how to use the citations."
category: features
order: 2
updatedDate: 2026-06-08
draft: false
---

## The nightly crawl

NodalPulse runs nightly crawls against each source system — PUCT Interchange, ERCOT stakeholder pages, CAISO filings index, FERC eLibrary, Independent Market Monitor — pulling new and updated documents since the previous run.

Each document is extracted into structured fields: parties, positions, dollar amounts, effective dates, procedural deadlines, and citations to the source.

## When your brief arrives

Briefs are assembled and delivered by **6:00 AM** in your primary market's time zone (Central for Texas, Pacific for California, Eastern for PJM).

If your tracked dockets had no new activity overnight, no brief is sent. You get signal, not noise.

## What's in each brief item

Each item corresponds to one filing or stakeholder event in a docket you track:

- **Docket and proceeding name** — what was filed, in which proceeding
- **Filing type and parties** — who filed, what kind of document (tariff filing, protest, order, notice, etc.)
- **Extracted positions** — what the filer argued or requested, drawn from the text with a citation
- **Dollar amounts** — rate impacts, budget items, or cost figures extracted from the document where present
- **Deadlines** — each labeled `confirmed` or `est. — verify`. See [Deadlines: confirmed vs. estimated](/help/deadlines-confirmed-vs-estimated).
- **Source link** — direct URL to the original filing on the commission or operator's system

## How citations work

Every substantive claim in a brief item links to its source: a specific document, filing date, and — where the PDF permits — a paragraph or page reference.

The brief tells you what was filed and points you to exactly where. When you need to quote the record in a memo or a filing of your own, the citation in the brief is your starting point, not a stopping point.

## What's not in a brief

**Documents outside the crawled window.** If a filing hasn't appeared in the commission's public index yet, it's not in the brief. Publication lags vary by source — see [Limitations](/limitations) for the honest account by market.

**Oral proceedings, ex parte communications, and internal staff documents.** Only public filings in the indexed systems are covered.

**Unsourced claims.** Every substantive item carries a citation. If we couldn't source it, it doesn't appear.

## The pipeline and sources

For how filings go from source system to your brief, see [Methodology](/methodology). For the complete list of sources crawled per market, see [Sources](/sources).
