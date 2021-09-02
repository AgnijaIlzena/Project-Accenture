const PostsRepository = require("../repositories/PostsRepository");

class PostsController {
  // used to get all blog posts
  async getAllPosts(req, res) {
   // console.log(req.body);
    const posts = await PostsRepository.getAllPosts();
    res.status(201).json({ message: "Successfully delivered." });
  }

  // used to add new blog post
  async createPost(req, res) {
    //console.log(req.body);
    const post = await PostsRepository.createPost(req.body);
    res.status(201).json({ message: "Successfully created a post." });
  }
}

module.exports = new PostsController();