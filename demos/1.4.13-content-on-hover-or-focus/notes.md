# Teaching notes — 1.4.13 Content on Hover or Focus (Level AA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.1**

> Additional content triggered by hover or focus must be dismissable without moving the pointer or focus, hoverable so the pointer can move onto it, and persistent until dismissed or no longer valid.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Screen magnifier users whose tooltip disappears the moment they move toward it. Users with tremor who cannot hold a pointer steady. Keyboard users trapped by content they cannot dismiss.

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

Hover over each tooltip or popover: press Escape (must dismiss), move the pointer onto the popup (must stay open), and wait (must not vanish on a timer). Repeat with keyboard focus.

## Automation

No automated rule exists for this criterion at all. Requires interactive testing of hover and focus behaviour.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [2.4.11 Focus Not Obscured (Minimum) (AA)](../2.4.11-focus-not-obscured-minimum/index.html)
- [3.2.1 On Focus (A)](../3.2.1-on-focus/index.html)

## Specification

- [Understanding 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [1.4.13 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
