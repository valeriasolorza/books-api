const express = require('express');
const cors = require ('cors')
const books = express.Router();
const Book = require('../models/books');  // Import the Book model

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})




//ALL BOOKS 
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
            message: 'Books unsuccessfully found'
        })
    }) 
})

//GET BY ID
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)    
    .then(foundBook => {
        res.status(200).json(foundBook)
    })
    .catch(err => {
        res.status(404).json({
        message: 'Book unsuccessfully found'
        })
    })
})

//PUT ROUTE
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedBook => {
        res.status(200).json(updatedBook)
    })
    .catch(err => {
        res.status(400).json({
        message: 'Failed to update the book'
        })
    })
})

//DELETE BOOK
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(deletedBook => {
        console.log()
        res.status(200).json({
            message: 'Book successfully deleted'
        })
    })
    .catch(err => {
        res.status(400).json({
            message: 'deletion unsuccessful'
        })
    })
})

//ADD BOOK
books.post('/', (req, res) => {
    Book.create(req.body)
        .then(createdBook =>{
            res.status(200).json(createdBook)
        })
        .catch(err => {
            res.status(400).json({
            message: 'Could not add the book'
        })
    })
})

// Export the router
module.exports = books;
