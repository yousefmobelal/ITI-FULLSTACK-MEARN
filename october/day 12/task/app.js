const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolver = require("./graphql/resolver");
const schema2 = require("./graphql/schema2");
const { ruruHTML } = require("ruru/server");
const { createHandler } = require("graphql-http/lib/use/express");

const app = express();

app.use(express.json());

const formatError = (err) => {
  if (!err.originalError) {
    return err;
  } else {
    const data = err.originalError.data;
    const code = err.originalError.code;
    const message = err.message;
    return {
      message,
      code,
      data,
    };
  }
};

app.use(
  "/graphql/schema",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
    formatError,
  })
);

app.all(
  "/graphql/schema2",
  createHandler({
    schema: schema2,
    formatError,
  })
);

app.get("/graphiql/schema2", (req, res) => {
  res.type("html").send(ruruHTML({ endpoint: "/graphql/schema2" }));
});

app.listen(3000, () => console.log(`Server running at http://localhost:3000/`));
