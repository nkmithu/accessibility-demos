# Teaching notes — 4.1.3 Status Messages (Level AA)

**Guideline 4.1 Compatible · Added in WCAG 2.1**

> Status messages can be programmatically determined through role or properties so they are announced by assistive technology without receiving focus.

## Framing

Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.

## Talk track

**1. Start with the person, not the rule.**

Screen reader users, who otherwise never learn that a search returned 12 results, that an item was added to the basket, or that a form saved. The message appears on screen and is silently invisible to them.

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

Trigger each status update — search results, validation summaries, add-to-cart confirmations, loading states, auto-save notices. Confirm each is inside a live region that exists in the DOM before the message arrives, and confirm a screen reader actually announces it.

## Automation

**The failure this demo shows is invisible to scanners.** There is nothing for a rule to fire on. axe validates live-region attributes when they are present; the failure here is that no live region EXISTS, so the scanner sees an ordinary paragraph. A scanner also cannot press the button, so it never observes the update at all. 4.1.3 has to be tested by triggering each status change with a screen reader running.

This is the most valuable thing on the page. Run `npm run test:a11y` in front of the class and show them this criterion reporting as manual-only.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. If a scanner cannot see this, how would you stop it regressing after it is fixed?

## Related criteria

- [4.1.2 Name, Role, Value (A)](../4.1.2-name-role-value/index.html)
- [3.3.1 Error Identification (A)](../3.3.1-error-identification/index.html)

## Specification

- [Understanding 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [4.1.3 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#status-messages)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
