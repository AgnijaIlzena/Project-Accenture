const Posts = require("../models/Posts")


class PostsController {

    main(req, res) {
        const { postId } = req.params;
        if (postId) {
            const post = Posts.getById(postId);
            if(!post) {
                res.render("pages/error");
            } else {
                res.render("pages/post", {post});
            }
        }else {
            const posts = Posts.getAll();
            res.render("pages/posts", {posts});
        }
    }
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