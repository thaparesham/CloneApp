const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((error) => console.error("Error connecting to MongoDB:", error));
    console.log("MongoDB connected!!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process on error
  }
};

module.exports = connectDB;
