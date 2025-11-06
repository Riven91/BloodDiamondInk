#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FROM = process.argv[2] ?? 'mandala1 (1).jpeg';
const TO = process.argv[3] ?? 'mandala1-1.jpeg';

if (FROM === TO) {
  console.error('[fix-unsafe-filenames] `from` and `to` values are identical. Nothing to do.');
  process.exit(1);
}

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  '.turbo',
  '.vercel',
  'dist',
  'out',
]);

const EXT_PATTERN = /\.(tsx?|jsx?|cts|mts|js|ts|json|ya?ml|mdx?|html?|css|scss|sass)$/i;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const location = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(location, files);
    } else if (EXT_PATTERN.test(entry.name)) {
      files.push(location);
    }
  }
  return files;
}

const files = walk(ROOT);
let changed = 0;

for (const file of files) {
  const contents = fs.readFileSync(file, 'utf8');
  if (!contents.includes(FROM)) continue;
  fs.writeFileSync(file, contents.split(FROM).join(TO), 'utf8');
  changed += 1;
}

console.log(`[fix-unsafe-filenames] Updated ${changed} file(s).`);
