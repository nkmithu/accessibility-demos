// Guards the dataset against drift. Run before anything is generated from it.
import { ALL, ACTIVE, LEVEL_COUNTS } from './load-criteria.mjs';

const EXPECTED = { total: 86, A: 31, AA: 24, AAA: 31 };
const failures = [];

const check = (cond, msg) => { if (!cond) failures.push(msg); };

check(ACTIVE.length === EXPECTED.total,
  `Expected ${EXPECTED.total} active criteria, found ${ACTIVE.length}`);
for (const level of ['A', 'AA', 'AAA']) {
  check(LEVEL_COUNTS[level] === EXPECTED[level],
    `Expected ${EXPECTED[level]} Level ${level} criteria, found ${LEVEL_COUNTS[level]}`);
}

const ids = ALL.map((c) => c.id);
const dupes = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
check(dupes.length === 0, `Duplicate criterion ids: ${dupes.join(', ')}`);

const REQUIRED = ['id', 'slug', 'title', 'level', 'guideline', 'version',
  'summary', 'whoItAffects', 'howToTest', 'automatable', 'axeRules', 'related', 'tags'];
for (const c of ALL) {
  for (const field of REQUIRED) {
    check(c[field] !== undefined && c[field] !== '', `${c.id}: missing field "${field}"`);
  }
  check(['yes', 'partial', 'no'].includes(c.automatable),
    `${c.id}: automatable must be yes|partial|no, got "${c.automatable}"`);
  check(/^[a-z0-9-]+$/.test(c.slug), `${c.id}: slug "${c.slug}" is not kebab-case`);
  for (const rel of c.related) {
    check(ids.includes(rel), `${c.id}: related criterion "${rel}" does not exist`);
  }
  if (c.automatable === 'no') {
    check(c.axeRules.length === 0,
      `${c.id}: marked not automatable but declares axe rules`);
  }
}

if (failures.length) {
  console.error(`\n  ${failures.length} dataset problem(s):\n`);
  failures.forEach((f) => console.error(`   x ${f}`));
  process.exit(1);
}
console.log(`  Dataset OK - ${ACTIVE.length} active criteria ` +
  `(A: ${LEVEL_COUNTS.A}, AA: ${LEVEL_COUNTS.AA}, AAA: ${LEVEL_COUNTS.AAA})` +
  `, plus ${ALL.length - ACTIVE.length} obsolete explainer.`);
