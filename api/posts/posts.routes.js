// Import the express module to create a router instance
const express = require("express");
// Import the upload middleware for handling file uploads (images)
const upload = require("../../middelware/multer");
// Initialize a new router instance
const router = express.Router();

// Import controller functions for handling post routes
const {
  postsGet,       // Controller for getting posts
  postsUpdate,    // Controller for updating a post
  postsDelete,    // Controller for deleting a post
  postsCreate,    // Controller for creating a new post
} = require("./posts.controllers");

// Define a GET route to retrieve all posts, handled by the postsGet controller
router.get("/", postsGet);

// Define a POST route to create a new post, with image upload handling
router.post("/", upload.single("image"), postsCreate);

// Define a DELETE route to delete a specific post by ID
router.delete("/:postId", postsDelete);

// Define a PUT route to update a specific post by ID
router.put("/:postId", postsUpdate);

// Export the router to be used in other parts of the application
module.exports = router;
