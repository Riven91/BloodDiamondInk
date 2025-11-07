/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blooddiamond-tattoo.de',
  generateRobotsTxt: false,
  outDir: './public',
  appDir: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500', '/_not-found', '/error-preview', '/manifest.webmanifest'],
  additionalPaths: async () => {
    const routes = [
      '/',
      '/agb',
      '/agb/boeblingen',
      '/boeblingen',
      '/datenschutz',
      '/datenschutz/boeblingen',
      '/franchise',
      '/heilbronn',
      '/impressum',
      '/impressum/boeblingen',
      '/pforzheim',
      '/standorte',
    ];
    const now = new Date().toISOString();
    return routes.map((loc) => ({
      loc,
      changefreq: 'weekly',
      priority: loc === '/' ? 1.0 : 0.7,
      lastmod: now,
    }));
  },
};
