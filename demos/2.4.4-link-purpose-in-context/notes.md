# Teaching notes — 2.4.4 Link Purpose (In Context) (Level A)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> The purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determined context.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users who pull up a list of all links on the page to navigate. A list of fifteen entries all reading "Read more" is useless.

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

Extract every link's accessible name and read the list out of context. Ambiguous entries must at least be disambiguated by their sentence, list item, or table cell. Check that icon-only links have accessible names.

## Automation

**The failure this demo shows is invisible to scanners.** Every link on the failing page has text, so axe's link-name rule is satisfied. Judging that three links reading "Read more" are ambiguous requires understanding the content. axe's identical-links-same-purpose rule is experimental and returns "needs review" at best.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.4.9 Link Purpose (Link Only) (AAA)](../2.4.9-link-purpose-link-only/index.html)
- [1.1.1 Non-text Content (A)](../1.1.1-non-text-content/index.html)
- [2.5.3 Label in Name (A)](../2.5.3-label-in-name/index.html)

## Specification

- [Understanding 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [2.4.4 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#link-purpose-in-context)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
