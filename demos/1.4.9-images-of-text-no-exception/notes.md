# Teaching notes — 1.4.9 Images of Text (No Exception) (Level AAA)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> Images of text are used only for pure decoration or where a particular presentation is essential. The AA allowance for customisable images is removed.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Same population as 1.4.5, held to a stricter standard — no image of text at all unless the exact visual form carries the meaning.

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

As 1.4.5, but the only surviving exceptions are logotypes and cases where the specific rendering is the information (a font specimen, a scanned historical document).

## Automation

No automated rule exists for this criterion at all. Requires human judgement about essentiality.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.5 Images of Text (AA)](../1.4.5-images-of-text/index.html)
- [1.1.1 Non-text Content (A)](../1.1.1-non-text-content/index.html)

## Specification

- [Understanding 1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html)
- [1.4.9 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
