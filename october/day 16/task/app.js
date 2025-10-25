const express = require("express");
const cors = require("cors");
const authenticate = require("./middlewares/auth.js");
const graphqlSchema = require("./graphql/schema");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");
const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticate);

const formatError = (err) => {
  if (!err.originalError) {
    return err;
  }

  const { data, code } = err.originalError;

  const message = err.message;

  return {
    data,
    code,
    message,
  };
};

app.all("/graphql", (req, res) => {
  return createHandler({
    schema: graphqlSchema,
    context: () => ({ req }),
    formatError,
  })(req, res);
});

app.get("/graphiql", (req, res) => {
  res.type("html").send(
    ruruHTML({
      endpoint: "/graphql",
    })
  );
});

module.exports = app;
