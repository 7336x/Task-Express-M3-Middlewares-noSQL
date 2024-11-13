const rejectPath = function (request, response, next) {
  response.status(404).json({ message: "Path not Found" });
  next();
};

const errorHandelling = function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { rejectPath, errorHandelling };
