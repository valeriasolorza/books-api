const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config();
const booksController = require('./controllers/booksController'); 

// Initialize the app
const app = express();
app.use(express.json());

// MongoDB connection using Mongoose
const mongoURI = process.env.MONGO_URI;

//cors
app.use(cors())

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});


// Set up a basic route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello World! Books API');
});

// Use the books controller for routes starting with /books
app.use('/books', booksController);

// Choose a port for the server to listen on
const PORT = process.env.PORT;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});