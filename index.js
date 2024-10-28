// index.js
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes'); // Importing routes from separate file

app.use(express.static(path.join(__dirname, 'build')));

// Use the routes for handling API endpoints
app.use('/api', routes);

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
