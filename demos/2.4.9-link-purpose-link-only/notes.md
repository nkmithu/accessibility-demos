# Teaching notes — 2.4.9 Link Purpose (Link Only) (Level AAA)

**Guideline 2.4 Navigable · Added in WCAG 2.0**

> A mechanism is available to identify the purpose of each link from the link text alone, except where the purpose is ambiguous to all users.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Screen reader users navigating by link list, without needing to inspect surrounding context to work out where each link goes.

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

Read every link's accessible name in isolation. Each must be self-explanatory. "Read more about our refund policy" passes where "Read more" fails.

## Automation

**The failure this demo shows is invisible to scanners.** Every link on the failing page has text, so axe's link-name rule is satisfied. Deciding that "Read more" fails to identify its destination requires reading the page and understanding what each link points at - which is judgement, not pattern matching.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.4.4 Link Purpose (In Context) (A)](../2.4.4-link-purpose-in-context/index.html)

## Specification

- [Understanding 2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [2.4.9 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#link-purpose-link-only)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
