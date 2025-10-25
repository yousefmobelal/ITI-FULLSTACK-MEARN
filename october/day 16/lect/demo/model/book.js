const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    publishedYear: {
        type: Number,
        required: [true, 'Published Year is required'],
        min: [1900, 'Year must be greater than or equal to 1900'],
        max: [new Date().getFullYear(), `Year must be greater than or equal to ${new Date().getFullYear()}`],
    },
    isbn: {
        type: String,
        required: [true, 'Isbn is required'],
        validate: {
            validator: function(v) {
                return /\d{3}-\d{10}/.test(v)   //! 123-1234567890
            },
            message: props => `${props.value} is not a valid ISBN`
        }
    }
})


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;