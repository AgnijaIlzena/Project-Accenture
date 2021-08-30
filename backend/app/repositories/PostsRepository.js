const Post = require("../models/Post");
//const FileStorage = require("../storages/FileStorage");
const DbStorage = require("../storages/DbStorage")

// knowledge of how and where to store data
class PostsRepository {
    constructor() {
       // this._storage = new FileStorage("posts");
        this._storage= new DbStorage("posts");
    }

    async getAll(){
        try {
            const list = await this._storage.getAll();
            return list.map((storeData)=> {
                const postModel = new Post (storeData);
                return postModel.getData();
            });
        } catch(error) {
            console.error("Error with storage: ", error);
        }
    }

async getById(id){
    try {
        const storeData= await this._storage.getById(id);
        const postModel = new Post(storeData);
        return postModel.getData();
         }catch (error) {
             console.error("Error with storage:", error);
         }
}
// data == req.body
async create(data) {
try {
// model used to validate and parse data
console.log(data);
const postModel = new Post(data);
const dataToStore =  postModel.getDataForStorage();
//save to storage and get back stored data (with id), update model's id
const {id} = await this._storage.create(dataToStore);
postModel.setId(id);
return postModel.getData();
} catch (error) {
    console.error("Error with storage: ", error);
}  
}

async update(id, data) {
    try {
      const postModel = new Post(
        Object.assign({}, data, { id }));
         const dataToStore =  postModel.getDataForStorage();
      await this._storage.update(dataToStore);
      return postModel.getData();
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

  async delete(id) {
    try {
      return await this._storage.delete(id);
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }

}

module.exports = new PostsRepository();