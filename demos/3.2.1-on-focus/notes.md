# Teaching notes — 3.2.1 On Focus (Level A)

**Guideline 3.2 Predictable · Added in WCAG 2.0**

> When any component receives focus, it does not initiate a change of context — no automatic form submission, navigation, new window, or focus move elsewhere.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Keyboard and screen reader users, who move focus in order to read. If merely arriving at a control launches a new page, they can never reach the controls beyond it.

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

Tab through every control without activating anything. Nothing should submit, navigate, open a window, or move focus. Select elements that navigate on focus or change are a classic failure.

## Automation

No automated rule exists for this criterion at all. Requires tabbing through and observing for unexpected context changes.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.2.2 On Input (A)](../3.2.2-on-input/index.html)
- [3.2.5 Change on Request (AAA)](../3.2.5-change-on-request/index.html)
- [2.4.3 Focus Order (A)](../2.4.3-focus-order/index.html)

## Specification

- [Understanding 3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)
- [3.2.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#on-focus)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
