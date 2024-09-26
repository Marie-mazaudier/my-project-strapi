export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "config-sync": {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: false,
      importOnBootstrap: false,
      exclude: ["core-store"],
      include: ["core-store.plugin_users-permissions_grant"],
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      playgroundAlways: true,
      introspection: true,
    },
  },
  "apollo-sandbox": {
    enabled: true, // Activer Apollo Sandbox aussi bien en production qu'en développement
    config: {
      // Utilisation des variables d'environnement pour définir l'endpoint
      endpoint: env("STRAPI_API_URL") + "/graphql",
    },
  },
  upload: {
    config: {
      provider: "@strapi/provider-upload-cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
