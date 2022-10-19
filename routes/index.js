// import required modules
const db = require('../db/db.json');
const express = require('express');

// Initiate express server
const app = express()

// GET Route for a all notes
app.get('/api/notes', (req, res) => {

});

// POST Route for new notes
app.post('/api/notes', (req, res) => {

});

// Bonus: DELETE Route for a specific note
app.delete('api/notes', (req, res) => {

});

module.exports = app;