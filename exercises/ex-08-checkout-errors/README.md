# Exercise 8 — Checkout errors

**Difficulty:** ●●●●○ · **Criteria:** 3.3.1 (A), 3.3.3 (AA), 1.4.1 (A), 3.3.4 (AA), 1.3.5 (AA), 4.1.3 (AA)

Submit the empty form with a screen reader running. You will hear nothing at all: the only
signal is a red border.

## Your task

Build error handling that works, on a page where getting it wrong costs the user money.

## Acceptance criteria

**Identifying the error (3.3.1)**
- [ ] Each error is described **in text**, next to its field.
- [ ] Each message is tied to its field with `aria-describedby`.
- [ ] Invalid fields carry `aria-invalid="true"` — and lose it when corrected.
- [ ] An **error summary** appears at the top, receives focus on submit, and links to each field.

**Suggesting the fix (3.3.3)**
- [ ] Messages say what a valid value looks like — "Enter the expiry date as MM/YY, for
      example 04/28" — not "Invalid".
- [ ] The format is stated **before** submission, not only in the error.

**Not relying on colour (1.4.1)**
- [ ] Errors are distinguishable in greyscale.

**Preventing the error (3.3.4)**
- [ ] Because this takes money, add a review-and-confirm step before payment.

**Also**
- [ ] Correct `autocomplete` tokens (`email`, `cc-number`, `cc-exp`).
- [ ] The success message is announced (4.1.3).

## Hint

The error summary pattern — a focused, alerting region at the top of the form linking to
each bad field — solves most of this at once.
See [3.3.1](../../demos/3.3.1-error-identification/index.html) and
[3.3.3](../../demos/3.3.3-error-suggestion/index.html).
