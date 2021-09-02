const pool = require("./db");
const BaseStorage = require("../BaseStorage");

class DbStorage extends BaseStorage {
  constructor(tableName) {
    super(tableName);
    this._table = tableName;
  }

  // get all blog posts
  async getAllPosts() {
    const [rows] = await pool.promise().execute(`SELECT * FROM ${this._table}`);
    return rows;
  }

  // create blog post
  async createPost(data) {
    const [meta] = await pool
      .promise()
      .execute(
        `INSERT INTO ${this._table} (name, content, month, year) VALUES (?, ?, ?, ?)`,
        [data.name, data.content, data.month, data.year]
      );
    return Object.assign({}, data, { id: meta.insertId });
  }

  // register user
  async createUser(data) {
    const [meta] = await pool
      .promise()
      .execute(
        `INSERT INTO ${this._table} (username, password) VALUES (?, ?)`,
        [data.username, data.password]
      );
    return Object.assign({}, data, { id: meta.insertId });
  }
}

module.exports = DbStorage;