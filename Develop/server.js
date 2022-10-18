//Import required modules
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

// Create PORT either from .env or port 3001
const PORT = process.env.PORT || 3001;

// initiate express server
const app = express();

// Use express middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Get Route for index.html page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes.html page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Listener and notifier of functioning port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);