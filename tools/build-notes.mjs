// Fills in demos/*/notes.md — the instructor talk track for each criterion.
//
// Only writes a file that is still an unedited TODO stub, so any notes an
// instructor has written by hand are never overwritten.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ALL, ROOT } from './load-criteria.mjs';

const STUB = 'TODO: how to introduce this criterion in class.';

const LEVEL_FRAMING = {
  A: 'Level A is the floor. Failing this blocks some group of users from the content entirely, so it is not a "nice to have" and it is not negotiable.',
  AA: 'Level AA is the working standard — what most legislation, procurement policy and accessibility statements actually require. This is the level students will be held to professionally.',
  AAA: 'Level AAA. Teach this as a judgement call, not a checklist item: W3C explicitly does not recommend AAA as a blanket policy for whole sites, because some content cannot satisfy some AAA criteria. The useful question is "is this one affordable here?"',
  OBSOLETE: 'This criterion was removed from WCAG 2.2. Teach it only so students recognise it in older reports and older tooling output.',
};

function notes(c) {
  const detectable = c.axeRules.length > 0;
  const demoBlind = c.demoAxeNote;

  const automationPara = demoBlind
    ? `**The failure this demo shows is invisible to scanners.** ${c.demoAxeNote}\n\nThis is the most valuable thing on the page. Run \`npm run test:a11y\` in front of the class and show them this criterion reporting as manual-only.`
    : detectable
      ? `A scanner can help here — the mapped axe rules are \`${c.axeRules.join('`, `')}\`. Make sure students understand the limit: ${c.automationNote}`
      : `No automated rule exists for this criterion at all. ${c.automationNote}`;

  const related = c.related.length
    ? c.related.map((id) => {
        const r = ALL.find((x) => x.id === id);
        return `- [${r.id} ${r.title} (${r.level})](../${r.dir}/index.html)`;
      }).join('\n')
    : '_None recorded._';

  return `# Teaching notes — ${c.id} ${c.title} (Level ${c.level})

**Guideline ${c.guideline} ${c.guidelineTitle} · ${c.obsolete ? 'Removed in WCAG 2.2' : `Added in WCAG ${c.version}`}**

> ${c.summary}

## Framing

${LEVEL_FRAMING[c.level] || ''}

## Talk track

**1. Start with the person, not the rule.**

${c.whoItAffects}

Do not open with the criterion number. Open with who is shut out and what they cannot do.
The number is how you look it up afterwards.

**2. Show the failing page before you explain anything.**

Open \`fail.html\` and let students try it themselves — with a keyboard, with a screen
reader, in greyscale, at 400% zoom, whichever applies. Let them discover the problem
before you name it. Discovery sticks; being told does not.

**3. Then show the fix side by side.**

Open \`pass.html\` and diff the two in the browser. The demo page shows the relevant
excerpt of each file, quoted directly from the running examples, so what students read is
what they just used.

**4. Then give them the rule.**

Now the criterion text means something, because they have felt the difference.

## How to test it

${c.howToTest}

## Automation

${automationPara}

## Discussion questions

1. Who else benefits from getting this right, beyond the group most affected?
2. What would it cost to fix this properly in a codebase you have worked on — and what
   makes it expensive: the code, or the process that let it ship?
3. Where would you catch this: in design review, in code review, in CI, or only in an
   audit? What does that tell you about where to invest?
${demoBlind ? '4. If a scanner cannot see this, how would you stop it regressing after it is fixed?' : '4. What would a scanner report on a page that fails this in a subtler way than the demo does?'}

## Related criteria

${related}

## Specification

- [Understanding ${c.id} ${c.title}](${c.understandingUrl})
- [${c.id} in the WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/#${c.slug})

---

_These notes were generated from \`data/criteria/\`. Edit this file freely — the build will
never overwrite notes that have been changed._
`;
}

let written = 0, kept = 0;
for (const c of ALL) {
  const file = join(ROOT, 'demos', c.dir, 'notes.md');
  if (existsSync(file) && !readFileSync(file, 'utf8').includes(STUB)) { kept++; continue; }
  writeFileSync(file, notes(c));
  written++;
}
console.log(`  Teaching notes: ${written} written, ${kept} hand-edited file(s) left untouched.`);
