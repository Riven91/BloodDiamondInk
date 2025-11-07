/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blooddiamond-tattoo.de',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/_error'],
  changefreq: 'monthly',
  priority: 0.6,
  transform: async (config, path) => {
    // Höhere Priorität für Home & Standortseiten
    const hi = ['/', '/pforzheim', '/heilbronn', '/boeblingen'];
    return {
      loc: path,
      changefreq: hi.includes(path) ? 'weekly' : 'monthly',
      priority: hi.includes(path) ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
  // Falls App Router genutzt wird, Pfade automatisch crawlen
  // (next-sitemap erkennt App/Pages-Router, keine weitere Aktion nötig)
};
