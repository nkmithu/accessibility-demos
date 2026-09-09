# Teaching notes — 3.1.2 Language of Parts (Level AA)

**Guideline 3.1 Readable · Added in WCAG 2.0**

> The human language of each passage or phrase in the content can be determined programmatically, except for proper names, technical terms, and words that have become part of the surrounding language.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users hearing a foreign phrase mangled by the wrong pronunciation engine. A Bangla quotation inside an English page read with English phonetics is unintelligible.

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

Find every passage in a language other than the page default and confirm it carries its own lang attribute. Check quotations, names of foreign works, and multilingual navigation such as a language switcher.

## Automation

**The failure this demo shows is invisible to scanners.** axe's valid-lang rule validates lang attributes that are present. The failure here is that the Bangla passages have NO lang attribute, and no scanner can detect a language change it was never told about - that would require language identification of the text itself.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [3.1.1 Language of Page (A)](../3.1.1-language-of-page/index.html)

## Specification

- [Understanding 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
- [3.1.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#language-of-parts)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
