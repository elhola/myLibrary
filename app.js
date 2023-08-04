const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: 'admin',
  port: 5432,
});

app.use(express.json());

client.connect();

async function executeQuery(query, values, res) {
  try {
    const result = await client.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

//завдання 2 в запиті books
const routes = [
  { path: '/api/books', query: 'SELECT mylibrary."Book".*, mylibrary."Author".name AS author_name FROM mylibrary."Book" LEFT JOIN mylibrary."Author" ON mylibrary."Book".author_id = "Author".author_id WHERE true' },
  { path: '/api/authors', query: 'SELECT * FROM mylibrary."Author"' },
  { path: '/api/readers', query: 'SELECT * FROM mylibrary."Readers"' },
  { path: '/api/issuances', query: 'SELECT * FROM mylibrary."Issuance"' }
];

routes.forEach(route => {
  app.get(route.path, (req, res) => {
    executeQuery(route.query, [], res);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});