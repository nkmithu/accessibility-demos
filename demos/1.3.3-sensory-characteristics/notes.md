# Teaching notes — 1.3.3 Sensory Characteristics (Level A)

**Guideline 1.3 Adaptable · Added in WCAG 2.0**

> Instructions do not rely solely on shape, colour, size, visual location, orientation, or sound. "Click the round button on the right" fails; "select Continue" passes.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Blind users have no concept of "on the right". Low-vision users zoomed to 400% see a reflowed layout where "right" is meaningless. Colour-blind users cannot act on "the green box".

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

Search the page text for shape, colour, size, and position words in instructions. Each must be accompanied by a name or other non-sensory identifier.

## Automation

No automated rule exists for this criterion at all. Requires reading and understanding instructional text.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.1 Use of Color (A)](../1.4.1-use-of-color/index.html)
- [1.3.4 Orientation (AA)](../1.3.4-orientation/index.html)

## Specification

- [Understanding 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)
- [1.3.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#sensory-characteristics)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
