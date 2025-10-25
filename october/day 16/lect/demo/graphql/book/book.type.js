const {GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLNonNull, GraphQLID} = require("graphql/type");
const {GraphQLString} = require("graphql/index");

const BooksFilterInput = new GraphQLInputObjectType({
    name: 'BooksFilterInput',
    fields: () => ({
        minYear: { type: GraphQLInt},
        maxYear: { type: GraphQLInt},
        title: { type: GraphQLString},
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: new GraphQLNonNull(GraphQLString)},
        author: {type: new GraphQLNonNull(GraphQLString)},
        publishedYear: {type: new GraphQLNonNull(GraphQLInt)},
        isbn: {type: GraphQLString },
    })
})

const CreateBookDto = new GraphQLInputObjectType({
    name: 'CreateBookDto',
    fields: () => ({
        title: {type: new GraphQLNonNull(GraphQLString)  },
        author: {type: new GraphQLNonNull(GraphQLString) },
        publishedYear: {type: new GraphQLNonNull(GraphQLInt) },
        isbn: {type: GraphQLString },
    })
})

module.exports = {
    BooksFilterInput,
    BookType,
    CreateBookDto
}