import validate from "../utils/studentSchemaValidation.js";

const studentValidation = (req, res, next) => {
  const valid = validate(req.body);

  if (!valid) {
    req.isValid = false;
    req.validationErrors = validate.errors;
  } else {
    req.isValid = true;
  }
  next();
};
export default studentValidation;
