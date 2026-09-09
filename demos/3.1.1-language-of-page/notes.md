# Teaching notes — 3.1.1 Language of Page (Level A)

**Guideline 3.1 Readable · Added in WCAG 2.0**

> The default human language of each page can be determined programmatically, using the lang attribute on the html element with a valid BCP 47 language tag.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users hear the page read with the wrong pronunciation rules when the language is missing or wrong — English phonetics applied to Bangla text produce noise, not words. Braille translation, hyphenation, and machine translation all depend on it.

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

Check the html element has a lang attribute whose value is a valid, correct language subtag matching the page's actual primary language. lang="en" on a Bangla page fails just as surely as no lang at all.

## Automation

A scanner can help here — the mapped axe rules are `html-has-lang`, `html-lang-valid`, `valid-lang`. Make sure students understand the limit: Scanners verify that lang is present and is a syntactically valid tag. They cannot tell whether the declared language matches the text actually on the page.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [3.1.2 Language of Parts (AA)](../3.1.2-language-of-parts/index.html)
- [2.4.2 Page Titled (A)](../2.4.2-page-titled/index.html)

## Specification

- [Understanding 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [3.1.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#language-of-page)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
