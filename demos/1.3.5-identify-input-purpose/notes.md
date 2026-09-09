# Teaching notes — 1.3.5 Identify Input Purpose (Level AA)

**Guideline 1.3 Adaptable · Added in WCAG 2.1**

> The purpose of each input field collecting information about the user can be determined programmatically, using the HTML autocomplete attribute with the standard token list.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with motor disabilities benefit from autofill instead of typing. Users with cognitive disabilities benefit from tools that add familiar icons to fields. Everyone benefits from fewer keystrokes.

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

For each field asking for the user's own information (name, email, address, phone, credit card), confirm a correct autocomplete token. Note the token must come from the WCAG-defined list — autocomplete="on" is not sufficient.

## Automation

A scanner can help here — the mapped axe rules are `autocomplete-valid`. Make sure students understand the limit: Scanners validate that an autocomplete value is a recognised token. They cannot confirm the token is the right one for the field.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.6 Identify Purpose (AAA)](../1.3.6-identify-purpose/index.html)
- [3.3.2 Labels or Instructions (A)](../3.3.2-labels-or-instructions/index.html)
- [3.3.7 Redundant Entry (A)](../3.3.7-redundant-entry/index.html)

## Specification

- [Understanding 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [1.3.5 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#identify-input-purpose)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
