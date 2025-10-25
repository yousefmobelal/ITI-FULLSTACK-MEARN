const { GraphQLSchema } = require("graphql");
const RootQuery = require("./root.query");
const RootMutation = require("./root.mutation");

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = schema;
