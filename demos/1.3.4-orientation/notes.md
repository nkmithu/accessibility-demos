# Teaching notes — 1.3.4 Orientation (Level AA)

**Guideline 1.3 Adaptable · Added in WCAG 2.1**

> Content does not restrict its view to a single display orientation such as portrait or landscape, unless a specific orientation is essential.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Users with a device mounted to a wheelchair or a fixed stand cannot rotate it. Locking to portrait makes the content unusable for them.

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

Rotate the device or resize the browser to both orientations. Content must reflow and remain usable in both. Check for CSS orientation media queries that hide content and for scripts that force rotation.

## Automation

**The failure this demo shows is invisible to scanners.** axe's css-orientation-lock rule detects one narrow technique: a CSS transform used to rotate the page inside an orientation media query. The failure shown here is different and far more common - hiding the content in one orientation and demanding the user rotate. No rule catches that, and none catches screen.orientation.lock() in script.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [1.4.10 Reflow (AA)](../1.4.10-reflow/index.html)
- [1.3.3 Sensory Characteristics (A)](../1.3.3-sensory-characteristics/index.html)

## Specification

- [Understanding 1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
- [1.3.4 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#orientation)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
