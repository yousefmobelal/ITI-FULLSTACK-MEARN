const {GraphQLList, GraphQLID} = require("graphql/type");
const {BookType, BooksFilterInput} = require("./book.type");
const Book = require('../../model/book');

const bookQueries = {
    getBooksWithFilters: {
        type: new GraphQLList(BookType),
        args: {
            filter: {type: BooksFilterInput}
        },
        resolve(_, args) {
            const {filter} = args;

            let books = [
                { title: "A", author: "AA", publishYear: 2010 },
                { title: "B", author: "BB", publishYear: 2015 },
                { title: "C", author: "CC", publishYear: 2020 },
            ]

            let filteredBooks = books
                .filter(
                    book => book.publishYear > filter.minYear &&
                        book.publishYear < filter.maxYear

                )

            return filteredBooks;
        }
    },
    books: {
        type: new GraphQLList(BookType),
        resolve: async() => {
            return await Book.find();
        }
    },
    book: {
        type: BookType,
        args: {
            id: {type: GraphQLID}
        },
        resolve: async(_, { id }, context) => {
            if(context.req && !context.req.user) {
                throw new Error("UnAuthorized")
            }
            return await Book.findById(id);
        }
    }
}

module.exports = bookQueries;