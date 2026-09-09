# Exercise 4 — Modal dialog

**Difficulty:** ●●●○○ · **Criteria:** 2.4.3 (A), 2.1.2 (A), 4.1.2 (A), 2.5.8 (AA), 2.4.7 (AA)

This dialog opens and closes, and does nothing else correctly. Open it with the keyboard
and try to use it.

## Your task

Implement the full dialog pattern.

## Acceptance criteria

- [ ] Opening the dialog **moves focus into it** (to the dialog's heading or first control).
- [ ] <kbd>Escape</kbd> closes it.
- [ ] Closing **returns focus to the button that opened it**.
- [ ] While open, Tab cycles within the dialog and cannot reach the page behind it.
- [ ] The dialog has `role="dialog"`, `aria-modal="true"` and an accessible name
      (`aria-labelledby`).
- [ ] Content behind the dialog is hidden from assistive technology (`inert`, or
      `aria-hidden` on the background — never on the dialog's own ancestors).
- [ ] The close button has an accessible name and is at least 24×24 CSS pixels.
- [ ] There is a visible focus indicator on every control.
- [ ] You can complete the whole interaction without a mouse, and hear what happened.

## Hint

A modal *should* hold focus — that is not a 2.1.2 failure. What makes it lawful is that
Escape and a visible close control always get you out.
See [2.1.2](../../demos/2.1.2-no-keyboard-trap/index.html) and
[2.4.3](../../demos/2.4.3-focus-order/index.html).
