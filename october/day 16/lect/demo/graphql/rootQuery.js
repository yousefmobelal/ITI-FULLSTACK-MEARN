const {GraphQLObjectType} = require("graphql/type");
const bookQueries = require("./book/book.query");

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...bookQueries
    }
})

module.exports = RootQuery;