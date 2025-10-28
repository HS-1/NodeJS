// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', time: new Date() });
});

app.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  res.json({ message: `Received ${name} = ${value}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
