# Teaching notes — 1.4.12 Text Spacing (Level AA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.1**

> No loss of content or functionality when the user sets line height to 1.5× the font size, paragraph spacing to 2×, letter spacing to 0.12×, and word spacing to 0.16×.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with dyslexia and low vision who apply their own spacing overrides through a browser extension or user stylesheet.

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

Apply the four spacing overrides via a bookmarklet or devtools and look for clipped text, overlapping elements, and text escaping its container. Fixed heights on text containers are the usual cause.

## Automation

No automated rule exists for this criterion at all. Requires applying the overrides and visually inspecting the result.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.8 Visual Presentation (AAA)](../1.4.8-visual-presentation/index.html)
- [1.4.10 Reflow (AA)](../1.4.10-reflow/index.html)
- [1.4.4 Resize Text (AA)](../1.4.4-resize-text/index.html)

## Specification

- [Understanding 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [1.4.12 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#text-spacing)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
