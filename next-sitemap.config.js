/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blooddiamond-tattoo.de',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/manifest.webmanifest', '/error-preview'],
};
