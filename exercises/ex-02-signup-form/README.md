# Exercise 2 — Sign-up form

**Difficulty:** ●●○○○ · **Criteria:** 1.3.1 (A), 3.3.2 (A), 1.3.5 (AA), 1.4.1 (A)

## Your task

Make every field announce correctly, and make the form's requirements clear before
submission rather than after.

## Acceptance criteria

- [ ] Every input has a **persistent visible label**, associated with `for`/`id`.
- [ ] No field relies on a placeholder as its label.
- [ ] The radio group is wrapped in a `fieldset` with a `legend`.
- [ ] Required fields are indicated **in text**, not by colour alone.
- [ ] The password field states its rules *before* the user types.
- [ ] Every field asking for the user's own information has a correct
      `autocomplete` token.
- [ ] Tabbing to each field announces its label; clicking a label focuses its field.
- [ ] axe reports no violations.

## Hint

Placeholders vanish the moment somebody types. See the
[3.3.2 demo](../../demos/3.3.2-labels-or-instructions/index.html).
