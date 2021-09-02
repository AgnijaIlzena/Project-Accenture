const UserRepository = require("../repositories/UserRepository");

class UserController {
  // used to register new user
  async createUser(req, res) {
    //console.log(req.body);
    const post = await UserRepository.createUser(req.body);
    //console.log(post);
    res.status(201).json({ message: post });
  }
}

module.exports = new UserController();