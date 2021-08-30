require("dotenv").config();

const express = require("express");
const path = require("path");

//const ejs = require("ejs");
const bodyParser = require("body-parser");


//const MainController = require("./app/controllers/MainController"); 
const PostsController = require("./app/controllers/PostsController");
//const { Server } = require("http");
//const PostsCtrl = new PostsController();

const app = express();

//set templating engine
app.set("view engine", "ejs");
// change default location of templating engine views
app.set("views", path.resolve(__dirname, "app/views"));

// exposed for users to fetch public
app.use(express.static(path.resolve(__dirname,"assets")));

// use to parse req.body for POST, PUT etc requests.
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.urlencoded({extended: false} ));


// ROUTING imported from controllers/MainController.js
//app.use("*", MainController); 

app.get("/", function(req,res) {
    res.render("pages/index", {content: "Would you like some wine ?"});
});
//posts
app.get("/posts/create", PostsController.renderForm);
app.post("/posts/create", PostsController.create);
app.get("/posts/:postId?", PostsController.main);
app.post("/posts/delete/:postId?", PostsController.delete);
app.post("/posts/:postId?", PostsController.update);
//fallback to error page
app.use("*", function(req, res) {
    res.render("pages/error");
});




// SERVER LISTEN
app.listen(3000, function () {
    console.log("server is running on port 3000");
});
