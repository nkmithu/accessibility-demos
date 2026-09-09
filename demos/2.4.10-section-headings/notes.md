# Teaching notes — 2.4.10 Section Headings (Level AAA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> Section headings are used to organise content. This applies where content divides into sections, not to every paragraph.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Screen reader users navigating by heading, and users with cognitive disabilities who need long content broken into signposted chunks.

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

Check that long content is divided by headings at the right level, with no skipped levels, and that the outline is navigable.

## Automation

**The failure this demo shows is invisible to scanners.** The failing page has a correct h1 and no skipped levels, so heading-order and page-has-heading-one both pass. The failure is that headings are ABSENT where the content needs them, and no rule can tell that a wall of prose contains four distinct topics that each deserve a signpost.

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
- [2.4.6 Headings and Labels (AA)](../2.4.6-headings-and-labels/index.html)

## Specification

- [Understanding 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html)
- [2.4.10 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#section-headings)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
