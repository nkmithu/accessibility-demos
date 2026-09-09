# Instructor answer key — Riverline Books sample site

**Do not give this to students before they have completed their own audit.**

This is the register of defects deliberately seeded into the sample site, with the
success criterion each one fails, its severity, and the fix. Use it to mark student
reports and to run the debrief.

The site targets **WCAG 2.2 Level AA**. AAA criteria are noted where relevant but
are not part of the conformance result.

---

## How the sample is rigged

The defects are placed so that **sampling technique changes the result**:

| If the student samples… | They find | They miss |
|---|---|---|
| Home page only | 6 defects | Everything below |
| Pages linked from the home nav | ~18 defects | The keyboard trap, all checkout defects |
| A correct structured sample (all 8 pages, all essential tasks) | All 34 | — |

The three most severe defects — the **keyboard trap** on `login.html`, the
**drag-only reorder** on `catalogue.html`, and the **checkout with no error
identification** — are all reachable only by working through an essential task.
A student who audits "the main pages" will report a site in far better shape than
it is. That is the lesson of Step 3.

---

## Site-wide defects (in `assets/site.css`)

| # | Criterion | Level | Severity | Location | Problem | Fix |
|---|---|---|---|---|---|---|
| 1 | 2.4.7 Focus Visible | AA | **Blocker** | `site.css`, `*:focus{outline:none}` | Focus indicator removed on every control on every page. A sighted keyboard user cannot tell where they are anywhere on the site. | Remove the rule. Add a `:focus-visible` rule with a 3px outline at ≥3:1. |
| 2 | 1.4.11 Non-text Contrast | AA | Serious | `site.css`, input border `#f0eee9` | Form field borders are 1.2:1 against white. The label is readable; the field is invisible. | Border ≥3:1 — e.g. `#6d7883`. |
| 3 | 1.4.3 Contrast (Minimum) | AA | Serious | `site.css`, `.muted` = `#8b9199` | Secondary text at 2.6:1 against white. Used on the home page and catalogue. | Darken to ≥4.5:1 — e.g. `#444c55`. |
| 4 | 2.4.1 Bypass Blocks | A | Serious | Every page | No skip link, no `<main>`, no landmarks on any page. Nothing to bypass the masthead and nav with. | Add a skip link, wrap content in `<main id="main" tabindex="-1">`, use `<header>`/`<nav>`/`<footer>`. |
| 5 | 3.2.3 Consistent Navigation | AA | Moderate | `index.html` vs `catalogue.html` | The main nav is in a different order on the home page and the catalogue. | One nav order everywhere. |
| 6 | 3.2.4 Consistent Identification | AA | Moderate | home / catalogue / product | The same action is "Add to basket", "Buy now" and "Get it". | One name for one function. |

## `index.html` — Home

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 7 | 1.1.1 Non-text Content | A | Serious | Hero image has **no `alt` attribute**. Screen readers announce the filename. | Add `alt` describing the image, or `alt=""` if decorative. |
| 8 | 1.1.1 Non-text Content | A | Moderate | Three book covers use `alt="book"` — present but meaningless. Passes every scanner. | `alt="The Long Field cover"` etc., or `alt=""` since the title follows in a heading. |
| 9 | 2.2.2 Pause, Stop, Hide | A | Serious | The staff-picks carousel advances every 3s with no pause, stop or hide control. | Add a pause control before the carousel; honour `prefers-reduced-motion`. |
| 10 | 4.1.3 Status Messages | AA | Moderate | The carousel swaps content with no live region, so a screen reader user is never told. | Either announce it politely, or (better) stop it auto-advancing. |
| 11 | 2.4.4 Link Purpose | A | Moderate | "Read more" with no context in the link text. | "Read more about the spring festival". |

## `catalogue.html` — Listing

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 12 | 2.5.7 Dragging Movements | AA | **Blocker** | The shortlist can be reordered **only by dragging**. No buttons, no keyboard route. | Add Move up / Move down buttons. Keep drag as an extra. |
| 13 | 2.1.1 Keyboard | A | **Blocker** | Same control — it is entirely unreachable by keyboard. | As above. |
| 14 | 1.3.1 Info and Relationships | A | Serious | The four filter checkboxes have no `fieldset`/`legend`; "Filter by" is a styled div. | Wrap in `<fieldset><legend>Filter by</legend>`. |
| 15 | 4.1.3 Status Messages | AA | Serious | The result count changes on Apply with no live region. | `role="status"` on the count, present in the DOM at load. |
| 16 | 2.4.4 / 2.4.9 Link Purpose | A / AAA | Moderate | Three identical "View" links with no programmatic context. | Make the heading the link, or add visually hidden text. |

