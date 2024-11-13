// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  // Use mongoose to connect to the MongoDB database using a connection string (replace with your own for security in production)
  const conn = await mongoose.connect(
    "mongodb+srv://mesharialhouli12:94055598@cluster0.ktsye.mongodb.net/"
  );

  // Log a message to the console confirming a successful connection, displaying the host of the database
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
