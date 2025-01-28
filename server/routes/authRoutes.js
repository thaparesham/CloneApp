const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();

// Login Route (POST request)
router.post("/login", async (req, res) => {
  const { userId, password } = req.body;

  // Check if the user exists in the database
  const user = await User.findOne({ userId });
  if (!user) {
    console.log("Invalid credentials1");
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare the entered password with the hashed password stored in the database
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Invalid credentials2");
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate a JWT token (You can set expiration time if needed)
  const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Send the token in the response
  res.json({ token });
});

module.exports = router;
