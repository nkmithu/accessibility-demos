# Teaching notes — 2.2.2 Pause, Stop, Hide (Level A)

**Guideline 2.2 Enough Time · Added in WCAG 2.0**

> Moving, blinking, or scrolling content that starts automatically, lasts more than five seconds, and runs alongside other content can be paused, stopped, or hidden. The same applies to auto-updating content.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with attention-related disabilities cannot focus beside constant motion. Screen reader users lose their place when content updates beneath them. Users with vestibular disorders can be made physically ill.

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

Look for carousels, animated banners, marquees, auto-refreshing feeds, and background video. Each needs a visible, keyboard-reachable pause control. Also verify prefers-reduced-motion is honoured.

## Automation

**The failure this demo shows is invisible to scanners.** axe's blink and marquee rules only match the obsolete <blink> and <marquee> ELEMENTS. Motion produced with CSS animations, or by JavaScript swapping content on a timer - which is how every carousel and ticker on the modern web is built - is completely invisible to a scanner. Nor can a scanner tell whether a pause control exists and works.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.3.3 Animation from Interactions (AAA)](../2.3.3-animation-from-interactions/index.html)
- [1.4.2 Audio Control (A)](../1.4.2-audio-control/index.html)
- [2.2.1 Timing Adjustable (A)](../2.2.1-timing-adjustable/index.html)

## Specification

- [Understanding 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [2.2.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#pause-stop-hide)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
