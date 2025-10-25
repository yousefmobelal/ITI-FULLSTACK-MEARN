const {GraphQLSchema} = require("graphql/type");
const RootQuery = require("./rootQuery");
const RootMutation = require("./rootMutation");

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

module.exports = schema;