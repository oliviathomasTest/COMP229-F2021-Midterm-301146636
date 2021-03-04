let mongoose = require('mongoose');

// create a model class
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