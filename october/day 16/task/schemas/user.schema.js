const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().min(3).max(30).required().description("Name of the user"),
  email: joi.string().email().required().description("Email of the user"),
  password: joi.string().min(6).required().description("Password of the user"),
});

module.exports = userSchema;
