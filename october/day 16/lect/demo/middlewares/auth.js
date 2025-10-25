const jwt = require('jsonwebtoken')
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        req.user = null;
        return next();
    }
    // Authorization: Bearer hguihrgo.efouefhgefho
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
    } catch (err) {
        req.user = null;
    }

    next()
}

module.exports = authenticate;