// Spacing-Fix Codemod (Node 18+, keine Abhängigkeiten)
// 1) Entfernt jede Verwendung von OtherSectionsSpacingFix (Import + JSX)
// 2) Ersetzt mt-24|mt-20|mt-16 durch section-spacing (als eigenständige Klasse)
// 3) Lässt alle anderen Klassen/Zeilen unverändert
// Ausführung: node scripts/spacing-fix.cjs

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = [
  path.join(ROOT, 'app'),
  path.join(ROOT, 'components'),
  path.join(ROOT, 'src'),
];

/** Collect .tsx files recursively */
function collectTSXFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectTSXFiles(p, out);
    } else if (entry.isFile() && p.endsWith('.tsx')) {
      out.push(p);
    }
  }
  return out;
}

/** Delete file if exists */
function safeUnlink(file) {
  try {
    if (fs.existsSync(file)) fs.unlinkSync(file);
  } catch {}
}

/** Replace all standalone class tokens `mt-24|mt-20|mt-16` with `section-spacing` */
function replaceMarginTokens(code) {
  // Nur ganze Tokens (whitespace-bounded), keine Substrings
  const tokenRe = /(?<=^|[\s"'`{(])mt-(?:24|20|16)(?=[$\s"'`}),])/g;
  let out = code.replace(tokenRe, 'section-spacing');
  // Dopplungen bereinigen: "section-spacing section-spacing" -> "section-spacing"
  out = out.replace(/\bsection-spacing(?:\s+section-spacing)+\b/g, 'section-spacing');
  return out;
}

/** Remove imports/usages of OtherSectionsSpacingFix */
function stripOtherSectionsFix(code) {
  // Nur den einzelnen Identifier „OtherSectionsSpacingFix“ aus Importen entfernen, nicht die ganze Zeile.
  let out = code;

  const formatNamedImport = (items, inner, src, semi) => {
    const hasNewline = /\n/.test(inner);
    if (hasNewline) {
      const indentMatch = inner.match(/\n([ \t]*)\S/);
      const indent = indentMatch ? indentMatch[1] : '  ';
      const formatted =
        '\n' +
        items
          .map((item, idx) => `${indent}${item}${idx < items.length - 1 ? ',' : ''}`)
          .join('\n') +
        '\n';
      return `import {${formatted}} from ${src}${semi}`;
    }
    return `import { ${items.join(', ')} } from ${src}${semi}`;
  };

  // Mehrzeilige oder einzeilige named imports wie:
  // import { OtherSectionsSpacingFix, Section } from '@/components';
  out = out.replace(
    /import\s*\{([\s\S]*?)\}\s*from\s*(['"][^'"]+['"])((?:;[ \t]*)?)/g,
    (m, inner, src, semi) => {
      if (!/\bOtherSectionsSpacingFix\b/.test(inner)) {
        return m;
      }

      const filtered = inner
        .split(',')
        .map(s => s.trim())
        .filter(s => s && !/\bOtherSectionsSpacingFix\b/.test(s));
      if (!filtered.length) return '';
      return formatNamedImport(filtered, inner, src, semi || '');
    }
  );

  // Mixed default + named imports, z.B.: import OtherSectionsSpacingFix, { Section } from '...';
  out = out.replace(
    /^[ \t]*import\s+OtherSectionsSpacingFix\s*,\s*\{([\s\S]*?)\}\s*from\s*(['"][^'"]+['"])((?:;[ \t]*)?)[ \t]*$/gm,
    (m, inner, src, semi) => {
      const filtered = inner
        .split(',')
        .map(s => s.trim())
        .filter(s => s && !/\bOtherSectionsSpacingFix\b/.test(s));
      if (!filtered.length) return '';
      return formatNamedImport(filtered, inner, src, semi || '');
    }
  );

  // Einzeilige default-Imports wie: import OtherSectionsSpacingFix from '...';
  out = out.replace(
    /^[ \t]*import\s+OtherSectionsSpacingFix\s+from\s+[^;]+;?[ \t]*$/gm,
    ''
  );

  // JSX-Verwendungen löschen
  out = out
    .replace(/<OtherSectionsSpacingFix\s*\/>/g, '')
    // JSX-Tag mit Inhalt (zur Sicherheit, falls es je so verwendet wurde)
    .replace(/<OtherSectionsSpacingFix[\s\S]*?<\/OtherSectionsSpacingFix>/g, '');

  return out;
}

function processFile(file) {
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  after = stripOtherSectionsFix(after);
  after = replaceMarginTokens(after);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    return true;
  }
  return false;
}

(function main(){
  // 1) Entferne die Laufzeit-Komponente (falls vorhanden)
  const candidates = [
    path.join(ROOT, 'app', 'components', 'OtherSectionsSpacingFix.tsx'),
    path.join(ROOT, 'components', 'OtherSectionsSpacingFix.tsx'),
    path.join(ROOT, 'src', 'components', 'OtherSectionsSpacingFix.tsx'),
  ];
  for (const f of candidates) safeUnlink(f);

  // 2) .tsx-Dateien durchgehen & bearbeiten
  const files = TARGET_DIRS.flatMap(d => collectTSXFiles(d, []));
  let changed = 0;
  for (const f of files) {
    const did = processFile(f);
    if (did) changed++;
  }
  console.log(`[spacing-fix] Updated ${changed} file(s).`);
})();
