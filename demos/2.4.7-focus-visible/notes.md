# Teaching notes — 2.4.7 Focus Visible (Level AA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> Any keyboard operable interface has a mode of operation where the keyboard focus indicator is visible.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Every sighted keyboard user. Without a visible indicator you cannot tell which control Enter will activate — the interface becomes guesswork.

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

Tab through the page and confirm you can always see where focus is. The single most common cause of failure is a stylesheet containing outline: none with no replacement.

## Automation

No automated rule exists for this criterion at all. A blanket outline:none is sometimes detectable, but a focus style's actual visibility must be confirmed by eye.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.11 Focus Not Obscured (Minimum) (AA)](../2.4.11-focus-not-obscured-minimum/index.html)
- [2.4.12 Focus Not Obscured (Enhanced) (AAA)](../2.4.12-focus-not-obscured-enhanced/index.html)
- [2.4.13 Focus Appearance (AAA)](../2.4.13-focus-appearance/index.html)
- [1.4.11 Non-text Contrast (AA)](../1.4.11-non-text-contrast/index.html)

## Specification

- [Understanding 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [2.4.7 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#focus-visible)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
