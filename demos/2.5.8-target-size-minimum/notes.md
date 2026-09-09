# Teaching notes — 2.5.8 Target Size (Minimum) (Level AA)

**Guideline 2.5 Input Modalities · Added in WCAG 2.2**

> Targets are at least 24 by 24 CSS pixels, unless spacing, inline position, an equivalent control, or essential presentation applies. Undersized targets can pass if a 24px circle centred on each does not overlap its neighbours.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with motor impairments and tremor. Unlike 2.5.5 at AAA, this is a realistic AA baseline that most interfaces can meet.

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

Measure each target. If under 24×24, check the spacing exception by testing whether 24px circles centred on adjacent targets overlap. Tightly packed icon rows and small close buttons are the usual failures.

## Automation

A scanner can help here — the mapped axe rules are `target-size`. Make sure students understand the limit: Size and spacing are computable, and axe covers a good share of cases, but the exceptions still need review.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.5.5 Target Size (Enhanced) (AAA)](../2.5.5-target-size-enhanced/index.html)
- [2.5.7 Dragging Movements (AA)](../2.5.7-dragging-movements/index.html)

## Specification

- [Understanding 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [2.5.8 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#target-size-minimum)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
