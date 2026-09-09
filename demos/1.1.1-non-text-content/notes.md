# Teaching notes — 1.1.1 Non-text Content (Level A)

**Guideline 1.1 Text Alternatives · Added in WCAG 2.0**

> All non-text content has a text alternative that serves the equivalent purpose. Decorative images are given an empty alt attribute so assistive technology ignores them.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users get nothing at all from an unlabelled image. Users who disable images, are on slow connections, or use text-only browsers lose the content entirely. Search indexing and translation tools also depend on it.

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

Inspect every img, svg, canvas, area, input[type=image], and CSS background that carries meaning. Ask: if this image vanished and were replaced by its alt text, would the page still make sense? Decorative images must have alt="" (not a missing alt, and not alt="decorative image").

## Automation

A scanner can help here — the mapped axe rules are `image-alt`, `input-image-alt`, `area-alt`, `role-img-alt`, `svg-img-alt`, `object-alt`. Make sure students understand the limit: Scanners detect a missing alt attribute reliably. They cannot judge whether the alt text is accurate or meaningful — alt="image" passes every automated tool and fails every real user.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.4.5 Images of Text (AA)](../1.4.5-images-of-text/index.html)
- [1.4.9 Images of Text (No Exception) (AAA)](../1.4.9-images-of-text-no-exception/index.html)
- [2.4.4 Link Purpose (In Context) (A)](../2.4.4-link-purpose-in-context/index.html)
- [4.1.2 Name, Role, Value (A)](../4.1.2-name-role-value/index.html)

## Specification

- [Understanding 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [1.1.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#non-text-content)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
