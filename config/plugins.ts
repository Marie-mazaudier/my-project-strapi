export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
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
});
