const Item = require("./Item");

class Book extends Item {
  constructor(title, pages) {
    super();
    this.title = title;
    this.pages = pages;
  }

  showDetails(indent = 0) {
    console.log(
      `${" ".repeat(indent)} Book: ${this.title} (${this.pages} pages)`
    );
  }
}

module.exports = Book;
