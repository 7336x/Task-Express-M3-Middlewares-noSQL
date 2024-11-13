const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const rejectPath = require("./middelware/rejectPath");
const errorHandelling = require("./middelware/errorHandelling");

connectDB();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/posts", postsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.all("*/", rejectPath);

app.use(errorHandelling);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
