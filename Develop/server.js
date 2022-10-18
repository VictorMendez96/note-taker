//Import required modules
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Get Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Listener and notifier of functioning port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);