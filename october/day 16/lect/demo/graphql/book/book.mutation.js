const {GraphQLNonNull, GraphQLID, GraphQLString} = require("graphql/type");
const bookSchema = require("../../schemas/book.schema");
const {BookType, CreateBookDto} = require("./book.type");
const Book = require('../../model/book')
const bookMutations = {
    createBook: {
        type: BookType,
        args: {
            bookInput: { type: new GraphQLNonNull(CreateBookDto) }
        },
        async resolve(_, {bookInput}) {
            const {error, value} = bookSchema.validate(bookInput)

            if(error) {
                // throw new Error(error);
                const customError = new Error("Error validating the book schema");
                customError.data = error;
                customError.code = 400; // Status Code 400 : Bad Request
                throw customError;
            }

            const newBook = new Book(bookInput)

            return await newBook.save()
        }
    },
    updateBook: {
        type: BookType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)},
            bookInput: {type: new GraphQLNonNull(CreateBookDto)}
        },
        resolve: async (_, {id, bookInput}) => {
            const updatedBook = Book.findByIdAndUpdate(id, bookInput, { new: true })
            if(!updatedBook)
                throw new Error("Book not found")
            return updatedBook;
        }
    },
    deleteBook: {
        type: GraphQLString,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)}
        },
        resolve: async (_, { id }) => {
            const deletedBook = await Book.findByIdAndDelete(id);
            if(!deletedBook)
                throw new Error("Book not found")
            return 'Book deleted successfully';
        }
    }
}

module.exports = bookMutations;