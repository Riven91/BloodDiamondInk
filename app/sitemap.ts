import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

function collectRoutes(appDir: string) {
  const routes = new Set<string>(['/'])
  const exts = new Set(['.tsx', '.ts', '.jsx', '.js'])

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        const base = entry.name
        if (base === 'api' || base.startsWith('_') || base.startsWith('.')) continue
        walk(p)
        continue
      }

      const ext = path.extname(entry.name)
      if (!exts.has(ext)) continue
      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue

      const rel = path.relative(appDir, p)
      if (!rel) continue
      const segments = rel.split(path.sep)
      segments.pop()

      const filtered = segments.filter((segment) => {
        if (!segment) return false
        if (segment.startsWith('(')) return false
        if (segment.startsWith('@')) return false
        if (segment.startsWith('_')) return false
        return true
      })

      const urlPath = filtered.length === 0 ? '/' : `/${filtered.join('/')}`
      routes.add(urlPath === '/index' ? '/' : urlPath)
    }
  }

  walk(appDir)
  return Array.from(routes).sort()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blooddiamond-tattoo.de'
  const now = new Date()

  const paths = fs.existsSync(appDir) ? collectRoutes(appDir) : ['/']

  return paths.map((p) => ({
    url: new URL(p, base).toString(),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 0.8 : 0.5,
  }))
}
