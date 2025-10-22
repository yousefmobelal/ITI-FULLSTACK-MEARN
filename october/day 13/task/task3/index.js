const Document = require("./Document.js");

const original = new Document({
  header: "Project Report",
  footer: "Confidential 2025",
  body: "This is the main report body.",
  pages: ["Intro", "Analysis", "Conclusion"],
});

const copy = original.clone();
copy.header = "This is project report";
copy.addPage("Appendix");

console.log("Original Document:", original.summary());
console.log("Cloned Document:", copy.summary());
