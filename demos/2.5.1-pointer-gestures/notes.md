# Teaching notes — 2.5.1 Pointer Gestures (Level A)

**Guideline 2.5 Input Modalities · Added in WCAG 2.1**

> Functionality using multipoint or path-based gestures can also be operated with a single pointer without a path-based gesture, unless the gesture is essential.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with tremor or limited dexterity who cannot perform a pinch or swipe. Users of a head pointer or eye tracker, which produce single points only.

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

Find every pinch-zoom, swipe, and multi-finger gesture. Confirm a single-tap alternative exists — buttons beside a carousel, zoom controls on a map.

## Automation

No automated rule exists for this criterion at all. Gesture handlers live in script and must be discovered and tested by hand.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.5.7 Dragging Movements (AA)](../2.5.7-dragging-movements/index.html)
- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [2.5.2 Pointer Cancellation (A)](../2.5.2-pointer-cancellation/index.html)

## Specification

- [Understanding 2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html)
- [2.5.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#pointer-gestures)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
