# Teaching notes — 2.1.1 Keyboard (Level A)

**Guideline 2.1 Keyboard Accessible · Added in WCAG 2.0**

> All functionality is operable through a keyboard interface, without requiring specific timings for individual keystrokes.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Blind users, who cannot aim a mouse they cannot see. Users with motor disabilities using switch devices, sip-and-puff, or voice control — all of which drive the keyboard interface underneath.

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

Put the mouse away. Tab through the entire page and operate every control with Enter, Space, and arrow keys. Anything reachable by mouse but not by keyboard fails. Click handlers on div and span elements are the usual cause.

## Automation

**The failure this demo shows is invisible to scanners.** The failure this demo shows - a div with a click handler - is the most common keyboard failure on the web, and no automated scanner detects it. The rules listed under axeRules catch other, narrower failures of 2.1.1.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [2.1.2 No Keyboard Trap (A)](../2.1.2-no-keyboard-trap/index.html)
- [2.1.3 Keyboard (No Exception) (AAA)](../2.1.3-keyboard-no-exception/index.html)
- [2.4.3 Focus Order (A)](../2.4.3-focus-order/index.html)
- [2.4.7 Focus Visible (AA)](../2.4.7-focus-visible/index.html)
- [4.1.2 Name, Role, Value (A)](../4.1.2-name-role-value/index.html)

## Specification

- [Understanding 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.1.1 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#keyboard)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
