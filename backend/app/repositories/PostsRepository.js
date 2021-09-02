const Post = require("../models/Post");
const DbStorage = require("../storages/DbStorage");

class PostsRepository {
  constructor() {
    this._storage = new DbStorage("posts");
  }

  async getAllPosts() {
    try {
      const list = await this._storage.getAllPosts();
     // console.log(list);
      return list.map((storeData) => {
        const postModel = new Post(storeData);
        return postModel.getData();
      });
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async createPost(data) {
    try {
      const postModel = new Post(data);
      const dataToStore = postModel.getDataForStorage();
      const { id } = await this._storage.createPost(dataToStore);
      return postModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }
}

module.exports = new PostsRepository();