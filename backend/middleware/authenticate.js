const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authenticate(req, res, next) {
    const { authorization } = req.headers;
    const SECRET_KEY = process.env.JWT_SECRET;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required!" });
    }

    const token = authorization.split(" ")[1];

    try {
        const verify = jwt.verify(token, SECRET_KEY);
        req.user = await User.findById(verify._id).select("_id");
        next();
    }
    catch (error) {
        res.status(401).json({ error: "Request is not authorized!" });
    }
}

module.exports = { authenticate };
