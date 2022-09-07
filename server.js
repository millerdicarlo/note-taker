/*
const express = require('express');
const app = express();

const { notes } = require('./data/db');

app.get('/api/notes', (req, res) => {
    res.send('Hello!');
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
  */
// https://desolate-hollows-70629.herokuapp.com/
  // Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}); 