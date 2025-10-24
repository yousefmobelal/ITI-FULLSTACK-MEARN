const createError = (message, code = 400, data = null) => {
  const error = new Error(message);
  error.code = code;
  if (data) error.data = data;
  return error;
};

module.exports = createError;
