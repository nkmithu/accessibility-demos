# Exercise 9 — Audit a single page

**Difficulty:** ●●●●○ · **Covers:** WCAG-EM Step 4, and most of WCAG 2.2 Level AA

This is your first real audit. No code to fix — you are producing a finding, which is a
different skill.

## Your task

Audit **one page** of the [Riverline Books sample site](../../evaluation/sample-site/index.html)
against **WCAG 2.2 Level AA**. Your instructor will assign the page, or pick
`checkout.html` — it is the richest.

## Method

1. Print or open the [audit record](../../evaluation/templates/audit-record.html).
2. Work the [testing sequence](../../testing/index.html#order): automated scan, keyboard,
   zoom and reflow, text spacing, screen reader, error states, content review.
3. Record **every** Level A and AA criterion as pass, fail or not applicable.

## Acceptance criteria

- [ ] All 55 Level A and AA criteria have a recorded outcome. None left blank.
- [ ] Every "not applicable" says **why** — "no video on this page", not just "N/A".
- [ ] Every failure records: the criterion, the location (a selector or clear
      description), what happens, how you found it, who it affects, and a suggested fix.
- [ ] Findings are ranked by severity, and severity reflects **user impact**, not how
      easy the fix is.
- [ ] You found at least one defect that your automated scan did not.

## Marking

Compare your findings against the instructor's key. Ask yourself two questions:

- **What did I miss, and why?** Which test would have caught it?
- **What did I report that is not actually a failure?** False positives cost a real
  audit its credibility.
