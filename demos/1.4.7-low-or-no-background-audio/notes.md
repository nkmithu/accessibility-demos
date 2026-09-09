# Teaching notes — 1.4.7 Low or No Background Audio (Level AAA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> For prerecorded audio that is primarily speech, background sound is either absent, switchable off, or at least 20 dB below the foreground speech.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Hard-of-hearing users, for whom background music competes with speech and destroys intelligibility. Hearing aids amplify everything, not just the voice.

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

Listen for background music or ambience under narration. Confirm it is at least 20 dB quieter (roughly four times quieter in perceived loudness) or that a speech-only track is offered.

## Automation

No automated rule exists for this criterion at all. Requires audio analysis and listening.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.2 Audio Control (A)](../1.4.2-audio-control/index.html)
- [1.2.2 Captions (Prerecorded) (A)](../1.2.2-captions-prerecorded/index.html)

## Specification

- [Understanding 1.4.7 Low or No Background Audio](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html)
- [1.4.7 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#low-or-no-background-audio)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
