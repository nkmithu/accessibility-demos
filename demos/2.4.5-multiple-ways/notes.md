# Teaching notes — 2.4.5 Multiple Ways (Level AA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> More than one way is available to locate a page within a set of pages, unless the page is a step in a process.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who find hierarchical menus hard to navigate and prefer search. Users who think in different organisational models than the site's designers.

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

Confirm at least two of: site search, a site map, a navigation menu, a table of contents, or related-page links. Steps within a checkout or wizard are exempt.

## Automation

No automated rule exists for this criterion at all. Requires evaluating the site's navigation options as a whole.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.4.1 Bypass Blocks (A)](../2.4.1-bypass-blocks/index.html)
- [3.2.3 Consistent Navigation (AA)](../3.2.3-consistent-navigation/index.html)

## Specification

- [Understanding 2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)
- [2.4.5 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#multiple-ways)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
