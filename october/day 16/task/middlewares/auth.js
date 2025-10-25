const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const authHeader =
    req.headers.authorization ||
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGZjYjE0Yjg5Yzk0NGUxMWQxMGU4YTUiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3NjEzOTIzMzksImV4cCI6MTc2MTM5NTkzOX0._3V2gfP2O5JTsIBc5uEk4QW9k4HAeoU3bgBToQzdOqL";

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    req.user = null;
    return next();
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    req.user = null;
  }

  next();
};

module.exports = authenticate;
