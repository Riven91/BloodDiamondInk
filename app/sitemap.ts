import type { MetadataRoute } from 'next'
// JSON wird bei Build-Time erzeugt und ins Bundle gepackt
import routes from './sitemap.routes.json' assert { type: 'json' }

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blooddiamond-tattoo.de'
  const now = new Date()
  const paths = (routes as string[]) ?? ['/']

  return paths.map((p) => ({
    url: new URL(p, base).toString(),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 0.8 : 0.5,
  }))
}
