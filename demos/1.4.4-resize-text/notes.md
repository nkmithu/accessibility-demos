# Teaching notes — 1.4.4 Resize Text (Level AA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> Text can be resized up to 200% without assistive technology and without loss of content or functionality.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with low vision who enlarge text rather than use a full screen magnifier.

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

Zoom the browser to 200% and check for clipped text, overlapping elements, controls pushed off screen, and fixed-height containers that hide overflow. Also test text-only zoom where the browser supports it.

## Automation

A scanner can help here — the mapped axe rules are `meta-viewport`, `meta-viewport-large`. Make sure students understand the limit: A scanner can flag a viewport meta tag that blocks zoom. Whether content survives 200% requires actually rendering and looking.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.10 Reflow (AA)](../1.4.10-reflow/index.html)
- [1.4.12 Text Spacing (AA)](../1.4.12-text-spacing/index.html)
- [1.4.8 Visual Presentation (AAA)](../1.4.8-visual-presentation/index.html)

## Specification

- [Understanding 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [1.4.4 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#resize-text)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
