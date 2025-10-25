const Joi = require('joi');

const bookSchema = Joi.object({
    id: Joi.string().optional(),
    title: Joi.string().required().description("Title of the book"),
    author: Joi.string().required().description("Author of the book"),
    publishedYear: Joi.number().integer().required().min(0).max(2025).description("Year the book was published"),
    isbn: Joi.string().required()
})

module.exports = bookSchema;