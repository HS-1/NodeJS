const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

router.get('/api/status', (req, res) => {
  res.json({ status: 'OK', time: new Date() });
});

router.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  res.json({ message: `Received ${name} = ${value}` });
});

module.exports = router;