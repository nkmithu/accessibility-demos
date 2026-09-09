# Teaching notes — 1.4.3 Contrast (Minimum) (Level AA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> Text and images of text have a contrast ratio of at least 4.5:1, or 3:1 for large text (18pt, or 14pt bold). Logos and incidental text are exempt.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with low vision, reduced contrast sensitivity, or age-related sight loss. Also anyone reading on a phone in sunlight.

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

Sample foreground and background with a contrast checker. Test every state — default, hover, focus, visited, disabled-but-meaningful — and text over images or gradients at its worst point.

## Automation

A scanner can help here — the mapped axe rules are `color-contrast`. Make sure students understand the limit: Scanners compute contrast accurately for solid backgrounds. They skip or guess when text sits on an image, a gradient, or a semi-transparent overlay, and they cannot test states they do not trigger.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.6 Contrast (Enhanced) (AAA)](../1.4.6-contrast-enhanced/index.html)
- [1.4.11 Non-text Contrast (AA)](../1.4.11-non-text-contrast/index.html)
- [1.4.1 Use of Color (A)](../1.4.1-use-of-color/index.html)

## Specification

- [Understanding 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.4.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#contrast-minimum)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
