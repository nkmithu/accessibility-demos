# Teaching notes — 2.5.6 Concurrent Input Mechanisms (Level AAA)

**Guideline 2.5 Input Modalities · Added in WCAG 2.1**

> Content does not restrict use of input modalities available on a platform, except where necessary for security or to respect user settings.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users who switch between touch, keyboard, and mouse within a single session — common for users with fluctuating conditions and for anyone on a 2-in-1 device.

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

Switch input methods mid-task. A site that detects touch and disables keyboard handlers, or vice versa, fails.

## Automation

No automated rule exists for this criterion at all. Requires testing with multiple input devices on the same session.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)
- [2.5.1 Pointer Gestures (A)](../2.5.1-pointer-gestures/index.html)

## Specification

- [Understanding 2.5.6 Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html)
- [2.5.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#concurrent-input-mechanisms)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
