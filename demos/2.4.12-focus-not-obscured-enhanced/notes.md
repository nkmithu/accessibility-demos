# Teaching notes — 2.4.12 Focus Not Obscured (Enhanced) (Level AAA)

**Guideline 2.4 Navigable · Added in WCAG 2.2**

> When a component receives keyboard focus, no part of it is hidden by author-created content.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Keyboard users, held to a stricter standard than 2.4.11 — partial obscuring also fails, so the whole focused control stays visible.

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

As 2.4.11, but confirm no part of the focused element is covered at any point.

## Automation

No automated rule exists for this criterion at all. Requires manual observation of overlap geometry.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.11 Focus Not Obscured (Minimum) (AA)](../2.4.11-focus-not-obscured-minimum/index.html)
- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)

## Specification

- [Understanding 2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html)
- [2.4.12 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
