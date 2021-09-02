const User = require("../models/User");
const DbStorage = require("../storages/DbStorage");

class UserRepository {
  constructor() {
    this._storage = new DbStorage("user");
  }

  async createUser(data) {
    try {
     // console.log(data);
      const User = await this._storage.createUser(data);
      if (User != "") {
        return " Registration successful";
      }
    } catch (error) {
      console.error("Error with storage: ", error);
    }
  }
}

module.exports = new UserRepository();