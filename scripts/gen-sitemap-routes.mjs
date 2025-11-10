import { globby } from 'globby'
import fs from 'node:fs/promises'
import path from 'node:path'

const appDir = path.join(process.cwd(), 'app')
const patterns = [
  'app/**/page.ts',
  'app/**/page.tsx',
  'app/**/page.js',
  'app/**/page.jsx',
]

const files = await globby(patterns, { dot: false })
const routes = new Set(['/'])

for (const file of files) {
  const rel = file.replace(appDir + path.sep, '')
  const segs = rel.split(path.sep)
  segs.pop()
  const clean = segs.filter(
    (s) =>
      s &&
      !s.startsWith('(') &&
      !s.startsWith('_') &&
      !s.startsWith('@') &&
      s !== 'api'
  )
  const url = '/' + clean.join('/')
  routes.add(url === '/index' ? '/' : url)
}

const list = Array.from(routes).sort()
await fs.writeFile(
  path.join(appDir, 'sitemap.routes.json'),
  JSON.stringify(list, null, 2),
  'utf8'
)

console.log(`[sitemap] wrote ${list.length} routes to app/sitemap.routes.json`)
