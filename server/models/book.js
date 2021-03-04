/* models/book.js  Olivia Thomas  (301146636)  04-03-2021 */ 
let mongoose = require('mongoose');

// create a book model class
let bookModel = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    author: String,
    published: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', bookModel);