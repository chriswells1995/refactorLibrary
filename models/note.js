
const orm = require("../config/orm.js")
  
  class Note {
    selectNoteByBook(bookTitle) {
      return orm.getBookNotes(bookTitle)
    }
    make(note, bookId) {
      return orm.addBookNote("notes", note, bookId)
    }
  
    delete(noteId){
      return orm.deleteNote('notes', noteId)
    }
  };

  module.exports= new Note();