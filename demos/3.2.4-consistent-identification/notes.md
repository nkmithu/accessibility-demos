# Teaching notes — 3.2.4 Consistent Identification (Level AA)

**Guideline 3.2 Predictable · Added in WCAG 2.0**

> Components with the same functionality within a set of pages are identified consistently — the same label, name, and icon for the same action.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users who learn a control by its name. Users with cognitive disabilities who must otherwise relearn the interface on each page. Calling the same action Search, Find, and Go on three pages triples the learning cost.

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

List the accessible names and icons for equivalent controls across pages. The same function must carry the same name. Watch for a print icon labelled Print on one page and Export on another.

## Automation

No automated rule exists for this criterion at all. Requires cross-page comparison and understanding which controls are functionally equivalent.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.2.3 Consistent Navigation (AA)](../3.2.3-consistent-navigation/index.html)
- [2.4.4 Link Purpose (In Context) (A)](../2.4.4-link-purpose-in-context/index.html)
- [1.3.6 Identify Purpose (AAA)](../1.3.6-identify-purpose/index.html)

## Specification

- [Understanding 3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
- [3.2.4 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#consistent-identification)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
