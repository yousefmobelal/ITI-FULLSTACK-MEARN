const uuid = require("./uuid.js");

class Text {
  constructor(title = "") {
    this.id = uuid();
    this.title = title;
  }

  clone() {
    return new Text(this.title);
  }
}

module.exports = Text;
