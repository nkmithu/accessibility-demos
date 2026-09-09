# Teaching notes — 2.4.11 Focus Not Obscured (Minimum) (Level AA)

**Guideline 2.4 Navigable · Added in WCAG 2.2**

> When a component receives keyboard focus, it is not entirely hidden by author-created content such as a sticky header, footer, or cookie banner.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Keyboard users who Tab to a control that scrolls under a sticky header and disappears. Focus is technically there but invisible, which is equivalent to having no focus indicator.

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

Tab through the page slowly with sticky elements present. Confirm the focused control is never completely covered. Test at several zoom levels, since sticky bars take proportionally more space when zoomed.

## Automation

No automated rule exists for this criterion at all. Requires tabbing through with sticky content rendered and checking overlap geometry.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)
- [2.4.12 Focus Not Obscured (Enhanced) (AAA)](../2.4.12-focus-not-obscured-enhanced/index.html)
- [1.4.13 Content on Hover or Focus (AA)](../1.4.13-content-on-hover-or-focus/index.html)

## Specification

- [Understanding 2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [2.4.11 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
