import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const MINDSDB_URL = process.env.MINDSDB_URL;

app.post('/query', async (req, res) => {
  const { query } = req.body;

  const sql = `
    SELECT * 
    FROM mindsdb.news_kb 
    WHERE content LIKE "${query}"
    LIMIT 5
  `;

  try {
    const response = await axios.post(`${MINDSDB_URL}/api/sql/query`, {
      query: sql
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Query failed: ' + err.message);
  }
});

app.listen(5000, () => {
  console.log('✅ Backend API running at http://localhost:5000');
});
