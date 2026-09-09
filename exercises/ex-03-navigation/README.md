# Exercise 3 — Page structure and navigation

**Difficulty:** ●●○○○ · **Criteria:** 2.4.1 (A), 1.3.1 (A), 2.4.6 (AA), 2.4.10 (AAA)

Twelve navigation links sit before the content, and a keyboard user has to Tab through
all of them on every page.

## Your task

Give the page the structure it is pretending to have.

## Acceptance criteria

- [ ] A **skip link** is the first focusable element, visible on focus, and moves focus
      (not just scroll) into the main content.
- [ ] Landmarks: `header`, `nav`, `main`, `footer`. Exactly one `main`.
- [ ] The fake headings are real heading elements, at correct levels, with no level skipped.
- [ ] The event list is a real `ul`.
- [ ] Headings describe their content — check them by reading the headings alone.
- [ ] Pressing Tab once, activating the skip link, then Tab again lands **inside** the
      main content.
- [ ] A screen reader can list the landmarks and the headings.

## Hint

The skip link target needs `tabindex="-1"`, or focus stays behind in the navigation.
See the [2.4.1 demo](../../demos/2.4.1-bypass-blocks/index.html).
