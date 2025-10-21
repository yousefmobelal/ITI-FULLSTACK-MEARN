const uuid = require("./uuid.js");

class Header {
  constructor(title = "") {
    this.id = uuid();
    this.title = title;
  }

  clone() {
    return new Header(this.title);
  }
}

module.exports = Header;
