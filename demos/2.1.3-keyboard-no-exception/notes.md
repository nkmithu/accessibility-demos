# Teaching notes — 2.1.3 Keyboard (No Exception) (Level AAA)

**Guideline 2.1 Keyboard Accessible · Added in WCAG 2.0**

> All functionality is keyboard operable with no exception for functions that require path-dependent input such as freehand drawing.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Keyboard-only users who are excluded from the small set of features 2.1.1 allows to remain mouse-only.

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

Identify any path-dependent feature — signature capture, freehand drawing, drag-based map panning — and confirm a keyboard-operable equivalent exists.

## Automation

No automated rule exists for this criterion at all. Requires identifying path-dependent functionality and testing alternatives by hand.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [2.5.7 Dragging Movements (AA)](../2.5.7-dragging-movements/index.html)

## Specification

- [Understanding 2.1.3 Keyboard (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html)
- [2.1.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#keyboard-no-exception)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
