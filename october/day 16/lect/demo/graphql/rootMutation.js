const {GraphQLObjectType} = require("graphql/type");
const bookMutations = require("./book/book.mutation");
const userMutations = require('./user/user.mutation');

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        ...bookMutations,
        ...userMutations
    }
})

module.exports = RootMutation;