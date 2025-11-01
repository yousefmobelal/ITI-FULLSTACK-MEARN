let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "about page" });
});

let server = app.listen(2000);
module.exports = server;
