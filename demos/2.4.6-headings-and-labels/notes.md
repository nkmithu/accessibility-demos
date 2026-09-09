# Teaching notes — 2.4.6 Headings and Labels (Level AA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> Headings and labels describe the topic or purpose of the content they introduce.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users navigating by heading. Users with cognitive disabilities scanning for the section they need. A heading reading "Information" tells nobody anything.

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

Read the headings alone as an outline — it should summarise the page. Read the form labels alone — each should identify what to enter. Look for vague labels and for headings chosen for visual size rather than meaning.

## Automation

**The failure this demo shows is invisible to scanners.** Every heading on the failing page is a real heading element with real text, and every field has a properly associated label - so axe reports a clean page. Whether "Information" and "Field 1" actually DESCRIBE anything is a judgement about meaning, and no scanner makes it. This is the clearest example in the suite of a page that is 100% green and unusable.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [1.3.1 Info and Relationships (A)](../1.3.1-info-and-relationships/index.html)
- [2.4.10 Section Headings (AAA)](../2.4.10-section-headings/index.html)
- [3.3.2 Labels or Instructions (A)](../3.3.2-labels-or-instructions/index.html)

## Specification

- [Understanding 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [2.4.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#headings-and-labels)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
