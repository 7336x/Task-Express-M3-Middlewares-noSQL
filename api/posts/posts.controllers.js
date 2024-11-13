// Import the Post model to interact with the database
const Post = require("../../models/Post");

// Controller to create a new post
exports.postsCreate = async (req, res, next) => {
  try {
    // If there's an uploaded file, set the image path in the request body
    if (req.file)
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    // Create a new post with the data from the request body
    const newPost = await Post.create(req.body);
    // Respond with status 201 (Created) and the newly created post data
    res.status(201).json(newPost);
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Controller to delete a post by its ID
exports.postsDelete = async (req, res, next) => {
  const { postId } = req.params; // Extract postId from request parameters
  try {
    // Find the post by its ID
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      // If post exists, delete it
      await foundPost.deleteOne();
      // Respond with status 204 (No Content) to indicate successful deletion
      res.status(204).end();
    } else {
      // If post not found, respond with a 404 error and message
      res.status(404).json({ message: "post not found" });
    }
  } catch (err) {
    // If an error occurs, create a new 404 error and pass it to error handling middleware
    const error = new Error("Post not found");
    error.status = 404;
    next(error);
  }
};

// Controller to update a post by its ID
exports.postsUpdate = async (req, res, next) => {
  const { postId } = req.params; // Extract postId from request parameters
  try {
    // Find the post by its ID
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      // If post exists, update it with data from request body
      await foundPost.updateOne(req.body);
      // Respond with status 204 (No Content) to indicate successful update
      res.status(204).end();
    } else {
      // If post not found, respond with a 404 error and message
      res.status(404).json({ message: "post not found" });
    }
  } catch (err) {
    // If an error occurs, create a new 404 error and pass it to error handling middleware
    const error = new Error("Post not found");
    error.status = 404;
    next(error);
  }
};

// Controller to get all posts
exports.postsGet = async (req, res, next) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();
    // Respond with the list of posts in JSON format
    res.json(posts);
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};
