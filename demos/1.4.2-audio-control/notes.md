# Teaching notes — 1.4.2 Audio Control (Level A)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> If audio plays automatically for more than three seconds, a mechanism is available to pause, stop, or independently control its volume.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users hear the page audio and their screen reader simultaneously, making both unintelligible. Users with cognitive and attention disabilities are unable to concentrate.

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

Load the page and listen. If anything autoplays beyond three seconds, confirm a pause or stop control exists near the start of the page and is keyboard reachable before the audio becomes disruptive.

## Automation

A scanner can help here — the mapped axe rules are `no-autoplay-audio`. Make sure students understand the limit: Autoplay attributes can be detected; script-triggered playback and the presence of a usable control generally cannot.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.2.2 Pause, Stop, Hide (A)](../2.2.2-pause-stop-hide/index.html)
- [1.4.7 Low or No Background Audio (AAA)](../1.4.7-low-or-no-background-audio/index.html)

## Specification

- [Understanding 1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [1.4.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#audio-control)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
