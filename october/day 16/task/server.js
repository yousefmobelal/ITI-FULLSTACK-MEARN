const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app.js");

const PORT = process.env.PORT || 3000;

mongoose.set("debug", function (collectionName, method, query, doc) {
  console.log(
    `Mongoose: ${collectionName}.${method}(${JSON.stringify(
      query
    )}, ${JSON.stringify(doc)})`
  );
});

mongoose
  .connect(process.env.MONGO_url)
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
