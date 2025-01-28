const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Use authentication routes
app.use("/api/auth", authRoutes);

app.get("/status", (req, res) => {
  res.json({ status: "OK", message: "Server is running smoothly" });
});

const PORT = process.env.PORT || 5001; // Default to 5000 if not set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
