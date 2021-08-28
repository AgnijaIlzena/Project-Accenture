const PostsRepository = require("../repositories/PostsRepository");
//const Posts = require("../models/Posts")


class PostsController {
//used for posts list and indivudual post page
    async main(req, res) {
        const { postId } = req.params;
        if (postId) {
            const post = await PostsRepository.getById(postId);
            if(!post) {
                res.render("pages/error");
            } else {
                res.render("pages/postForm", {post});
            }
        }else {
            const posts = await PostsRepository.getAll();
            res.render("pages/posts", {posts});
        }
    }
    //used for rendering create post form
    //------- jaapaarbauda taalaak
    renderForm(req, res){
        res.render("pages/addPost");
    }

    createPost(req, res) {
        console.log(req.body);

        Posts.createPost(req, body);
        res.render("pages/addPost");
    }
};

module.exports = PostsController;