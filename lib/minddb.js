import mysql from 'mysql2/promise';

export async function connectMindsDB() {
  const connection = await mysql.createConnection({
    host: process.env.MDB_HOST,
    port: process.env.MDB_PORT,
    user: process.env.MDB_USER,
    password: process.env.MDB_PASSWORD,
  });

  return connection;
}
