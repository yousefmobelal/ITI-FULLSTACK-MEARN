const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int
    }

    type Book {
        title: String!
        author: String!
        publishYear: Int!
    }
    
    input BooksFilterInput {
        minYear: Int
        maxYear: Int
    }
    
    type RootQuery {
        hello: TestData
        getBooksWithFilters(filter: BooksFilterInput): [Book]
    }

    input CreateUserDto {
        email: String!
        password: String!
    }
    
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
    }
    input CreateBookDto {
        title: String!
        author: String!
        publishYear: Int!
    }
    
    type RootMutation {
        createUser(userInput: CreateUserDto): User!
        createBook(bookInput: CreateBookDto): Book!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

// SDL : Schema Definition Language : Framework-Independent
