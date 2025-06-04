const express = require('express');
const mongoose = require('mongoose');
const journal = require('./routes');

//Create a server
const app = express();
const PORT = 3000;

//Create middleware
app.use(express.json());

//fire up mongodb
const mongoUri = 'mongodb://localhost:27017/journaldb';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to mongoDB"))
  .catch(err => console.error("Mongodb connection error", err));

app.use('/', journal);

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});