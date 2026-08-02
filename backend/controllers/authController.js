const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const SECRET_KEY = process.env.JWT_SECRET;
    const token = jwt.sign({ _id }, SECRET_KEY, {
            expiresIn: '1h'
        });
    
    return token;
}

async function loginUser(req, res) {
    console.log("loginUser called: ", req.body);
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);

        res.status(200).json({username: user.username, token});
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
};

async function signupUser(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        const token = createToken(user._id);

        res.status(200).json({ username: user.username, token });
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = { loginUser, signupUser };