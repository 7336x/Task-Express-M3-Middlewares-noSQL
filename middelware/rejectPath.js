const rejectPath = function (request, response, next) {
  response.status(404).json({ message: "Path not Found" });
  next();
};

module.exports = rejectPath;
