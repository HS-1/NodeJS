// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

//import routes
const userRoutes = require('./routes/userRoutes');

//register routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
