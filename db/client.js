const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

//console.log(result.parsed);
// build and export your unconnected client here
const { Client } = require("pg");
const CONNECTION_STRING = process.env.DATABASE_URL; //|| "postgres://postgres@localhost:5433/graceShopper";
const client = new Client({
  connectionString: CONNECTION_STRING,
  ssl:
    process.env.NODE_ENV === "production"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

module.exports = client;
