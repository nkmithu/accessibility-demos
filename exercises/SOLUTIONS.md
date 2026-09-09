# Worked solutions — instructor copy

**Do not distribute before students have attempted the exercises.**

Each solution gives the key changes and the reasoning. Where a criterion has a demo in
this suite, the `pass.html` there is the fuller reference.

---

## Exercise 1 — Image gallery

| # | Problem | Fix |
|---|---|---|
| 1 | Photograph with no `alt` | `alt="The Riverside shop front on a grey morning"` — describe the information, not the file |
| 2 | Decorative divider with descriptive alt | `alt=""` — attribute present, value empty. Better still, move it to CSS |
| 3 | Icon-only button, no name | `aria-hidden="true"` + `focusable="false"` on the SVG, plus `<span class="visually-hidden">Search the catalogue</span>` |
| 4 | Chart with `alt="chart"` | Short alt stating the conclusion, plus a `<details>` table with the numbers |
| 5 | Logo link with `alt="badge"` | `alt="Riverline Books home"` — describes the **destination** |

**Discussion point.** axe catches #1 and #3 only. #2, #4 and #5 all pass every automated
scanner and fail every real user. That ratio is the lesson.

**Reference:** [1.1.1](../demos/1.1.1-non-text-content/pass.html)

---

## Exercise 2 — Sign-up form

- Each field gets `<label for="x">` matching the input's `id`.
- Placeholders removed as labels; used only for genuine examples, if at all.
- Radio group wrapped in `<fieldset><legend>How did you hear about us?</legend>`.
- "(required)" written into each label, plus the `required` attribute. The red asterisk
  alone fails 1.4.1.
- Password rules stated in hint text before the field, wired with `aria-describedby`.
- `autocomplete="name"`, `"email"`, `"new-password"` — satisfies 1.3.5 and makes the form
  usable for anyone with a password manager.

**Common student error:** adding `aria-label` instead of a visible `<label>`. That fixes
the screen reader announcement and leaves sighted users with a placeholder that vanishes
— and can break 2.5.3 if the two texts differ.

**Reference:** [3.3.2](../demos/3.3.2-labels-or-instructions/pass.html)

---

## Exercise 3 — Page structure

```html
<a class="skip" href="#main">Skip to main content</a>
<header><nav aria-label="Main"><ul>…</ul></nav></header>
<main id="main" tabindex="-1">
  <h1>Events this month</h1>
  <ul><li>12 April — Spring festival opening</li>…</ul>
  <h2>Getting here</h2>
</main>
<footer>…</footer>
```

Key points students miss:

- **`tabindex="-1"` on the skip target.** Without it the browser scrolls but leaves focus
  in the navigation, so the next Tab goes to link two. This is the single most common
  skip-link bug.
- The skip link must be **moved off-screen with `transform`**, not `display:none` — the
  latter removes it from the tab order entirely.
- Bullet characters typed into divs are not a list. `<ul>` tells a screen reader "3 items".

**Reference:** [2.4.1](../demos/2.4.1-bypass-blocks/pass.html)

---

## Exercise 4 — Modal dialog

The full pattern:

1. On open — store the trigger, show the dialog, move focus to its heading
   (`tabindex="-1"`) or first control.
2. While open — `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at the
   heading; trap Tab within the dialog; set `inert` on the background.
3. On Escape or Close — hide, remove `inert`, **return focus to the stored trigger**.
4. Close button: accessible name ("Close dialog"), ≥24×24 px.
5. Restore a visible focus indicator.

**Discussion point.** A modal holding focus is *correct* — it is not a 2.1.2 failure. What
makes it lawful is that Escape and a visible close control always let you out. Students
often "fix" the trap by removing the focus containment, which breaks the pattern instead.

**References:** [2.1.2](../demos/2.1.2-no-keyboard-trap/pass.html),
[2.4.3](../demos/2.4.3-focus-order/pass.html)

---

## Exercise 5 — Data table

```html
<table>
  <caption>Copies in stock by title and branch</caption>
  <thead>
    <tr><th scope="col">Title</th><th scope="col">Riverside</th>…</tr>
  </thead>
  <tbody>
    <tr><th scope="row">Tidal Flats</th><td>12</td>…</tr>
  </tbody>
