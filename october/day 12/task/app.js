const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();


const formatError = (error)=>{

}

app.use("/graphql", graphqlHTTP({
  schema: ,
  rootValue: ,
  graphiql: true,
formatError
}));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/graphql");
});
