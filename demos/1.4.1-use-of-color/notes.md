# Teaching notes — 1.4.1 Use of Color (Level A)

**Guideline 1.4 Distinguishable · Added in WCAG 2.0**

> Colour is not the only visual means of conveying information, indicating an action, prompting a response, or distinguishing an element.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Around 1 in 12 men and 1 in 200 women have some colour vision deficiency. Users of monochrome displays, high-contrast modes, and printouts are affected too.

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

View the page in greyscale. Any information still distinguishable? Classic failures: required fields marked only in red, chart series distinguished only by colour, links in body text with no underline.

## Automation

A scanner can help here — the mapped axe rules are `link-in-text-block`. Make sure students understand the limit: Scanners can flag links that rely on colour alone against surrounding text. Most other uses of colour require human review in greyscale.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.3 Contrast (Minimum) (AA)](../1.4.3-contrast-minimum/index.html)
- [1.4.11 Non-text Contrast (AA)](../1.4.11-non-text-contrast/index.html)
- [1.3.3 Sensory Characteristics (A)](../1.3.3-sensory-characteristics/index.html)

## Specification

- [Understanding 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [1.4.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#use-of-color)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
