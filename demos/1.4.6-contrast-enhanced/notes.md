# Teaching notes — 1.4.6 Contrast (Enhanced) (Level AAA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> Text and images of text have a contrast ratio of at least 7:1, or 4.5:1 for large text.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with moderately low vision (roughly 20/80) who do not use assistive technology. The AA 4.5:1 threshold approximates 20/40 vision; 7:1 extends coverage further.

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

Same procedure as 1.4.3 with the higher thresholds. Check whether the palette can meet 7:1 without becoming pure black on white.

## Automation

A scanner can help here — the mapped axe rules are `color-contrast-enhanced`. Make sure students understand the limit: Same tooling as 1.4.3, configured to the AAA threshold; same blind spots.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.3 Contrast (Minimum) (AA)](../1.4.3-contrast-minimum/index.html)
- [1.4.11 Non-text Contrast (AA)](../1.4.11-non-text-contrast/index.html)

## Specification

- [Understanding 1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html)
- [1.4.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#contrast-enhanced)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
