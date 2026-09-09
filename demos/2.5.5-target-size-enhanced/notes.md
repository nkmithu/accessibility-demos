# Teaching notes — 2.5.5 Target Size (Enhanced) (Level AAA)

**Guideline 2.5 Input Modalities · Added in WCAG 2.1**

> The size of the target for pointer inputs is at least 44 by 44 CSS pixels, with exceptions for inline targets, equivalents available elsewhere, and essential presentations.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with motor impairments and tremor, and anyone on a touchscreen. Small targets mean repeated mis-taps and, in a checkout, costly mistakes.

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

Measure every interactive target. Icon-only buttons, close buttons, and dense toolbars are the usual failures. Padding counts toward the target, so a small icon in a large button passes.

## Automation

**The failure this demo shows is invisible to scanners.** axe's target-size rule is written against the Level AA threshold of 24 x 24 CSS pixels (2.5.8). The targets on the failing page are 26 to 28 pixels, so the rule passes them. There is no rule for the AAA 44-pixel threshold at all, so a scan can never tell you whether 2.5.5 is met.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.5.8 Target Size (Minimum) (AA)](../2.5.8-target-size-minimum/index.html)

## Specification

- [Understanding 2.5.5 Target Size (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
- [2.5.5 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#target-size-enhanced)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
