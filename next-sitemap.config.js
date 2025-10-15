/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.blooddiamondink.example",
  generateRobotsTxt: true,
  outDir: "./public"
};
