# Exercise 6 — Carousel

**Difficulty:** ●●●○○ · **Criteria:** 2.2.2 (A), 4.1.2 (A), 2.1.1 (A), 4.1.3 (AA), 2.3.3 (AAA)

The classic. It moves on its own, cannot be stopped, and its controls do not exist as far
as assistive technology is concerned.

## Your task

Make it operable and stoppable.

## Acceptance criteria

- [ ] A visible **pause/play control**, keyboard reachable, placed **before** the moving
      content, with its state exposed (`aria-pressed`).
- [ ] The dots are real `button` elements with accessible names
      ("Show slide 2 of 3") and a current state (`aria-current` or `aria-pressed`).
- [ ] Previous and Next controls exist, or the dots are fully keyboard operable.
- [ ] Slide changes are announced — but **only** when the user triggers them, never on
      each automatic advance.
- [ ] `prefers-reduced-motion: reduce` stops the auto-advance entirely.
- [ ] Nothing moves while a control inside the carousel has focus.
- [ ] Consider starting it paused. It is the safest default.

## Hint

An auto-advancing live region announces on every tick and makes the page unusable with a
screen reader. Announce on user action only.
See [2.2.2](../../demos/2.2.2-pause-stop-hide/index.html) and
[4.1.3](../../demos/4.1.3-status-messages/index.html).
