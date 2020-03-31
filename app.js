// Require Libraries
const express = require('express');

// Setup Express App
const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
});

// Start Server

app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});