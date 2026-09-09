# Teaching notes — 2.4.8 Location (Level AAA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> Information about the user's location within a set of pages is available — breadcrumbs, a highlighted current navigation item, or a step indicator.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who lose track of where they are in a deep hierarchy, and anyone arriving from search directly onto an inner page.

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

Confirm breadcrumbs, a current-page indicator marked with aria-current, or a step counter. The indicator must be programmatic, not colour alone.

## Automation

No automated rule exists for this criterion at all. Requires evaluating whether location information is present and meaningful.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.5 Multiple Ways (AA)](../2.4.5-multiple-ways/index.html)
- [3.2.3 Consistent Navigation (AA)](../3.2.3-consistent-navigation/index.html)
- [1.4.1 Use of Color (A)](../1.4.1-use-of-color/index.html)

## Specification

- [Understanding 2.4.8 Location](https://www.w3.org/WAI/WCAG22/Understanding/location.html)
- [2.4.8 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#location)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
