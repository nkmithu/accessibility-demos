# Teaching notes — 2.4.13 Focus Appearance (Level AAA)

**Guideline 2.4 Navigable · Added in WCAG 2.2**

> The focus indicator is at least as large as a 2 CSS pixel perimeter of the focused control, and has a contrast ratio of at least 3:1 between its focused and unfocused states.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Low-vision keyboard users, for whom a thin 1px light-grey outline satisfies 2.4.7 in principle but is invisible in practice.

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

Measure the indicator's thickness and its contrast against both the adjacent colours and its own unfocused state. A 2px solid outline with sufficient contrast is the straightforward way to pass.

## Automation

No automated rule exists for this criterion at all. Requires measuring the rendered indicator's size and contrast.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)
- [1.4.11 Non-text Contrast (AA)](../1.4.11-non-text-contrast/index.html)

## Specification

- [Understanding 2.4.13 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [2.4.13 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#focus-appearance)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