## `product.html` — Detail

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 17 | 1.1.1 Non-text Content | A | Serious | Cover image has `alt="image"`. | Describe it, or `alt=""` — the title is already in the `h1`. |
| 18 | 4.1.2 Name, Role, Value | A | **Blocker** | The star rating is five `span`s with click handlers. No role, no name, no state, not focusable. | Use radio buttons in a fieldset, or buttons with `aria-pressed`. |
| 19 | 2.1.1 Keyboard | A | **Blocker** | Same control — cannot be rated by keyboard. | As above. |
| 20 | 1.4.1 Use of Color | A | Serious | Branch stock is shown by coloured dots alone. Indistinguishable in greyscale. | Add text: "In stock", "Out of stock". |
| 21 | 2.5.8 Target Size (Minimum) | AA | Moderate | Quantity steppers are 18×18 px, under the 24×24 minimum, and closely spaced. | Pad to ≥24×24 (44×44 preferred). |
| 22 | 3.3.2 Labels or Instructions | A | Serious | The quantity input has no label. | `<label for="qty">Quantity</label>`. |

## `cart.html` — Basket

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 23 | 1.3.1 Info and Relationships | A | **Blocker** | The basket table has no `th`, no `scope`, no `caption`. Every cell is a `td`, so values are announced with no column or row context. | Real `thead`/`th scope="col"`, row headers, and a `caption`. |
| 24 | 3.3.2 Labels or Instructions | A | Serious | Quantity inputs in each row have no labels. | Label each, e.g. `aria-label="Quantity for Tidal Flats"`. |
| 25 | 2.5.8 Target Size (Minimum) | AA | Serious | Remove buttons are 16×16 px. | ≥24×24; 44×44 for a destructive action. |
| 26 | 4.1.2 Name, Role, Value | A | Serious | The remove button's accessible name is "×". | `aria-label="Remove Tidal Flats from basket"`. |
| 27 | 4.1.3 Status Messages | AA | Moderate | Removing a row writes a message into a plain `<p>` — never announced. | `role="status"` on that paragraph. |

## `checkout.html` — Payment

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 28 | 3.3.1 Error Identification | A | **Blocker** | Validation errors are a red border only. No text, no association, no `aria-invalid`, no announcement. | Text message per field, tied with `aria-describedby`; error summary focused on submit. |
| 29 | 1.4.1 Use of Color | A | **Blocker** | Same defect seen from the colour angle: the only error signal is colour. | As above. |
| 30 | 3.3.3 Error Suggestion | AA | Serious | No message at all, so certainly no suggested correction. | State what is wrong and what a valid value looks like. |
| 31 | 3.3.2 Labels or Instructions | A | Serious | Every field is placeholder-only. Labels vanish on typing; "Expiry" format never stated. | Persistent `<label>` per field, plus format hints. |
| 32 | 1.3.5 Identify Input Purpose | AA | Serious | No `autocomplete` tokens anywhere, so autofill cannot help. | `name`, `street-address`, `postal-code`, `cc-number`, `cc-exp`, `cc-csc`. |
| 33 | 3.3.7 Redundant Entry | A | Serious | Billing address demands the same information as delivery, with no reuse. | "Same as delivery address", checked by default. |
| 34 | 3.3.4 Error Prevention | AA | **Blocker** | A payment is taken on one press: no review, no confirmation, no reversal. | Add a review-and-confirm step. |
| 35 | 2.4.8 Location (AAA) | AAA | Minor | No step indicator in a multi-step process. | "Step 3 of 4", also in the page title. |

## `login.html` — Authentication

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 36 | 2.1.2 No Keyboard Trap | A | **Blocker** | The password-reset dialog traps focus permanently. Escape does nothing, there is no close button. The only escape is closing the tab. **This is the most severe defect on the site.** | Handle Escape, add a visible Close button, return focus to the trigger. |
| 37 | 2.4.3 Focus Order | A | Serious | The dialog opens without moving focus into it, and does not restore focus on close. | Move focus to the dialog heading; restore to the opener. |
| 38 | 1.3.1 / 3.3.2 Labels | A | Serious | "Email address", "Password" and "Characters" are plain divs — no `<label>`, no association. | Real `<label for>` on each. |
| 39 | 3.3.8 Accessible Authentication | AA | **Blocker** | Paste is blocked (`onpaste="return false"`) and `autocomplete="off"` — password managers cannot work. | Remove both; use `autocomplete="username"` / `"current-password"`. |
| 40 | 3.3.8 Accessible Authentication | AA | **Blocker** | A distorted-text CAPTCHA — a cognitive function test with no alternative. | Remove it; use risk scoring or rate limiting. |
| 41 | 1.1.1 Non-text Content | A | Serious | The CAPTCHA string is visual only, with no text alternative. | Not fixable as a CAPTCHA — remove it. |

