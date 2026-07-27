const jwt = require('jsonwebtoken');
const express = require("express");

const router = express.Router();

// @route   POST /api/login
router.post("/login", async (req, res, next) => {
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
});


  

module.exports = router;
