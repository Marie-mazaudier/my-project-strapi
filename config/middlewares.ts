export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "sandbox.embed.apollographql.com"],
          "frame-src": [
            "'self'",
            "https://studio.apollographql.com",
            "sandbox.embed.apollographql.com",
          ],
          "frame-ancestors": ["'self'", "https://studio.apollographql.com"], // Ajouté
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "sandbox.embed.apollographql.com",
          ],
          "connect-src": [
            "'self'",
            "http://localhost:*",
            "sandbox.embed.apollographql.com",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
