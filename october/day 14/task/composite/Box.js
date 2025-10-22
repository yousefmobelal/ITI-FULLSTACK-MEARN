const Item = require("./Item");

class Box extends Item {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)} Box: ${this.name}`);
    this.items.forEach((item) => item.showDetails(indent + 2));
  }
}

module.exports = Box;
