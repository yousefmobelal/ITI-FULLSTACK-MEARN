import http from "http";
import fs from "fs";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/favicon.ico") return;

  const urlParts = req.url.split("/").slice(1);

  console.log(urlParts);

  const operations = ["add", "sub", "multip", "div"];
  let currentOperation = "";
  let result = null;

  for (const part of urlParts) {
    if (operations.includes(part)) {
      currentOperation = part;
      continue;
    }
    if (isNaN(part)) continue;

    if (result === null) {
      result = +part;
      continue;
    }

    switch (currentOperation) {
      case "add":
        result += +part;
        break;
      case "sub":
        result -= part;
        break;
      case "multip":
        result *= part;
        break;
      case "div":
        result /= part;
        break;
    }
  }

  const response = {
    message: `result = ${result}`,
  };

  const responseJson = JSON.stringify(response);

  fs.writeFile("res.json", responseJson, (err) => {
    if (!err) {
      console.log("File written successfully!");
    } else {
      console.log(`Error writing in file: ${err}`);
    }
  });

  res.end(responseJson);
});

server.listen(3000, () => console.log("Server is running"));
