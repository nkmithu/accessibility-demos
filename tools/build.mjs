// Regenerates every derived page in the site. Safe to run at any time:
// hand-authored files (fail.html, pass.html, notes.md, explain.html, and the
// content/ fragments) are never overwritten.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const steps = ['verify-criteria.mjs', 'build-demos.mjs', 'build-catalogue.mjs', 'build-home.mjs', 'build-notes.mjs', 'build-audit-record.mjs', 'build-content.mjs'];

for (const step of steps) {
  execFileSync(process.execPath, [join(here, step)], { stdio: 'inherit' });
}
console.log('\n  Build complete.\n');
