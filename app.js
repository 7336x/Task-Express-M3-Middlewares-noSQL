// Import the express library to create a web server
const express = require("express");
// Create an instance of the express application
const app = express();

// Import the posts routes to handle requests related to posts
const postsRoutes = require("./api/posts/posts.routes");
// Import the database connection function
const connectDB = require("./database");
// Import morgan for logging HTTP requests
const morgan = require("morgan");
// Import cors to enable Cross-Origin Resource Sharing
const cors = require("cors");
// Import path module to work with file and directory paths
const path = require("path");
// Import custom middleware to handle rejected paths
const rejectPath = require("./middelware/rejectPath");
// Import custom middleware for error handling
const errorHandelling = require("./middelware/errorHandelling");

// Connect to the MongoDB database
connectDB();

// Use express's built-in JSON parser middleware to handle JSON requests
app.use(express.json());

// Enable CORS to allow cross-origin requests
app.use(cors());

// Use morgan middleware to log HTTP requests in the "dev" format
app.use(morgan("dev"));

// Use posts routes for all requests to the "/posts" endpoint
app.use("/posts", postsRoutes);

// Serve static files from the "media" folder for the "/media" route
app.use("/media", express.static(path.join(__dirname, "media")));

// Use custom middleware to reject any paths that don't match existing routes
app.all("*/", rejectPath);

// Use custom error handling middleware to handle errors across the app
app.use(errorHandelling);

// Start the server on port 8000 and log a message once it's running
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
