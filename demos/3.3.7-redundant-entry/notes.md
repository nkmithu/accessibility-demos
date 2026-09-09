# Teaching notes — 3.3.7 Redundant Entry (Level A)

**Guideline 3.3 Input Assistance · Added in WCAG 2.2**

> Information previously entered by the user in the same process is auto-populated or available to select, unless re-entry is essential, the information is security-sensitive, or the earlier value is no longer valid.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who must hold a value in working memory across steps. Users with motor disabilities for whom every keystroke costs effort. Typing an address twice in a checkout is the standard failure.

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

Walk a multi-step process and note anything asked for twice. A shipping address repeated as a billing address must offer a Same as shipping option or be pre-filled. Password confirmation is an allowed exception.

## Automation

No automated rule exists for this criterion at all. Requires walking a multi-step process and tracking what is asked more than once.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.5 Identify Input Purpose (AA)](../1.3.5-identify-input-purpose/index.html)
- [2.2.5 Re-authenticating (AAA)](../2.2.5-re-authenticating/index.html)
- [3.3.8 Accessible Authentication (Minimum) (AA)](../3.3.8-accessible-authentication-minimum/index.html)

## Specification

- [Understanding 3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)
- [3.3.7 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#redundant-entry)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
