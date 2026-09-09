# Teaching notes — 1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)

**Guideline 1.2 Time-based Media · Added in WCAG 2.0**

> Prerecorded video in synchronised media has either an audio description of the visual information or a full text alternative for the whole presentation.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Blind and low-vision users, who miss any information shown but never spoken — on-screen text, a demonstrated action, a chart, a facial reaction.

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

Watch the video with the screen off. If you lose information, the visual content is not described. Confirm either a described audio track or a text alternative covering both dialogue and visuals.

## Automation

No automated rule exists for this criterion at all. Requires watching the media and judging whether the visuals carry information the audio does not.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.2.5 Audio Description (Prerecorded) (AA)](../1.2.5-audio-description-prerecorded/index.html)
- [1.2.7 Extended Audio Description (Prerecorded) (AAA)](../1.2.7-extended-audio-description-prerecorded/index.html)
- [1.2.8 Media Alternative (Prerecorded) (AAA)](../1.2.8-media-alternative-prerecorded/index.html)

## Specification

- [Understanding 1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)
- [1.2.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
