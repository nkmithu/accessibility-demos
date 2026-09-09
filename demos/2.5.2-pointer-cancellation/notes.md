# Teaching notes — 2.5.2 Pointer Cancellation (Level A)

**Guideline 2.5 Input Modalities · Added in WCAG 2.1**

> For functionality operated by a single pointer, the action completes on the up-event, or can be aborted or undone.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with tremor or imprecise pointing who land on the wrong control and need to slide off before releasing to cancel. Firing on mousedown removes that safety net.

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

Press down on a control, move the pointer away, and release. The action must not fire. Look for handlers bound to mousedown, touchstart, or pointerdown that trigger the action directly.

## Automation

No automated rule exists for this criterion at all. Requires reading event bindings or performing the press-and-drag-away test.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.5.1 Pointer Gestures (A)](../2.5.1-pointer-gestures/index.html)
- [3.3.4 Error Prevention (Legal, Financial, Data) (AA)](../3.3.4-error-prevention-legal-financial-data/index.html)

## Specification

- [Understanding 2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)
- [2.5.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#pointer-cancellation)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
