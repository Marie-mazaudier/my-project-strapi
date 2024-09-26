export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "config-sync": {
    enabled: true,
    config: {
      syncDir: "config/sync/", // Emplacement où les fichiers de configuration seront exportés/importés
      minify: false,
      importOnBootstrap: false,
      exclude: ["core-store"], // Exclure certaines configurations si nécessaire
      include: ["core-store.plugin_users-permissions_grant"], // Inclure des configurations spécifiques
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      playgroundAlways: true, // Pour activer le playground
      introspection: true, // Pour autoriser l'introspection GraphQL
    },
  },
  "apollo-sandbox": {
    enabled: process.env.NODE_ENV !== "production", // Activer en développement
    config: {
      endpoint: "http://localhost:1337/graphql", // Endpoint GraphQL
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
