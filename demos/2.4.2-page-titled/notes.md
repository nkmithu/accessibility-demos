# Teaching notes — 2.4.2 Page Titled (Level A)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> Web pages have titles that describe their topic or purpose.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users hear the title first and use it to confirm they landed in the right place. Anyone with many tabs open relies on it, as do bookmarks and browser history.

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

Check every page has a unique, descriptive title, most-specific information first — "Checkout: Payment — Riverline Books" rather than "Untitled" or "Home" on every page.

## Automation

**The failure this demo shows is invisible to scanners.** axe's document-title rule only checks that a <title> element exists and is non-empty. "Untitled Document" satisfies it completely. Whether a title is descriptive or unique across a site is a judgement no scanner makes.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.4.6 Headings and Labels (AA)](../2.4.6-headings-and-labels/index.html)
- [3.1.1 Language of Page (A)](../3.1.1-language-of-page/index.html)

## Specification

- [Understanding 2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
- [2.4.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#page-titled)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
