---
title: "Ask the Record — what it does and what it doesn't"
description: "Ask the Record answers questions grounded in your tracked corpus with verifiable citations. It is not a general-purpose AI assistant and will say so when it doesn't know."
category: features
order: 4
updatedDate: 2026-06-08
draft: false
---

## What it is

Ask the Record is a query layer over your tracked docket corpus. You ask a question in plain English — "What's [party]'s latest position in ER23-2309?" — and the answer comes from the actual extracted filing text, with citations back to the specific document and paragraph.

It is not a web search. It is not a general-purpose AI assistant. It answers from what was filed in your tracked dockets, and only that.

## What it returns

Every answer includes:

- **The answer** — drawn from extracted filing text, not generated from memory or training data
- **A citation** — the specific document, filing date, and paragraph or page reference in the source system
- **An honest limit** — if the corpus has thin coverage of a topic (a cross-referenced docket you haven't tracked, a document outside the indexed window), Ask the Record says so

If the answer isn't in the record, Ask the Record says it doesn't know. It does not fill gaps with inference or general knowledge.

## What it answers well

- Party positions: "What did [company] argue in the last three filings on [issue]?"
- Procedural history: "What happened in this docket between March and June?"
- Document location: "Find every mention of [term] in this docket's testimony, with exact citations."
- Cross-party comparison: "How do the different parties' positions on [issue] differ in this proceeding?"
- Commission staff statements: "What did staff say in their latest comment on [tariff]? Cite the page."

## What it does not do

**It does not forecast or predict.** Ask the Record answers from the record as filed. It cannot tell you how a proceeding will end, which party's position the commission will adopt, or what a filing will do to prices. If your question calls for a prediction, Ask the Record returns what the record shows — not an extrapolation beyond it.

**It does not provide legal advice.** Answers are grounded in the regulatory record and labeled as such. They are not legal analysis, do not create attorney-client privilege, and do not substitute for professional legal judgment about your specific situation or filing obligations.

**It does not search beyond your tracked corpus.** If a relevant filing is in a docket you haven't added to your tracked list, it won't appear in the answer. The answer will note when your question appears to call for dockets outside your tracked set.

**It does not generate text.** There are no hallucinated facts, invented citations, or summaries of documents that weren't filed. If a claim can't be sourced to the record, it is not in the answer.

## How it differs from ChatGPT or Claude

General-purpose assistants draw on web indexes that capture a fraction of PUCT Interchange and FERC filings — often 30–40% at best — with no guarantee of currency. They can generate plausible-sounding citations that don't correspond to real documents.

Ask the Record runs against NodalPulse's own extracted corpus, built from purpose-built crawlers that hit the source systems directly on submission. Every claim links to a real document in the commission's public record. If we can't source it, we don't say it.

## When it says it doesn't know

That is the right answer. A system that always produces an answer — even when the record is silent — is a reliability problem dressed up as a feature. Ask the Record errs on the side of honest limits.

If the answer exists in a docket you haven't tracked yet, add that docket and ask again.