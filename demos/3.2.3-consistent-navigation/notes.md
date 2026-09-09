# Teaching notes — 3.2.3 Consistent Navigation (Level AA)

**Guideline 3.2 Predictable · Added in WCAG 2.0**

> Navigational mechanisms repeated across multiple pages occur in the same relative order each time, unless the user changes it.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who learn a layout by position. Screen magnifier users who know where to look. Screen reader users who learn how many Tab presses reach the search box.

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

Compare the navigation across several pages. The same items should appear in the same relative order. Items may be added or removed, but the surviving items must keep their sequence.

## Automation

No automated rule exists for this criterion at all. Requires comparing multiple pages against each other — outside the scope of a single-page scan.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.2.4 Consistent Identification (AA)](../3.2.4-consistent-identification/index.html)
- [2.4.5 Multiple Ways (AA)](../2.4.5-multiple-ways/index.html)
- [2.4.8 Location (AAA)](../2.4.8-location/index.html)

## Specification

- [Understanding 3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [3.2.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#consistent-navigation)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
