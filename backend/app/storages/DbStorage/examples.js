const mysql = require("mysql2");

// create a connection
//------------------------------
// #1

// const connection = mysql.createConnection( {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "express-blog",
// });

// module.exports = connection;

// connection.query("SQL HERE");

//------------------------------

// #2 With  POOL

const connection = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "",
    database: "express-blog", 
});

const pool = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "",
    database: "express-blog",
    waitForConnections: true,
    connectionLimit: 10,
});

pool.getConnection((err, connection) =>{
if (err) throw err;
connection.query("SQL HERE");
})

//------------------------------
// #3 with mySql2 Promisse (and used simple connection)

(async ()=> {
// using mysql2 Promise
const mysql = require("mysql2/promise");
const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express-blog",
});
const[rows] = await connection.query("SELECT * FROM posts");
})  

//------------------------------
// #3 with mySql2 Promisse (and used pools). This is the recommended version for usage.

(async() =>{
    const mysql = require("mysql2");
    const pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "express-blog",
        waitForConnections: true,
        connectionLimit: 10,
    });
    //then we call promise method which give us possibility to working with these promisesand thus allowing to use opportunity to working with operators like async and await.
    const [rows] = await pool.promise().query("SELECT * FROM posts");
}); 