const uuid = require("./uuid.js");

class Page {
  constructor(number = 1, text = "") {
    this.id = uuid();
    this.number = number;
    this.text = text;
  }

  clone() {
    return new Page(this.number, this.text);
  }
}

module.exports = Page;
