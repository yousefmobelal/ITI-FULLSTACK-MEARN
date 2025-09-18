import http from "http";
import fs from "fs";
const PORT = 7000;

let mainHtml = "";
fs.readFile("../client/pages/main.html", (err, data) => {
  err ? console.log(err) : (mainHtml = data.toString());
});
let welcomeHtml = "";
fs.readFile("../client/pages/welcome.html", (err, data) => {
  err ? console.log(err) : (welcomeHtml = data.toString());
});
let welcomeJs = "";
fs.readFile("../client/scripts/welcome.js", (err, data) => {
  err ? console.log(err) : (welcomeJs = data.toString());
});
let mainJs = "";
fs.readFile("../client/scripts/main.js", (err, data) => {
  err ? console.log(err) : (mainJs = data.toString());
});
let mainCSS = "";
fs.readFile("../client/styles/main.css", (err, data) => {
  err ? console.log(err) : (mainCSS = data.toString());
});
let welcomeCSS = "";
fs.readFile("../client/styles/welcome.css", (err, data) => {
  err ? console.log(err) : (welcomeCSS = data.toString());
});

http
  .createServer((req, res) => {
    const { url } = req;
    if (url.includes("favicon.ico")) {
      res.end();
      return;
    }

    switch (req.method) {
      case "GET":
        if (url === "/" || url === "/main.html") {
          res.setHeader("content-type", "text/html");
          res.write(mainHtml);
        } else if (url === "/welcome.html") {
          res.setHeader("content-type", "text/html");
          res.write(welcomeHtml);
        } else if (url === "/styles/main.css") {
          res.setHeader("content-type", "text/css");
          res.write(mainCSS);
        } else if (url === "/styles/welcome.css") {
          res.setHeader("content-type", "text/css");
          res.write(welcomeCSS);
        } else if (url === "/scripts/welcome.js") {
          res.setHeader("content-type", "text/javascript");
          res.write(welcomeJs);
        } else if (url === "/scripts/main.js") {
          res.setHeader("content-type", "text/javascript");
          res.write(mainJs);
        } else if (url === "/clients") {
          fs.readFile("clients.json", (err, data) => {
            if (err) {
              res.statusCode(500);
              res.end("Error reading clients");
              return;
            }
            res.setHeader("content-type", "application/json");
            res.end(data || "[]");
          });
          break;
        }
        res.end();
        break;
      case "POST":
        if (url === "/welcome.html") {
          showWelcomePage(req, res);
        }
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });

function showWelcomePage(req, res) {
  req.on("data", (data) => {
    console.log(data.toString());
    const params = new URLSearchParams(data.toString());
    const name = params.get("name");
    const phoneNumber = params.get("phoneNumber");
    const email = params.get("email");
    const address = params.get("address");
    const userData = {
      name,
      phoneNumber,
      email,
      address,
    };
    const users = fs.readFileSync("clients.json");
    const parsedUsers = JSON.parse(users.toString());

    fs.writeFile(
      "clients.json",
      JSON.stringify([...parsedUsers, userData]),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Client ${name} added successfully`);
        }
      }
    );

    welcomeHtml = welcomeHtml
      .replace("{name}", params.get("name"))
      .replace("{mobileNumber}", params.get("phoneNumber"))
      .replace("{email}", params.get("email"))
      .replace("{address}", params.get("address"));
  });
  req.on("error", (err) => {
    console.log(err);
  });
  req.on("end", () => {
    res.setHeader("content-type", "text/html");
    res.write(welcomeHtml);
    res.end();
  });
}
