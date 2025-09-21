const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/main.html"));
});

app.get("/styles/main.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/styles/main.css"));
});

app.get("/styles/welcome.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/styles/welcome.css"));
});
app.get("/scripts/welcome.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/scripts/welcome.js"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/icons/favicon.ico"));
});

app.get("/clients", (req, res) => {
  fs.readFile("clients.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading clients");
    } else {
      res.json(JSON.parse(data || "[]"));
    }
  });
});

app.param("phoneNumber", (req, res, next, phoneNumber) => {
  req.phoneNumber = phoneNumber;
  next();
});

app.delete("/clients/:phoneNumber", (req, res) => {
  fs.readFile("clients.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading clients");
    } else {
      const phoneNumber = req.phoneNumber;
      console.log(`phoneNumber: ${phoneNumber}`);
      let clients = JSON.parse(data);
      clients = clients.filter((client) => client.phoneNumber != phoneNumber);
      fs.writeFileSync("clients.json", JSON.stringify(clients));
      res.json(clients);
    }
  });
});

app.put("/clients", (req, res) => {
  fs.readFile("clients.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading clients");
    } else {
      const { name, phoneNumber, email, address } = req.body;

      let clients = JSON.parse(data);
      clients = clients.map((client) =>
        client.phoneNumber == phoneNumber
          ? {
              name: name,
              phoneNumber: phoneNumber,
              email: email,
              address: address,
            }
          : client
      );
      fs.writeFileSync("clients.json", JSON.stringify(clients));
      res.json(clients);
    }
  });
});

app.post("/welcome.html", (req, res) => {
  const { name, phoneNumber, email, address } = req.body;
  const userData = { name, phoneNumber, email, address };

  const users = JSON.parse(fs.readFileSync("clients.json").toString());

  const exists = users.some((user) => user.phoneNumber === phoneNumber);

  if (!exists) {
    users.push(userData);
    fs.writeFileSync("clients.json", JSON.stringify(users));
    console.log(`Client ${name} added successfully`);
  } else {
    res
      .status(400)
      .send("<h1>Client with this phone number already exists</h1>");
  }

  let welcomeHtml = fs.readFileSync("../client/pages/welcome.html").toString();
  welcomeHtml = welcomeHtml
    .replace("{name}", name)
    .replace("{mobileNumber}", phoneNumber)
    .replace("{email}", email)
    .replace("{address}", address);

  res.type("html").send(welcomeHtml);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
