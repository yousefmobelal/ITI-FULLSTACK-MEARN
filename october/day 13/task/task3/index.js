const Document = require("./Document.js");
const Header = require("./Header.js");
const Footer = require("./Footer.js");
const Page = require("./Page.js");

const original = new Document({
  header: new Header("Page Header"),
  footer: new Footer("Page footer"),
  text: new Footer("Page Text"),
  pages: [new Page(1, "Page 1 text"), new Page(2, "Page 2 text")],
});

console.log("Original summary:", original.summary());

const clone = original.clone();
console.log("Clone summary (after clone):", clone.summary());

clone.header.title = "Cloned Title";
clone.footer.footerText = "Cloned footer";
clone.text.title = "Cloned Text";
clone.pages[0].text = "Modified in clone: Page 1 text";

clone.addPage("Cloned page 3 text");

console.log("\nAfter modifying the clone:");
console.log("Original summary:", original.summary());
console.log("Original page[0] text:", original.pages[0].text);

console.log("Clone summary:", clone.summary());
console.log("Clone page[0] text:", clone.pages[0].text);

console.log("\nIDs equal?");
console.log("header id equal:", original.header.id === clone.header.id);
console.log("footer id equal:", original.footer.id === clone.footer.id);
console.log("first page id equal:", original.pages[0].id === clone.pages[0].id);
