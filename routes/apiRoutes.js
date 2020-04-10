const db = require('../db')

module.exports = (app) => {

  // get all books
  app.get('/api/books', (req, res) => {
   db.getAllBooks()
    .then(results => res.json(results))
    .catch(error => res.json(error))
  });
  // get a specific book
  app.get('/api/book/:name', (req, res) => {
    const bookName = req.params.name;
    db.getOneBook(bookName)
    .then(results => res.json(results))
    .catch(error => res.json(error))
  })
  // get a specific note
  app.get('/api/book/notes/:name', (req, res) => {
    const bookName = req.params.name;

    db.getBookNotes(bookName)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
  })
  // adding a new book
  app.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;

    db.addBook(title, coverPhoto, authorId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });
  // adding a new book note
  app.post('/api/book/note', (req, res) => {
    const { note, bookId } = req.body;

    db.addBookNote(note, bookId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })
  // deleting a specific note
  app.delete('/api/note/:id', (req, res) => {
    db.deleteNote(req.params.id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })
}