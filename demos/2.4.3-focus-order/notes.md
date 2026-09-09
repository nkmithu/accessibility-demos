# Teaching notes — 2.4.3 Focus Order (Level A)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> If a page can be navigated sequentially and the order affects meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Keyboard and screen reader users, who experience the page as a sequence. Focus that jumps from the header to the footer and back is disorienting and easy to get lost in.

Do not open with the criterion number. Open with who is shut out and what they cannot do.
The number is how you look it up afterwards.

**2. Show the failing page before you explain anything.**

Open `fail.html` and let students try it themselves — with a keyboard, with a screen
reader, in greyscale, at 400% zoom, whichever applies. Let them discover the problem
before you name it. Discovery sticks; being told does not.

**3. Then show the fix side by side.**

Open `pass.html` and diff the two in the browser. The demo page shows the relevant
excerpt of each file, quoted directly from the running examples, so what students read is
what they just used.

**4. Then give them the rule.**

Now the criterion text means something, because they have felt the difference.

## How to test it

Tab through the page and track where focus goes. It should follow the visual reading order. Watch for positive tabindex values, modals that do not move focus in, and dialogs that do not return focus on close.

## Automation

**The failure this demo shows is invisible to scanners.** axe does have a tabindex rule that catches positive tabindex values, but it is tagged best-practice rather than as a WCAG rule - so a scan scoped to WCAG conformance, which is how most CI pipelines are configured, reports nothing here. Whether a focus order is meaningful also cannot be computed at all.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [1.3.2 Meaningful Sequence (A)](../1.3.2-meaningful-sequence/index.html)
- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)
- [2.4.11 Focus Not Obscured (Minimum) (AA)](../2.4.11-focus-not-obscured-minimum/index.html)

## Specification

- [Understanding 2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [2.4.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#focus-order)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
