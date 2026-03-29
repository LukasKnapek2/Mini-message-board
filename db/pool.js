const { Pool } = require("pg");
require("dotenv").config();
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: process.env.POSTGRESQL_HOST,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DB,
  port: process.env.POSTGRESQL_PORT,
});