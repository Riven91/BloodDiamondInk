const fs = require('fs'); const path = require('path');
const ROOT = process.cwd(); 
const TARGETS = ['app','components','src','pages']; // durchsuchen 
const FROM = 'mandala1 (1).jpeg'; 
const TO   = 'mandala1-1.jpeg'; 
 
function walk(dir, list=[]) { 
  if (!fs.existsSync(dir)) return list; 
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) { 
    const p = path.join(dir, e.name); 
    if (e.isDirectory()) walk(p, list); 
    else if (/\.(tsx?|jsx?|mdx?|html|css)$/.test(p)) list.push(p); 
  } 
  return list; 
} 
 
let changed = 0; 
for (const base of TARGETS) { 
  walk(path.join(ROOT, base)).forEach(f=>{ 
    let s = fs.readFileSync(f,'utf8'); 
    if (s.includes(FROM)) { 
      s = s.split(FROM).join(TO); 
      fs.writeFileSync(f,s,'utf8'); 
      changed++; 
    } 
  }); 
} 
console.log(`[fix-unsafe-filenames] Updated ${changed} file(s).`); 
