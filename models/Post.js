// Import the model and Schema classes from mongoose to define and create models
const { model, Schema } = require("mongoose");

// Define a new schema for the Post model with title, body, and image fields
const PostSchema = new Schema({
  title: String, // The title of the post, stored as a string
  body: String,  // The body/content of the post, stored as a string
  image: String, // The URL or path to the post's image, stored as a string
});

// Export the model, creating a "Post" collection in MongoDB based on the PostSchema
module.exports = model("Post", PostSchema);
