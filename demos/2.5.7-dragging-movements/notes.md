# Teaching notes — 2.5.7 Dragging Movements (Level AA)

**Guideline 2.5 Input Modalities · Added in WCAG 2.2**

> Functionality that uses a dragging movement can be achieved with a single pointer without dragging, unless dragging is essential.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with tremor, limited dexterity, or a head pointer, who can tap accurately but cannot hold and drag along a path. Drag-only reordering, sliders, and map panning exclude them.

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

Find every drag interaction — reorderable lists, sliders, kanban boards, drag-to-upload, map panning. Confirm a click or tap alternative exists: up and down buttons, a numeric input, arrow-key panning.

## Automation

No automated rule exists for this criterion at all. Requires finding drag handlers and testing for a non-drag path to the same result.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.5.1 Pointer Gestures (A)](../2.5.1-pointer-gestures/index.html)
- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [2.1.3 Keyboard (No Exception) (AAA)](../2.1.3-keyboard-no-exception/index.html)

## Specification

- [Understanding 2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [2.5.7 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#dragging-movements)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
