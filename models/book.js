const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String
});

let Book = mongoose.model("Book", BookSchema);

module.exports = Book;