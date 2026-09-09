# Teaching notes — 1.4.11 Non-text Contrast (Level AA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.1**

> User interface components and meaningful graphical objects have a contrast ratio of at least 3:1 against adjacent colours — input borders, focus indicators, icons, and chart elements.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Low-vision users who can read the label but cannot see where the input box ends, whether a checkbox is ticked, or which element has focus.

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

Check the boundary of every control against its background, in every state. Check icons that convey meaning and the parts of charts needed to understand them. Pure-white input fields on a white page are the most common failure.

## Automation

No automated rule exists for this criterion at all. Very limited automated coverage. Most non-text contrast must be measured by hand with a colour picker.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.3 Contrast (Minimum) (AA)](../1.4.3-contrast-minimum/index.html)
- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)
- [2.4.13 Focus Appearance (AAA)](../2.4.13-focus-appearance/index.html)

## Specification

- [Understanding 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [1.4.11 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#non-text-contrast)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
