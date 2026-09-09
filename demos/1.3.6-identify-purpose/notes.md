# Teaching notes — 1.3.6 Identify Purpose (Level AAA)

**Guideline 1.3 Adaptable · Added in WCAG 2.1**

> The purpose of user interface components, icons, and regions can be determined programmatically — extending 1.3.5 beyond form fields to the whole interface.

## Framing

Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"

## Talk track

**1. Start with the person, not the rule.**

Users with cognitive disabilities who rely on personalisation tools that swap in familiar symbols, simplify layouts, or hide non-essential regions.

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

Check that landmarks, controls, and icons carry semantics or ARIA that identify their purpose, so a personalisation layer can act on them.

## Automation

**The failure this demo shows is invisible to scanners.** axe's landmark-one-main and region rules would catch the missing landmarks here, but both are tagged best-practice rather than as WCAG rules, so a scan scoped to conformance never runs them. And the deeper requirement - that a personalisation tool could identify each control's purpose - is not something any rule evaluates.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [1.3.5 Identify Input Purpose (AA)](../1.3.5-identify-input-purpose/index.html)
- [3.2.4 Consistent Identification (AA)](../3.2.4-consistent-identification/index.html)

## Specification

- [Understanding 1.3.6 Identify Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html)
- [1.3.6 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#identify-purpose)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
