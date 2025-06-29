const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 47335,
  user: 'mindsdb',
  password: 'mindsdb',
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed:', err.message);
  } else {
    console.log('✅ Connected to MindsDB!');
  }
});
