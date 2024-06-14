const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Book schema with the required fields
const bookSchema = new Schema({
    "title": { type: String, require: true },
    "description": String,
    "year": Number,
    "quantity": Number,
    "imageURL": String,
})

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Export the Book model
module.exports = Book;
