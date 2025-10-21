const uuid = require("./uuid.js");

class Footer {
  constructor(footerText = "") {
    this.id = uuid();
    this.footerText = footerText;
  }

  clone() {
    return new Footer(this.footerText);
  }
}

module.exports = Footer;
