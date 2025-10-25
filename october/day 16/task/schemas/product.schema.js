const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(25)
    .required()
    .description("Name of the product"),
  price: Joi.number().positive().required().description("Price of the product"),
  categoryId: Joi.number()
    .integer()
    .positive()
    .required()
    .description("Category ID of the product"),
  createdBy: Joi.string()
    .hex()
    .length(24)
    .required()
    .description("User ID who created the product"),
});

module.exports = productSchema;
