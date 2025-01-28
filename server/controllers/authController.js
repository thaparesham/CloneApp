const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Signup Route (POST request)
router.post("/signup", async (req, res) => {
  const { firstName, lastName, userId, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ userId });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      userId,
      password,
    });

    // Save user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
