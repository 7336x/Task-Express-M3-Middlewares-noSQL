const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDB = require("./database");
const morgan = require("morgan");
const { rejectPath, errorHandelling } = require("./middelwares");
var cors = require("cors");

connectDB();
app.use(express.json());
app.use(morgan("dev"));
app.use("/posts", postsRoutes);
app.use(cors());

app.all("*/", rejectPath);

app.use(errorHandelling);
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