</table>
```

The opening-hours table is **layout**, not data — replace it with a definition list or two
paragraphs. A layout table exposed as a table makes a screen reader announce structure
that carries no meaning.

If the stock table can overflow at 320 px, wrap it:
`<div class="table-scroll" tabindex="0" role="region" aria-labelledby="cap">`. Data tables
are exempt from reflow, but a scrollable region must be keyboard reachable.

**Reference:** [1.3.1](../demos/1.3.1-info-and-relationships/pass.html)

---

## Exercise 6 — Carousel

- Pause/play `<button>` with `aria-pressed`, placed **before** the carousel.
- Dots become `<button>`s: "Show slide 2 of 3", with `aria-current="true"` on the active one.
- Previous/Next buttons added.
- `prefers-reduced-motion: reduce` stops auto-advance entirely.
- Auto-advance pauses while focus is inside the carousel.
- Announce slide changes **only on user action**. A live region that fires on every
  automatic tick makes the page unusable with a screen reader — this is the trap.

**Best answer of all:** start it paused, or replace it with a grid. Most carousels exist
because a stakeholder could not choose, and almost nobody reads past slide one.

**References:** [2.2.2](../demos/2.2.2-pause-stop-hide/pass.html),
[4.1.3](../demos/4.1.3-status-messages/pass.html)

---

## Exercise 7 — Custom dropdown

**Part A** is the point of the exercise:

```html
<label for="genre">Genre</label>
<select id="genre" name="genre">
  <option value="">Choose a genre</option>
  <option>Fiction</option>…
</select>
```

Roughly 100 lines deleted. Keyboard operation, screen reader support, voice control,
mobile pickers and type-ahead all arrive free.

**Part B** — if a native control genuinely cannot render the option content, the widget
needs: `aria-expanded` + `aria-haspopup="listbox"` on the button; `role="listbox"` and
`role="option"` with `aria-selected`; arrow / Home / End / Enter / Escape handling;
`aria-activedescendant` or roving `tabindex`; click-outside-to-close; and focus returned
to the button on close.

**Debrief question:** ask students to count the lines in each version, then ask which one
they would rather maintain when the design changes. That comparison does more than any
lecture about ARIA.

**Reference:** [4.1.2](../demos/4.1.2-name-role-value/pass.html)

---

## Exercise 8 — Checkout errors

The error summary pattern solves most of this at once:

```html
<div id="summary" class="error-summary" role="alert" tabindex="-1" hidden>
  <h2>There is a problem</h2>
  <ul id="summary-list"></ul>
</div>
```

On failed submit: populate it, unhide it, `.focus()` it. Each entry links to its field.

Per field: `aria-describedby` to the message, `aria-invalid="true"` while invalid
(**removed**, not set to `"false"`, when corrected), and a message that states the
correction — "Enter the expiry date as MM/YY, for example 04/28".

Also required: format hints before submission (3.3.2), errors distinguishable in greyscale
(1.4.1), `autocomplete` tokens (1.3.5), a review-and-confirm step before payment (3.3.4),
and an announced success message (4.1.3).

**Discussion point.** A scanner driven into the error state finds almost none of this: with
no `aria-invalid` and no message element, there is nothing for a rule to fire on. The
absence of markup is invisible to tools that check markup.

**References:** [3.3.1](../demos/3.3.1-error-identification/pass.html),
[3.3.3](../demos/3.3.3-error-suggestion/pass.html)

---

## Exercises 9 and 10 — the audits

Mark against `evaluation/sample-site/INSTRUCTOR-ANSWER-KEY.md`, which lists all 56 seeded
defects with severity and fix.

Weight the marking toward **method**, not defect count:

- Did they aggregate by cause rather than listing every instance?
- Did they reach the checkout and the password-reset dialog at all? (Sampling test.)
- Did they find any cross-page defect — 3.2.3, 3.2.4 or 3.2.6? These are invisible to
  page-by-page auditing and are the most commonly missed.
- Did they rank by **user impact** rather than by ease of fixing?
- Did they state the conformance result literally, with no percentage?
- Did they record *why* for each "not applicable"?
- Did they name the limitations of their own evaluation?

A report that finds 30 of the 56 defects with sound method is worth more than one that
finds 45 by listing every axe violation on every page.
