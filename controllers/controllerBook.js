const book = require("../models/book.js")
// api get call returning all books

module.exports = (app) => {


  // get all books
  app.get('/api/books', (req, res) => {
    book.selectAll()
     .then(results => res.json(results))
     .catch(error => res.json(error))
   });
   // get a specific book
   app.get('/api/book/:name', (req, res) => {
     const bookName = req.params.name;
     book.selectOne(bookName)
     .then(results => res.json(results))
     .catch(error => res.json(error))
   })

     // adding a new book
  app.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;

    book.create(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });


}