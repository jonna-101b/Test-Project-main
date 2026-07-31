const jwt = require('jsonwebtoken');
const express = require("express");
const { loginUser, signupUser } = require("../controllers/authController");

const router = express.Router();

// @route   POST /api/login
router.post("/login", loginUser);

// @route POST /api/signup
router.post("/signup", signupUser);

module.exports = router;
