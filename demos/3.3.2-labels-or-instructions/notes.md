# Teaching notes — 3.3.2 Labels or Instructions (Level A)

**Guideline 3.3 Input Assistance · Added in WCAG 2.0**

> Labels or instructions are provided when content requires user input, including format requirements and which fields are required.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Everyone, but especially screen reader users who cannot infer a field's purpose from position, and users with cognitive disabilities who need format expectations stated rather than discovered by failing.

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

Confirm every field has a persistent visible label programmatically associated with it. Check that required fields are marked in text or with required, and that format expectations are stated before submission, not only in an error.

## Automation

A scanner can help here — the mapped axe rules are `label`, `form-field-multiple-labels`, `select-name`. Make sure students understand the limit: Missing labels are caught reliably. Whether instructions are adequate — say, that a date must be DD/MM/YYYY — is a human judgement. Placeholder-only labelling often passes scanners while failing users.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.1 Info and Relationships (A)](../1.3.1-info-and-relationships/index.html)
- [3.3.1 Error Identification (A)](../3.3.1-error-identification/index.html)
- [2.4.6 Headings and Labels (AA)](../2.4.6-headings-and-labels/index.html)
- [1.3.5 Identify Input Purpose (AA)](../1.3.5-identify-input-purpose/index.html)

## Specification

- [Understanding 3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [3.3.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#labels-or-instructions)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
