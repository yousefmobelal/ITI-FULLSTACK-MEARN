const Header = require("./Header.js");
const Footer = require("./Footer.js");
const Page = require("./Page.js");
const Text = require("./Text.js");
const uuid = require("./uuid.js");

class Document {
  constructor({ header = null, footer = null, text = null, pages = [] } = {}) {
    this.id = uuid();
    this.header = header || new Header();
    this.footer = footer || new Footer();
    this.text = text || new Text();
    this.pages = pages;
  }

  clone() {
    const headerClone = this.header ? this.header.clone() : null;
    const footerClone = this.footer ? this.footer.clone() : null;
    const textClone = this.text ? this.text.clone() : null;

    const pagesClone = this.pages.map((p) => p.clone());

    const cloned = new Document({
      header: headerClone,
      footer: footerClone,
      text: textClone,
      pages: pagesClone,
    });

    return cloned;
  }

  addPage(text = "") {
    const pageNumber = this.pages.length + 1;
    const p = new Page(pageNumber, text);
    this.pages.push(p);
    return p;
  }

  summary() {
    return {
      id: this.id,
      headerId: this.header?.id,
      headerTitle: this.header?.title,
      footerId: this.footer?.id,
      footerTitle: this.footer?.footerText,
      textId: this.text?.id,
      textTitle: this.text?.title,
      pagesCount: this.pages.length,
      pagesIds: this.pages.map((p) => p.id),
    };
  }
}

module.exports = Document;
