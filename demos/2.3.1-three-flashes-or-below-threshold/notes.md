# Teaching notes — 2.3.1 Three Flashes or Below Threshold (Level A)

**Guideline 2.3 Seizures and Physical Reactions · Added in WCAG 2.0**

> Content does not contain anything that flashes more than three times in any one second, unless the flash is below the general flash and red flash thresholds.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with photosensitive epilepsy, for whom a flashing sequence can trigger a seizure. This is the one criterion whose failure can cause immediate physical harm.

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

Analyse video and animation with a tool such as PEAT (Photosensitive Epilepsy Analysis Tool). Pay attention to rapid cuts, strobe effects, explosions, and large areas of saturated red.

## Automation

No automated rule exists for this criterion at all. Specialist tools such as PEAT analyse video frame by frame, but standard accessibility scanners do not test for flashing at all.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.3.2 Three Flashes (AAA)](../2.3.2-three-flashes/index.html)
- [2.2.2 Pause, Stop, Hide (A)](../2.2.2-pause-stop-hide/index.html)

## Specification

- [Understanding 2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [2.3.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
