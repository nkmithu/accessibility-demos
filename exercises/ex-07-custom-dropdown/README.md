# Exercise 7 — Custom dropdown

**Difficulty:** ●●●●○ · **Criteria:** 2.1.1 (A), 4.1.2 (A), 2.4.7 (AA), 2.4.3 (A)

## Your task

There are two valid answers, and you should do **both**, in this order.

### Part A — the answer you should reach for first

Replace the whole thing with a native `<select>` and a `<label>`. Count the lines of code
you delete. Everything below comes free: keyboard operation, screen reader support, voice
control, mobile pickers, and type-ahead.

### Part B — when a native control genuinely will not do

Sometimes a design needs rich option content a `<select>` cannot render. Rebuild the
custom widget correctly, so you understand what Part A was giving you.

## Acceptance criteria — Part B

- [ ] The trigger is a `button` with `aria-expanded` kept in sync and `aria-haspopup="listbox"`.
- [ ] The list has `role="listbox"`; each option has `role="option"` and `aria-selected`.
- [ ] The button is associated with a visible label.
- [ ] <kbd>Enter</kbd>, <kbd>Space</kbd> and <kbd>&darr;</kbd> open the list.
- [ ] Arrow keys move between options; <kbd>Home</kbd>/<kbd>End</kbd> jump to first/last.
- [ ] <kbd>Enter</kbd> selects; <kbd>Escape</kbd> closes and returns focus to the button.
- [ ] Clicking outside closes it.
- [ ] The active option is tracked with `aria-activedescendant`, or roving `tabindex`.
- [ ] Every state has a visible focus indicator.
- [ ] Selecting an option does **not** navigate or submit (3.2.2).

## Hint

The point of this exercise is the comparison. Part A is about ten lines. Part B is about
a hundred, and you will still be finding edge cases next week — which is exactly why the
first question to ask about any custom widget is whether HTML already has one.
See [4.1.2](../../demos/4.1.2-name-role-value/index.html).
