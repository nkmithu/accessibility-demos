# Teaching notes — 1.2.2 Captions (Prerecorded) (Level A)

**Guideline 1.2 Time-based Media · Added in WCAG 2.0**

> Captions are provided for all prerecorded audio content in synchronised media. Captions carry dialogue plus speaker identification and meaningful non-speech sound.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Deaf and hard-of-hearing users. Also anyone in a loud environment, in a quiet environment without headphones, or watching in a second language.

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

Play every video with sound off. Confirm captions are synchronised, accurate, identify speakers, and include relevant sounds such as [door slams]. Auto-generated captions with no human correction routinely fail on names, technical terms, and punctuation.

## Automation

A scanner can help here — the mapped axe rules are `video-caption`. Make sure students understand the limit: A scanner can detect that a track element with kind="captions" is absent. It cannot verify caption accuracy, synchronisation, or completeness.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.2.4 Captions (Live) (AA)](../1.2.4-captions-live/index.html)
- [1.2.8 Media Alternative (Prerecorded) (AAA)](../1.2.8-media-alternative-prerecorded/index.html)
- [1.4.2 Audio Control (A)](../1.4.2-audio-control/index.html)

## Specification

- [Understanding 1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
- [1.2.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#captions-prerecorded)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
