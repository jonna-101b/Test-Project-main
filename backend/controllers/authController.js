const User = require("../models/User");

async function loginUser(req, res, next) {
    const { email, password } = req.body;
    const user = await findUser(email);
    const SECRET_KEY = process.env.JWT_SECRET;
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
            expiresIn: '1h'
        });
    
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid' });
    }
};

async function signupUser(req, res, next) {
    res.json({})
}

module.exports = { loginUser, signupUser };