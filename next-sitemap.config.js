const SITE_URL = process.env.SITE_URL || '';

const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
];

const exclude = [
  '/dashboard*',
  '/settings*',
  '/onboarding*',
  '/blog/tags*',
  '/auth*',
];

module.exports = {
  exclude,
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};