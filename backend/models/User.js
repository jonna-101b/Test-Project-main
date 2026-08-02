const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


// Signup static method

UserSchema.static("signup", async function(username, email, password) {
    // Check if username, email, and password are provided
    if (!username || !email || !password) {
      throw new Error("Please fill all the required fields!");
    }

    // Validate email and password
    if (!validator.isEmail(email)) {
      throw new Error("Please submit a valid email!");
    }

    // Check if username already exists
    const usernameExists = await this.findOne({ username });

    if (usernameExists) {
      throw new Error("Username already in use!");
    }

    // Check if email already exists
    const emailExists = await this.findOne({ email });

    if (emailExists) {
      throw new Error("Email already in use!");
    }

    // Validate password strength

    if (!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough!");
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    const user = await this.create({ username, email, password: hash});

    return user;
  }
);


// Login static method

UserSchema.static("login", async function(username, password) {
    // Check if username and password are provided
    if (!username || !password) {
      throw new Error("Please fill all the required fields!");
    }

    // Check if user exists
    const user = await this.findOne({ username });

    if (!user) {
      throw new Error("No user with such username!")
    }

    // Compare the provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Incorrect password!");
    }

    return user;
  }
);

module.exports = mongoose.model("User", UserSchema);
