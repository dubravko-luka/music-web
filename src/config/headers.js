const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  headers: [
    {
      source: '/(.*)',
      headers: createSecureHeaders({
        forceHTTPSRedirect: [
          true,
          {
            maxAge: 30 * 24 * 60 * 60,
            includeSubDomains: false,
            preload: false,
          },
        ],
        referrerPolicy: 'no-referrer-when-downgrade',
      }),
    },
  ]
}