## `contact.html` — Contact form

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 42 | 2.1.1 Keyboard | A | **Blocker** | "Send message" and "Start again" are `div`s with click handlers. The form cannot be submitted by keyboard at all. | Use `<button type="submit">` and `<button type="reset">`. |
| 43 | 4.1.2 Name, Role, Value | A | **Blocker** | Neither control has a role or an accessible name. | As above. |
| 44 | 1.3.3 Sensory Characteristics | A | Serious | "Press the green button on the right… the orange button on the left." Colour, shape and position only. | Refer to the controls by name. |
| 45 | 2.4.3 Focus Order | A | Serious | The confirmation dialog appears without focus moving into it. | Move focus to it; return focus on close. |
| 46 | 4.1.3 Status Messages | AA | Serious | The confirmation is not in a live region and does not take focus, so a screen reader user never learns the message was sent. | Focus the dialog, or announce with `role="status"`. |

## `help.html` — Help and FAQs

| # | Criterion | Level | Severity | Problem | Fix |
|---|---|---|---|---|---|
| 47 | 3.1.1 Language of Page | A | Serious | No `lang` attribute on `<html>`. | `<html lang="en">`. |
| 48 | 2.4.2 Page Titled | A | Serious | `<title>Untitled Document</title>`. | "Help and FAQs — Riverline Books". |
| 49 | 1.3.1 Info and Relationships | A | **Blocker** | Every heading is a styled `div`. The page has no heading structure, so it cannot be navigated by heading — on the longest page of the site. | Use `h1`–`h3`. |
| 50 | 2.4.6 Headings and Labels | AA | Serious | Even as text, the headings are "Information", "More", "Details", "Other" — they describe nothing. | "Delivery and collection", "Returns and refunds", "Trade terms", "Access at our shops". |
| 51 | 1.4.5 Images of Text | AA | Serious | The page heading is an image of text. | Real text styled with CSS. |
| 52 | 3.2.6 Consistent Help | A | Moderate | "Help" is in the main nav on every other page; here it is absent from the nav and appears only at the foot of the page, renamed "Get in touch". | Keep the help mechanism in the same relative place, with the same name. |
| 53 | 3.1.3 Unusual Words (AAA) | AAA | Minor | "foxing", "ex-libris", "remainder marks", "ballpark figure" — jargon and an idiom, undefined. | Define at first use or in a glossary. |
| 54 | 3.1.4 Abbreviations (AAA) | AAA | Minor | RRP, VAT, SIC never expanded. | Expand at first use. |
| 55 | 2.4.10 Section Headings (AAA) | AAA | Minor | Long content divided into topics with no real headings. | Covered by fixing #49. |
| 56 | 3.1.5 Reading Level (AAA) | AAA | Minor | The returns paragraph is a single 60-word sentence. | Add a plain-language summary. |

---

## Marking guidance

**Expected at AA (the conformance target):** defects 1–34, 36–52. That is
**51 findings across 15 distinct criteria**, though a good report will aggregate
them into far fewer entries — several are one root cause across many pages.

**A strong report will:**
- Aggregate #1, #2 and #3 as single stylesheet defects affecting all 8 pages, not
  as 24 separate findings.
- Identify #36 (keyboard trap) as the highest priority, ahead of anything cosmetic.
- Notice that #12/#13 and #18/#19 are each *one* defect failing *two* criteria, and
  report them once against both.
- Catch the cross-page criteria (#5, #6, #52) — these are invisible when auditing
  page by page and are the most commonly missed.
- State the conformance result correctly: *"The 8 pages evaluated do not meet
  WCAG 2.2 Level AA"*, never a percentage.

**Common student mistakes:**
- Reporting only what axe found (it finds roughly 8 of these 56).
- Missing every cross-page criterion.
- Never reaching `checkout.html` or the reset dialog on `login.html`.
- Recording "N/A" without saying why.
- Ranking a missing `alt` on a decorative image above a keyboard trap.
