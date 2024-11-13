// Define a middleware function named rejectPath
const rejectPath = function (request, response, next) {
  // Set the HTTP response status to 404 (Not Found) and send a JSON response with an error message
  response.status(404).json({ message: "Path not Found" });
  // Call the next middleware in the stack, though in this case, it won't have any effect as a response has already been sent
  next();
};

// Export the rejectPath function so it can be used in other files
module.exports = rejectPath;
