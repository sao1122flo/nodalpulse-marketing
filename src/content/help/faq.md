---
title: "Frequently asked questions"
description: "Common questions about briefs, deadlines, Ask the Record, coverage, and billing — plus sample questions by role."
category: reference
order: 7
updatedDate: 2026-06-08
draft: false
---

<!-- STEP 2: Add FAQPage structured data via Base.astro's extraSchema prop.
     The [...slug].astro template currently passes schemaType="Article". For this page,
     extract the Q&A pairs into an extraSchema block so search engines serve them as rich results.
     Pattern: extraSchema={[{ "@type": "FAQPage", "mainEntity": [...] }]} -->

## General

**Is there a free trial?**

Yes — all markets start with a free trial on the Pro plan. No credit card required to start.

**How does regional pricing work?**

Each plan includes one region. Additional regions are available as add-ons. For current plan names, prices, and what each includes, see [Pricing](/pricing).

**Can I cancel anytime?**

Yes. Subscriptions are billed monthly and cancel from account settings at any time. Cancellation takes effect at the end of the current billing period with no fees.

**How is this different from asking ChatGPT or Claude?**

General-purpose AI assistants index a fraction of PUCT Interchange and FERC filings — often 30–40% at best — and may generate citations that don't correspond to real documents. NodalPulse runs purpose-built crawlers that hit source systems directly on submission. Every answer is grounded in extracted filing text with a verifiable source citation. Claims that can't be sourced are dropped before delivery.

**How does Ask the Record work?**

Ask a question in plain English about any docket or topic in your tracked corpus. The answer comes from the actual extracted filing text, with citations back to the specific document and paragraph. Not a web search. Not inference from training data. See [Ask the Record](/help/ask-the-record) for the full account of what it does and doesn't do.

**What sources are covered?**

Texas: PUCT Interchange (all filings), ERCOT stakeholder pages. California: CAISO filings index, FERC ER/EL dockets, CPUC proceedings. PJM: FERC eLibrary, Independent Market Monitor, PJM stakeholder and auction calendar. Full detail and roadmap at [Coverage](/coverage).

**What do "confirmed" and "est. — verify" mean on deadlines?**

Confirmed means the date came directly from a notice or order — cite is in the brief. Estimated means it was computed from a procedural rule. Both are labeled, and the source is linked. Full explanation: [Deadlines: confirmed vs. estimated](/help/deadlines-confirmed-vs-estimated).

---

## What you can ask

The following examples show the kinds of questions Ask the Record is built to handle, organized by role. They are drawn from real regulatory workflows. Not every question has an exact answer in every corpus — coverage depends on which dockets you track and what's been filed — but they represent the range the system handles well.

**Regulatory attorney** — "What's [party]'s latest position in ER23-2309, and how has it shifted since the initial filing?"

Party positions are extracted across the filing history of a docket. Ask the Record can show how arguments developed over time, with citations to each filing.

**Compliance manager** — "Which deadlines do I have in the next 30 days across my tracked dockets — and which are estimated vs. confirmed?"

The morning brief surfaces this automatically. Ask the Record can also query it on demand. Estimated deadlines are labeled; verify them before acting on them.

**Director of regulatory affairs** — "Summarize this week's CAISO activity affecting storage in five bullets."

Ask the Record synthesizes recent filings on a topic across your tracked proceedings and returns a structured summary with a source citation for each point.

**NERC reliability specialist** — "Any recent notices on [standard] that change reporting obligations?"

Ask the Record searches extracted text across your tracked corpus for matching notices and returns them with citations to the exact document and section.

**Interconnection manager** — "Which NPRR changes BESS interconnection queue priority in this docket, and when does the comment window close?"

Ask the Record identifies provisions within a docket that affect queue procedures and surfaces the relevant comment deadline. It returns the filing that introduced each change with a direct citation — not an interpretation of its commercial significance.

**Transmission developer** — "What routes and hearing dates are in play for the Bell County 765-kV CCN, and which deadlines are confirmed vs estimated?"

Ask the Record retrieves procedural milestones from the docket record — hearing notices, commission orders, and filed schedules. Confirmed dates came from a notice or order; estimated dates were computed from a procedural rule. Both are labeled, and sources are linked. See [Deadlines: confirmed vs. estimated](/help/deadlines-confirmed-vs-estimated).

**Multi-client consultant** — "Give me each party's position on [issue] across these three dockets for a memo."

Cross-docket position comparison with citations per party per docket. Because the citations are verifiable, you're not citing an AI in your deliverable — you're citing the record.

**In-house counsel** — "What did commission staff say in their latest comment on [tariff]? Cite the page."

Ask the Record returns the staff position from the extracted filing text with a link to the source document. Page-level citations are included where the PDF permits.

**Utility regulatory team** — "What disallowance did Cal Advocates recommend in the SoCalGas GRC, and how does it compare to the requested amount?"

Ask the Record extracts intervenor positions from filed testimony and surfaces them alongside the utility's request. Figures are drawn from the filings as submitted; where arithmetic is shown, the citation lets you verify independently.

**Government affairs and policy** — "What's the trend in how state commissions have treated [topic] this year?"

Ask the Record can surface patterns across a corpus of filings. Trend characterization is drawn from the record as filed. It does not assess where policy is heading.

**Market analyst** — "Any filings in the last 60 days that could affect [market assumption]?"

Ask the Record returns relevant filings and what parties argued — from the record as filed. It does not forecast price impacts, predict commission outcomes, or extrapolate beyond what was filed. If your question calls for a forward view, the answer will show you the record and stop there.

**Capacity trader** — "How did the latest PJM capacity auction clear, and what share did the Market Monitor attribute to data-center load?"

Ask the Record surfaces the Market Monitor's filed analysis from your tracked PJM dockets, with citations to the exact report and section. It does not model auction outcomes or project forward — it returns what was filed and attributed.

**Market design analyst** — "In Docket 57102, what ancillary-service market reforms is the commission considering, and when are initial comments due?"

Ask the Record retrieves the commission's proposed rule, any staff analysis filed in the docket, and the procedural schedule. Comment deadlines are labeled confirmed or estimated. If filings have moved overnight, they appear in the next morning brief.

**Expert witness and litigation support** — "Find every mention of [term] in this docket's testimony, with exact citations."

Ask the Record searches extracted text across a docket's filing history and returns matching passages with document, date, and paragraph citations.

**Junior analyst** — "Explain what a protest is and where I see response deadlines."

Ask the Record explains procedural concepts in the context of the regulatory record and shows where deadlines appear in filings. It is not legal advice and does not substitute for professional judgment. For guidance on your own filing obligations, consult a regulatory attorney.

---

## Market-specific questions

For questions specific to a market's coverage, sources, or terminology, see the market pages:

- [Texas](/texas) — PUCT and ERCOT coverage, no FERC jurisdiction
- [California](/california) — CAISO, FERC ER/EL, CPUC, initiative-linking, Beta limits
- [PJM](/pjm) — FERC-primary, RPM/RTEP structured fields, state commission rollout
