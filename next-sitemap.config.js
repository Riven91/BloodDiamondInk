/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://blooddiamond-tattoo.de',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    // Priorität für Hauptseiten etwas höher
    const isRoot = path === '/';
    const isLocation = ['/pforzheim', '/heilbronn', '/boeblingen'].includes(path);
    return {
      loc: path,
      changefreq: isRoot || isLocation ? 'weekly' : 'monthly',
      priority: isRoot || isLocation ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
