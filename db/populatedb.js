#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('Odin', 'Hello World!'),
  ('Damon', 'Hello World!');
`;


const connectionString = process.argv[2] ||`postgresql://${process.env.POSTGRESQL_USER}:${process.env.POSTGRESQL_PASSWORD}@localhost:5432/${process.env.POSTGRESQL_DB}`;
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();