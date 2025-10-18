const bookSchema = require('../schemas/book.schema')

module.exports = {
    hello() {
        return {
            text: "Hello",
            views: 1234
        }
    },
    // createUser(args, request) {
    //     const userInput = args.userInput;
    // }
    createUser({userInput}, request) {
        return {
            _id: "12345",
            name: "Mazen",
            email: userInput.email,
            password: userInput.password,
        }
    },
    getBooksWithFilters: async ({ filter }) => {
        let books = [
            { title: "A", author: "AA", publishYear: 2010 },
            { title: "B", author: "BB", publishYear: 2015 },
            { title: "C", author: "CC", publishYear: 2020 },
        ]

        let filteredBooks = books
            .filter(b => b.publishYear > filter.minYear && b.publishYear < filter.maxYear)

        return filteredBooks;
    },
    createBook: async({bookInput}) => {
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

