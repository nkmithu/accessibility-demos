# Teaching notes — 3.3.6 Error Prevention (All) (Level AAA)

**Guideline 3.3 Input Assistance · Added in WCAG 2.0**

> For any page requiring the user to submit information, submissions are reversible, checked and correctable, or confirmed before finalising — extending 3.3.4 to all submissions, not only consequential ones.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

All users who make mistakes, and particularly users with cognitive and motor disabilities, on every form rather than only high-stakes ones.

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

Confirm every form offers reversibility, validation with correction, or a confirmation step.

## Automation

No automated rule exists for this criterion at all. Requires walking every submission flow.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.3.4 Error Prevention (Legal, Financial, Data) (AA)](../3.3.4-error-prevention-legal-financial-data/index.html)
- [3.3.3 Error Suggestion (AA)](../3.3.3-error-suggestion/index.html)

## Specification

- [Understanding 3.3.6 Error Prevention (All)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html)
- [3.3.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#error-prevention-all)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
