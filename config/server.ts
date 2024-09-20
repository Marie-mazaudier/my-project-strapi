export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", process.env.PORT || 1337), // Utiliser la variable d'environnement PORT de Render
  app: {
    keys: env.array("APP_KEYS"),
  },
});
