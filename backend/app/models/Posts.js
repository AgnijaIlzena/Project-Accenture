const posts = require("../../data");  

class Posts {
    constructor(data) {
        this._data = data;
    }

    getAll(){
        return this._data;
    }

    getById(id) {
        return this._data.find(entry => Number (entry.id) === Number (id));
    }

    createPost(data) {
        //here should be validation for fields
        //business logic here, if we'd like to have some combined fields, parced etc. Here before saving entry for Products
        //this method will add data to model
        //this._data.push(data);
        //now all works, but we are missing Id, so for testing reasons let's add it to hardcoded data. This methods gives new number 
        const id = new Date().getTime();
        this._data.push(Object.assign( {} , data, {id}));
    }
}

module.exports = new Posts(posts);