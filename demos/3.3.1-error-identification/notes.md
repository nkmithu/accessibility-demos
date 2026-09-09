# Teaching notes — 3.3.1 Error Identification (Level A)

**Guideline 3.3 Input Assistance · Added in WCAG 2.0**

> If an input error is automatically detected, the item in error is identified and the error is described to the user in text.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users, who cannot see a red border. Colour-blind users, for whom red-only marking is invisible. Anyone who needs to know which of fifteen fields is wrong and why.

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

Submit a form with deliberate errors. Confirm each error is described in text, names the specific field, and is programmatically associated with it via aria-describedby, and that the error is announced.

## Automation

**The failure this demo shows is invisible to scanners.** The errors are signalled with a CSS class and a red border. There is no aria-invalid and no message for axe to validate, so there is nothing for a rule to fire on. A scanner also has to be driven into the error state first: scanning the clean, unsubmitted form finds nothing no matter how broken the error handling is.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [3.3.3 Error Suggestion (AA)](../3.3.3-error-suggestion/index.html)
- [3.3.2 Labels or Instructions (A)](../3.3.2-labels-or-instructions/index.html)
- [4.1.3 Status Messages (AA)](../4.1.3-status-messages/index.html)
- [1.4.1 Use of Color (A)](../1.4.1-use-of-color/index.html)

## Specification

- [Understanding 3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [3.3.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#error-identification)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
