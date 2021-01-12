// Import NPM Packages:
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

//******----- Mongoose Connection
mongoose.connect('mongodb://localhost:27017/notesDB', {useNewUrlParser: true, useUnifiedTopology: true});

//Checks if connected.
mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected")
})



app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static("public"));
app.use(cors());
app.use('/api',routes);
app.listen(PORT, console.log('Server is running on ' + PORT));
