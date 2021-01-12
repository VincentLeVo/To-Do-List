const mongoose = require('mongoose')

//Mongoose Schema and Model
const noteItemSchema = new mongoose.Schema({
  title: String,
  body: String,
});
const NoteItem = mongoose.model('NoteItem', noteItemSchema)


module.exports = NoteItem;
