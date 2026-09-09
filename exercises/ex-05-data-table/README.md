# Exercise 5 — Data table

**Difficulty:** ●●○○○ · **Criteria:** 1.3.1 (A), 1.4.10 (AA)

Read the first table with a screen reader. When you land on the cell containing `4`, the
screen reader should tell you it is the Old Town stock of Tidal Flats. It will not.

## Your task

Give both tables the right markup — which for one of them means not being a table at all.

## Acceptance criteria

- [ ] The stock table has a `caption` naming it.
- [ ] Column headers are `th scope="col"` inside a `thead`.
- [ ] The title in each row is `th scope="row"`.
- [ ] Reading any number cell announces its row and column headers.
- [ ] The opening-hours "table" is replaced with non-table markup (it is layout, not data).
- [ ] If the stock table can overflow at 320 px, its scroll container is keyboard
      reachable (`tabindex="0"` plus a `role` and accessible name).
- [ ] axe reports no violations.

## Hint

Data tables are **exempt** from the reflow requirement — but the container you scroll them
in must still be reachable by keyboard. See
[1.3.1](../../demos/1.3.1-info-and-relationships/index.html).
