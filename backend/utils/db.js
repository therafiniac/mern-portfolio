const mongoose = require("mongoose");

// mongoose connect
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connection successful");
  } catch (error) {
    console.error("database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
