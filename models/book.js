

class Book {
    selectAll() {
      return orm.selectAll("cats")
    }
    selectOne(bookName) {
        return orm.selectOne("cats")
      }
    create(title, coverPhoto, authorId) {
      return orm.create("cats", columns, values)
    }
  };