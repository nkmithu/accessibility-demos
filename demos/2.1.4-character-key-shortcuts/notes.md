# Teaching notes — 2.1.4 Character Key Shortcuts (Level A)

**Guideline 2.1 Keyboard Accessible · Added in WCAG 2.1**

> If a shortcut uses only letter, punctuation, number, or symbol characters, it can be turned off, remapped, or is active only when the relevant component has focus.

## Framing

Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.

## Talk track

**1. Start with the person, not the rule.**

Speech input users, whose dictated words fire single-key shortcuts at random. Users with tremor who strike keys accidentally.

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

Identify all single-character shortcuts. Confirm at least one of: a setting to disable them, a setting to remap them to include a modifier, or activation limited to a focused component.

## Automation

No automated rule exists for this criterion at all. Shortcut registration happens in script; discovering and testing it requires reading code and manual trial.

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
4. What would a scanner report on a page that fails this in a subtler way than the demo does?

## Related criteria

- [2.5.4 Motion Actuation (A)](../2.5.4-motion-actuation/index.html)
- [2.1.1 Keyboard (A)](../2.1.1-keyboard/index.html)

## Specification

- [Understanding 2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)
- [2.1.4 in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#character-key-shortcuts)

---

_These notes were generated from `data/criteria/`. Edit this file freely — the build will
never overwrite notes that have been changed._
