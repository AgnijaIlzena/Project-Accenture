const PostsRepository = require("../repositories/PostsRepository");

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
  //   //used for rendering create post form

    renderForm(req, res){
     res.render("pages/postForm", {post: undefined});
    }

     //used for POST request from the form, and adding new student
    async create(req, res) {
       const post = await PostsRepository.create(req.body);
        // redirect to new entry
        res.redirect(`/posts/${post.id}`);
      }

   // used for POST request from the form, and updating student
  async update(req, res) {
    const { postId } = req.params;
    const post = await PostsRepository.update(postId, req.body);
    // return the same form
    res.render("pages/postForm", { post });
   }

  
   // used for DELETE request from the form
  async delete(req, res) {
  const { postId } = req.params;
  await PostsRepository.delete(postId);
     // return to posts list
    res.redirect("/posts");
   }
};

module.exports = new PostsController();