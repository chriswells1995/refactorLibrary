  const note = require("../models/note.js")
  

  module.exports = (app) => {


  // get a specific note
  app.get('/api/book/notes/:name', (req, res) => {
    const bookName = req.params.name;

    note.selectNoteByBook(bookName)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
  })


    // adding a new book note
    app.post('/api/book/note', (req, res) => {
        const { note, bookId } = req.body;
    
        note.make(note, bookId)
        .then(() => res.status(200).json(true))
        .catch(error => res.status(500).json(error))
      })

      // deleting a specific note
      app.delete('/api/note/:id', (req, res) => {
        note.delete(req.params.id)
        .then(() => res.status(200).json(true))
        .catch(error => res.status(500).json(error))
      })

    }


      