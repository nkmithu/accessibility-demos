# Teaching notes — 2.3.3 Animation from Interactions (Level AAA)

**Guideline 2.3 Seizures and Physical Reactions · Added in WCAG 2.1**

> Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or information.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with vestibular disorders, for whom parallax scrolling, zoom transitions, and sliding page changes cause dizziness, nausea, and migraine.

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

Set the operating system to reduce motion and confirm the site honours prefers-reduced-motion by removing or replacing large movement, not merely shortening it.

## Automation

No automated rule exists for this criterion at all. The presence of a prefers-reduced-motion media query can be detected in CSS; whether it covers every animation cannot.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.2.2 Pause, Stop, Hide (A)](../2.2.2-pause-stop-hide/index.html)

## Specification

- [Understanding 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- [2.3.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#animation-from-interactions)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
