#!/usr/bin/env node
/**
 * build-resume-pdf.mjs — regenerate public/resume.pdf.
 *
 *   npm run resume:pdf
 *
 * The PDF is built by the résumé toolkit (~/Projects/resume-toolkit), the same
 * generator behind the tailored job applications, rather than by printing this
 * site's /resume page. Printing the page produced a print of a web page —
 * cards, timeline rail, three loose pages. A résumé gets judged as a document,
 * so it is typeset as one.
 *
 * Content comes from the toolkit's base profile, which is reconciled against
 * profile/grounding.md. resume/overlay.yaml holds only what differs for a
 * publicly downloadable copy: no email, no phone, no street address.
 *
 * Because the toolkit is the source for the PDF and src/data/resume.js is the
 * source for the web page, the two can diverge. Keep them consistent by hand
 * when either changes — that is the cost of typesetting the PDF properly.
 *
 * Override the toolkit location with RESUME_TOOLKIT=/path/to/resume-toolkit.
 */

import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const toolkit =
  process.env.RESUME_TOOLKIT ?? join(homedir(), 'Projects/resume-toolkit');
const jobDir = join(repoRoot, 'resume');
const built = join(jobDir, 'resume.pdf');
const published = join(repoRoot, 'public/resume.pdf');

const build = join(toolkit, 'build.sh');
if (!existsSync(build)) {
  console.error(`no toolkit at ${toolkit}`);
  console.error('clone giverm/resume-toolkit, or set RESUME_TOOLKIT=<path>');
  process.exit(1);
}

const run = (cmd, args, env) =>
  new Promise((resolveRun, reject) => {
    const p = spawn(cmd, args, {
      stdio: 'inherit',
      env: { ...process.env, ...env },
    });
    p.on('error', reject);
    p.on('exit', (code) =>
      code === 0 ? resolveRun() : reject(new Error(`${cmd} exited ${code}`)),
    );
  });

// TARGET=resume: the toolkit also builds a cover letter, which this repo has no
// use for. classic-ats is single column and extracts cleanly, which matters for
// a PDF strangers will feed to applicant tracking systems.
await run(build, [], {
  JOB: jobDir,
  TARGET: 'resume',
  RESUME_TEMPLATE: 'classic-ats',
});

if (!existsSync(built)) {
  console.error(`toolkit reported success but ${built} is missing`);
  process.exit(1);
}

copyFileSync(built, published);
console.log(`published ${published} (${statSync(published).size} bytes)`);
console.log('note: run `npm run build` again if you need dist/ to carry it.');
