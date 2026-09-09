# Teaching notes — 3.3.8 Accessible Authentication (Minimum) (Level AA)

**Guideline 3.3 Input Assistance · Added in WCAG 2.2**

> A cognitive function test such as remembering a password or solving a puzzle is not required for any authentication step, unless an alternative method exists, a mechanism assists the user, or the test is object recognition or personal non-text content.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities affecting memory, reading, or numeracy. Users with dyslexia facing a distorted-text CAPTCHA. Blocking password managers by disabling paste turns a minor barrier into an impassable one.

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

Check every authentication step. Confirm paste is permitted in password fields, autocomplete tokens are present so password managers work, and any CAPTCHA offers a non-cognitive alternative. Transcribing a code from another device also fails if it cannot be pasted.

## Automation

**The failure this demo shows is invisible to scanners.** autocomplete="off" is a perfectly valid token, so axe's autocomplete-valid rule is satisfied by it. Blocking paste with onpaste="return false", and requiring a transcription CAPTCHA, are both invisible to every scanner - yet they are what actually locks people out of their accounts.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [3.3.9 Accessible Authentication (Enhanced) (AAA)](../3.3.9-accessible-authentication-enhanced/index.html)
- [3.3.7 Redundant Entry (A)](../3.3.7-redundant-entry/index.html)
- [1.3.5 Identify Input Purpose (AA)](../1.3.5-identify-input-purpose/index.html)

## Specification

- [Understanding 3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)
- [3.3.8 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
