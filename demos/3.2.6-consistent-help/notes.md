# Teaching notes — 3.2.6 Consistent Help (Level A)

**Guideline 3.2 Predictable · Added in WCAG 2.2**

> If a page includes help mechanisms — contact details, a help link, a chat widget, self-help — they appear in the same relative order on every page that has them.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who need help and cannot afford to hunt for it in a different place on every page. Anyone under stress mid-task.

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

Identify every help mechanism and check its position relative to other page content across the site. Help does not have to be on every page, but where present it must be in a consistent place.

## Automation

No automated rule exists for this criterion at all. Requires cross-page comparison of help placement.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.2.3 Consistent Navigation (AA)](../3.2.3-consistent-navigation/index.html)
- [3.3.5 Help (AAA)](../3.3.5-help/index.html)

## Specification

- [Understanding 3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)
- [3.2.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#consistent-help)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
