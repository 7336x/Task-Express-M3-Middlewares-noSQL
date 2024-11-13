// Define an error-handling middleware function
const errorHandelling = function (err, req, res, next) {
  // Set the response status to the error's status code or default to 500 if not provided
  res.status(err.status || 500);
  // Send a JSON response containing the error message or a default "Internal Server Error" message
  res.json({
    message: err.message || "Internal Server Error",
  });
};

// Export the error-handling middleware to be used in other files
module.exports = errorHandelling;
