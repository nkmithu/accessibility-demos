# Teaching notes — 2.2.1 Timing Adjustable (Level A)

**Guideline 2.2 Enough Time · Added in WCAG 2.0**

> For each time limit, the user can turn it off, adjust it to at least ten times the default, or extend it with a simple action after a warning with at least 20 seconds to respond.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users who read slowly, type slowly, use a screen reader to review a form, or need to consult someone before submitting. A silent session timeout that discards a half-completed form is a hard failure.

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

Find every timer — session timeouts, checkout holds, auto-advancing carousels with forms, quiz timers. Confirm a warning appears with at least 20 seconds to act and a way to extend.

## Automation

No automated rule exists for this criterion at all. Requires waiting out real timers and observing the warning behaviour.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.2.3 No Timing (AAA)](../2.2.3-no-timing/index.html)
- [2.2.5 Re-authenticating (AAA)](../2.2.5-re-authenticating/index.html)
- [2.2.6 Timeouts (AAA)](../2.2.6-timeouts/index.html)
- [3.3.4 Error Prevention (Legal, Financial, Data) (AA)](../3.3.4-error-prevention-legal-financial-data/index.html)

## Specification

- [Understanding 2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [2.2.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#timing-adjustable)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
