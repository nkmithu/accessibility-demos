# Teaching notes — 4.1.2 Name, Role, Value (Level A)

**Guideline 4.1 Compatible · Added in WCAG 2.0**

> For all user interface components, the name and role can be determined programmatically; states, properties, and values can be set by the user and programmatically determined; and changes to them are notified to user agents.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users, who are told what a control is, what it is called, and what state it is in entirely through this information. A custom toggle built from a div announces as nothing at all.

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

For every control, inspect the accessibility tree for an accessible name, a correct role, and accurate state. Custom widgets — dropdowns, tabs, accordions, toggles, modals — are where this fails. Using a native button or input passes for free.

## Automation

A scanner can help here — the mapped axe rules are `button-name`, `link-name`, `aria-roles`, `aria-valid-attr`, `aria-valid-attr-value`, `aria-required-attr`, `aria-allowed-attr`, `aria-allowed-role`, `aria-hidden-focus`, `aria-toggle-field-name`, `aria-command-name`, `aria-input-field-name`, `aria-meter-name`, `aria-progressbar-name`, `aria-tooltip-name`, `aria-dialog-name`, `frame-title`, `nested-interactive`. Make sure students understand the limit: Scanners catch missing accessible names, invalid ARIA roles and attributes, and forbidden role and attribute combinations. They cannot confirm that state stays accurate as the user interacts, which is the harder half.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [1.3.1 Info and Relationships (A)](../1.3.1-info-and-relationships/index.html)
- [2.5.3 Label in Name (A)](../2.5.3-label-in-name/index.html)
- [4.1.3 Status Messages (AA)](../4.1.3-status-messages/index.html)
- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)

## Specification

- [Understanding 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [4.1.2 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#name-role-value)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
