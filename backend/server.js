const express = require("express");
const cors = require("cors");

const PostsController = require("./app/controllers/PostsController");
const UserController = require("./app/controllers/UserController");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

//ROUTING
//app.use("*", MainController);

// blog POST routs
app.post("/posts/create", PostsController.createPost);
app.get("/posts", PostsController.getAllPosts);

// blog USER roots
app.post("/user/create", UserController.createUser);

// server listen
const port = 3001;
app.listen(port, function () {
  console.log(`Server is running on: http://localhost:${port} .`);
});