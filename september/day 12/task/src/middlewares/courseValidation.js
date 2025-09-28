import validate from "../utils/courseSchemaValidation.js";

const courseValidation = (req, res, next) => {
  const valid = validate(req.body);

  if (!valid) {
    req.isValid = false;
    req.validationErrors = validate.errors;
  } else {
    req.isValid = true;
  }
  next();
};

export default courseValidation;
