# Teaching notes — 1.3.1 Info and Relationships (Level A)

**Guideline 1.3 Adaptable · Added in WCAG 2.0**

> Structure and relationships conveyed visually are also available programmatically. Headings are headings, lists are lists, tables have header cells, and form fields have real labels.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users navigate by structure — jumping heading to heading, listing landmarks, reading a table cell with its row and column headers. Bold text styled to look like a heading provides none of that.

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

Turn off CSS, or view the accessibility tree. Every visual grouping, heading level, list, and table relationship should still be expressed in the markup. Check label/for pairings, th with scope, fieldset/legend for radio groups.

## Automation

A scanner can help here — the mapped axe rules are `label`, `form-field-multiple-labels`, `th-has-data-cells`, `td-headers-attr`, `empty-heading`, `definition-list`, `list`, `listitem`, `aria-required-children`, `aria-required-parent`. Make sure students understand the limit: Scanners catch missing form labels, empty headings, and layout tables with headers. They cannot detect a div styled to look like an h2, or a heading hierarchy that is technically valid but semantically wrong.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.2 Meaningful Sequence (A)](../1.3.2-meaningful-sequence/index.html)
- [2.4.6 Headings and Labels (AA)](../2.4.6-headings-and-labels/index.html)
- [2.4.10 Section Headings (AAA)](../2.4.10-section-headings/index.html)
- [4.1.2 Name, Role, Value (A)](../4.1.2-name-role-value/index.html)

## Specification

- [Understanding 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.3.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#info-and-relationships)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
