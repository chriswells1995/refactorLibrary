
const orm = require("../config/orm.js");

class Book {
    selectAll() {
      return orm.selectAll()
    }
    selectOne(bookName) {
        return orm.getOneBook(bookName)
      }
    create(title, coverPhoto, authorId) {
      return orm.addBook(title, coverPhoto, authorId)
    }
  };

  module.exports= new Book();