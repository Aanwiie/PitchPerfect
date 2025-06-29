import 'dotenv/config';
import fetch from 'node-fetch';
import mysql from 'mysql2/promise';

const {
  NEWS_API_KEY,
  MDB_HOST,
  MDB_PORT,
  MDB_USER,
  MDB_PASSWORD
} = process.env;

const pool = mysql.createPool({
  host: MDB_HOST,
  port: MDB_PORT,
  user: MDB_USER,
  password: MDB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 5,
});

async function main() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=${NEWS_API_KEY}`
  );
  const { articles } = await res.json();

  const rows = articles.map((a) => [
    a.url, // article_id
    a.source.name,
    a.publishedAt?.slice(0, 19).replace('T', ' ') || '',
    'headline',
    a.title,
    a.description || '',
    a.content || '',
  ]);

  const sql = `
    INSERT INTO news_kb (
      article_id,
      source,
      published_at,
      topic,
      title,
      description,
      content
    )
    VALUES ?
  `;

  const conn = await pool.getConnection();
  await conn.query(sql, [rows]);
  conn.release();
  pool.end();

  console.log(`✅ Inserted ${rows.length} articles into MindsDB KB`);
}

main();
