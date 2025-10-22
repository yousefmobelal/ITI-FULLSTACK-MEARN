const Book = require("./Book");
const Box = require("./Box");

const book1 = new Book("Clean Code", 464);
const book2 = new Book("Design Patterns", 395);
const book3 = new Book("Refactoring", 450);
const book4 = new Book("You Don't Know JS", 280);

const smallBox = new Box("Small Box");
smallBox.add(book1);
smallBox.add(book2);

const mediumBox = new Box("Medium Box");
mediumBox.add(book3);
mediumBox.add(book4);
mediumBox.add(smallBox);

console.log("=== Library Hierarchy ===");
mediumBox.showDetails();
