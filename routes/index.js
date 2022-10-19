// import required modules
const db = require('../db/db.json');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

// Initiate express server
const app = express()

// GET Route for a all notes
app.get('/notes', (req, res) => {
    res.send(db);
});

// POST Route for new notes
app.post('/notes', (req, res) => {

    console.log(req.body)

    const newNote = {
        id: uuidv4(),
        title: req.body.title, 
        text: req.body.text
    };
    console.log(newNote)

    db.push(newNote);
    console.log(db)
    res.send(newNote);
});

// Bonus: DELETE Route for a specific note
app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    del = db.findIndex((note) => note.id === id)
    db.splice(del, 1)
    
    res.send(db)
});

module.exports = app;