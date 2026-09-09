# Teaching notes — 4.1.1 Parsing (Level OBSOLETE)

**Guideline 4.1 Compatible · Removed in WCAG 2.2**

> Removed from WCAG 2.2. This criterion required elements to have complete start and end tags, be nested correctly, avoid duplicate attributes, and have unique IDs. It is retained here as an explainer, not as a demo, and does not count toward conformance.

## Framing

This criterion was removed from WCAG 2.2. Teach it only so students recognise it in older reports and older tooling output.

## Talk track

**1. Start with the person, not the rule.**

Historically, screen reader users on browsers that could not recover from malformed HTML. Modern browsers and assistive technologies all use the same standardised HTML parsing and error-recovery algorithm, so the criterion no longer described a real barrier.

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

Not applicable — do not evaluate this criterion in a WCAG 2.2 audit. Note that genuine parsing problems that do cause harm, such as duplicate IDs breaking a label association, are already failures of 1.3.1 or 4.1.2.

## Automation

A scanner can help here — the mapped axe rules are `duplicate-id-aria`. Make sure students understand the limit: Validators still report these issues, and they remain worth fixing as code quality. They are simply no longer a WCAG conformance requirement in their own right.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.1 Info and Relationships (A)](../1.3.1-info-and-relationships/index.html)
- [4.1.2 Name, Role, Value (A)](../4.1.2-name-role-value/index.html)

## Specification

- [Understanding 4.1.1 Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)
- [4.1.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#parsing)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
