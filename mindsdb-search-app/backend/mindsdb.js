const mysql = require("mysql2/promise");
require("dotenv").config();

async function connectToMindsDB() {
  return await mysql.createConnection({
    host: process.env.MDB_HOST,
    port: process.env.MDB_PORT,
    user: process.env.MDB_USER,
    password: process.env.MDB_PASSWORD,
    database: "mindsdb",
  });
}

module.exports = { connectToMindsDB };
