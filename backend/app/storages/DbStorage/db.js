const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "developpe",
  database: "blog",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
