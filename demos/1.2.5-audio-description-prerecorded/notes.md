# Teaching notes — 1.2.5 Audio Description (Prerecorded) (Level AA)

**Guideline 1.2 Time-based Media · Added in WCAG 2.0**

> Audio description is provided for all prerecorded video content. At AA the text-alternative escape hatch allowed at 1.2.3 is removed — a real described audio track is required.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Blind and low-vision users. At AA the standard assumes they should be able to consume the video itself, not a separate document.

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

Confirm a described audio track exists and is selectable. Play it and verify descriptions fit the natural pauses in dialogue without talking over it.

## Automation

No automated rule exists for this criterion at all. Requires listening to the described track and judging its completeness.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](../1.2.3-audio-description-or-media-alternative-prerecorded/index.html)
- [1.2.7 Extended Audio Description (Prerecorded) (AAA)](../1.2.7-extended-audio-description-prerecorded/index.html)

## Specification

- [Understanding 1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)
- [1.2.5 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#audio-description-prerecorded)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
