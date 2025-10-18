const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLID
} = require('graphql');
const bookSchema = require("../schemas/book.schema");

const TestData = new GraphQLObjectType({
    name: 'TestData',
    fields: () => ({
        text: {type: GraphQLString},
        views: {type: GraphQLInt}
    })
})
const Book = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        title: {type: GraphQLString},
        author: {type: GraphQLString},
        publishYear: {type: GraphQLInt},
    })
})

const CreateBookDto = new GraphQLInputObjectType({
    name: 'CreateBookDto',
    fields: () => ({
        title: {type: GraphQLString},
        author: {type: GraphQLString},
        publishYear: {type: GraphQLInt},
    })
})

const BooksFilterInput = new GraphQLInputObjectType({
    name: 'BooksFilterInput',
    fields: () => ({
        minYear: {type: GraphQLInt},
        maxYear: {type: GraphQLInt},
        title: {type: GraphQLString},
    })
})

const RootQuery =  new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        hello: {
            type: TestData,
            resolve() {
                return {
                    text: "Hello",
                    views: 1234
                }
            }
        },
        getBooksWithFilters: {
            type: new GraphQLList(Book),
            args: {
                filter: {type: BooksFilterInput}
            },
            async resolve(_, {filter}) {
                let books = [
                    { title: "A", author: "AA", publishYear: 2010 },
                    { title: "B", author: "BB", publishYear: 2015 },
                    { title: "C", author: "CC", publishYear: 2020 },
                ]

                let filteredBooks = books
                    .filter(b => b.publishYear > filter.minYear && b.publishYear < filter.maxYear)

                return filteredBooks;
            }
        }
    })
})

const User  =  new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {type: GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        name: {type: GraphQLString},
    })
})

const CreateUserDto = new GraphQLInputObjectType({
    name: 'CreateUserDto',
    fields: () => ({
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
})

const RootMutation =  new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
        createUser: {
            type: User,
            args: {
                userInput: {type: new GraphQLNonNull(CreateUserDto)}
            },
            async resolve(_, args) {
                const {userInput} = args;
                return {
                    _id: "12345",
                    name: "Mazen",
                    email: userInput.email,
                    password: userInput.password,
                }
            }
        },
        createBook: {
            type: Book,
            args: {
                bookInput: {type: new GraphQLNonNull(CreateBookDto)}
            },
            async resolve(_, {bookInput}) {
                const {error, value} = bookSchema.validate(bookInput);
                if(error) {
                    // throw new Error(error);
                    const customError = new Error("Error validating the book schema")
                    customError.code = 400 // Status Code 400 Bad Request
                    customError.data = error
                    throw customError;
                }

                const {title, author, publishYear} = bookInput;

                return {title, author, publishYear};
            }
        }
    })
})

module.exports.schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

// const { buildSchema } = require('graphql');
//
// module.exports = buildSchema(`
//     type TestData {
//         text: String!
//         views: Int
//     }
//
//     type Book {
//         title: String!
//         author: String!
//         publishYear: Int!
//     }
//
//     input BooksFilterInput {
//         minYear: Int
//         maxYear: Int
//     }
//
//     type RootQuery {
//         hello: TestData
//         getBooksWithFilters(filter: BooksFilterInput): [Book]
//     }
//
//     input CreateUserDto {
//         email: String!
//         password: String!
//     }
//
//     type User {
//         _id: ID!
//         name: String!
//         email: String!
//         password: String!
//     }
//     input CreateBookDto {
//         title: String!
//         author: String!
//         publishYear: Int!
//     }
//
//     type RootMutation {
//         createUser(userInput: CreateUserDto!): User!
//         createBook(bookInput: CreateBookDto): Book!
//     }
//
//     schema {
//         query: RootQuery
//         mutation: RootMutation
//     }
// `);

// SDL : Schema Definition Language : Framework-Independent