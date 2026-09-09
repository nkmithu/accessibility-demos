# Teaching notes — 3.2.5 Change on Request (Level AAA)

**Guideline 3.2 Predictable · Added in WCAG 2.0**

> Changes of context are initiated only by user request, or a mechanism is available to turn off such changes.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities and screen reader users, for whom any unrequested change — an auto-redirect, a pop-up, a page that refreshes itself — breaks the mental model of where they are.

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

Confirm no automatic redirects, timed refreshes, unrequested new windows, or auto-updating regions that move focus. Links opening new windows must say so.

## Automation

**The failure this demo shows is invisible to scanners.** axe's meta-refresh rule catches only the <meta http-equiv="refresh"> technique. The failing page redirects with a JavaScript timer and reorders its own content on an interval - both invisible to a static scan, and both far more common than meta refresh in modern code.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [3.2.1 On Focus (A)](../3.2.1-on-focus/index.html)
- [3.2.2 On Input (A)](../3.2.2-on-input/index.html)
- [2.2.4 Interruptions (AAA)](../2.2.4-interruptions/index.html)

## Specification

- [Understanding 3.2.5 Change on Request](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html)
- [3.2.5 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#change-on-request)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
