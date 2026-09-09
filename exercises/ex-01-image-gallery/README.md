# Exercise 1 — Image gallery

**Difficulty:** ●○○○○ · **Criteria:** 1.1.1 Non-text Content (A), 4.1.2 Name, Role, Value (A)

Open `index.html`. It has five non-text elements and every one of them is wrong in a
different way.

## Your task

Fix the text alternative for each, so the page conveys the same information whether or
not the images load.

## Acceptance criteria

- [ ] The photograph has alt text describing what it shows — not "image of…".
- [ ] The decorative divider is removed from the accessibility tree.
- [ ] The icon-only button has an accessible name, and the icon is not announced twice.
- [ ] The chart has a short alt stating its conclusion **and** a full text equivalent nearby.
- [ ] The logo link's alt text describes the **destination**, not the artwork.
- [ ] `npx axe` (or the axe browser extension) reports no violations.
- [ ] Listing all images in a screen reader produces a useful list.

## Hint

For each one, ask *"why is this here?"* rather than *"what is in it?"*.
See the [1.1.1 demo](../../demos/1.1.1-non-text-content/index.html).
