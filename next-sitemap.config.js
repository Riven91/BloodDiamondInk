/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blooddiamondink.de",
  generateRobotsTxt: true,
  outDir: "./public"
};
