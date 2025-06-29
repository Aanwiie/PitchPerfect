import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { q } = req.query;

  const connection = await mysql.createConnection({
    host: process.env.MDB_HOST,
    port: process.env.MDB_PORT,
    user: process.env.MDB_USER,
    password: process.env.MDB_PASSWORD,
  });

  try {
    const [rows] = await connection.query(
      `SELECT title, description, source, published_at, relevance
       FROM news_kb
       WHERE content = ?
       ORDER BY relevance DESC
       LIMIT 10`, [q]
    );

    res.status(200).json({ results: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    connection.end();
  }
}
