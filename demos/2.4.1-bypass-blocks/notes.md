# Teaching notes — 2.4.1 Bypass Blocks (Level A)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> A mechanism is available to bypass blocks of content repeated on multiple pages — typically a skip link, and supported by proper landmarks and headings.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Keyboard users who would otherwise Tab through 40 navigation links on every page. Screen reader users who would hear the same menu read out before every page's content.

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

Load the page and press Tab once. A skip link should appear, be visible when focused, and move focus to the main content so the next Tab lands inside it. Confirm main, nav, and header landmarks exist.

## Automation

**The failure this demo shows is invisible to scanners.** axe returns bypass as "needs review" rather than a violation. It can see there is no skip link, no main landmark and no heading, but it will not assert the failure on its own - it hands the decision back to you. An automated report that only counts violations records this page as clean.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.4.5 Multiple Ways (AA)](../2.4.5-multiple-ways/index.html)
- [1.3.1 Info and Relationships (A)](../1.3.1-info-and-relationships/index.html)
- [2.4.10 Section Headings (AAA)](../2.4.10-section-headings/index.html)

## Specification

- [Understanding 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [2.4.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#bypass-blocks)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
