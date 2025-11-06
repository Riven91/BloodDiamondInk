/** @type {import('next-sitemap').IConfig} */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://blooddiamond-tattoo.de').replace(/\/+$/, '');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: './public',
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/404', '/500', '/_error'],
  transform: async (_config, path) => {
    const hi = ['/', '/pforzheim', '/heilbronn', '/boeblingen'];
    return {
      loc: path,
      changefreq: hi.includes(path) ? 'weekly' : 'monthly',
      priority: hi.includes(path) ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
