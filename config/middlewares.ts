export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "sandbox.embed.apollographql.com"],
          "frame-src": [
            "'self'",
            "https://studio.apollographql.com",
            "sandbox.embed.apollographql.com",
          ],
          "frame-ancestors": ["'self'", "https://studio.apollographql.com"],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "sandbox.embed.apollographql.com",
          ],
          "connect-src": [
            "'self'",
            "http://localhost:*", // Pour les connexions en local
            "https://strapi-project-fjvj.onrender.com", // Connexion à ton instance en production
            "sandbox.embed.apollographql.com", // Pour Apollo Sandbox
            "https://studio.apollographql.com", // Pour Apollo Studio
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://res.cloudinary.com", // Pour les images Cloudinary si utilisées
          ],
          "media-src": [
            "'self'",
            "https://res.cloudinary.com", // Autoriser Cloudinary pour les médias
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"], // Autorise toutes les origines. Tu peux restreindre cela à des domaines spécifiques en production
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
