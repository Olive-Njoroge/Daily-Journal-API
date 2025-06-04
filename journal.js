//Created a mongoose model
const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

//export the model
module.exports = mongoose.model("Journal", journalSchema);