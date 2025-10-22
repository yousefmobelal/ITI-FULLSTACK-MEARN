class Document {
  constructor({ header = "", footer = "", body = "", pages = [] } = {}) {
    this.header = header;
    this.footer = footer;
    this.body = body;
    this.pages = pages;
  }

  clone() {
    const cloned = new Document({
      header: this.header,
      footer: this.footer,
      body: this.body,
      pages: [...this.pages],
    });
    return cloned;
  }

  addPage(content) {
    this.pages.push(content);
  }

  summary() {
    return {
      header: this.header,
      footer: this.footer,
      body: this.body,
      pages: this.pages,
    };
  }
}

module.exports = Document;
