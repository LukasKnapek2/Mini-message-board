const { Pool } = require("pg");
const path = require("path");
const envPath =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
require("dotenv").config({ path: path.resolve(__dirname, "..", envPath) });

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

const isProd = process.env.NODE_ENV === "production";

const poolConfig = isProd
  ? {
      connectionString: process.env.DATABASE_URL,
    }
  : {
      host: process.env.POSTGRESQL_HOST,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
      database: process.env.POSTGRESQL_DB,
      port: process.env.POSTGRESQL_PORT,
    };

const pool = new Pool(poolConfig);

module.exports = pool;
