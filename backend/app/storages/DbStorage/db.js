const mysql = require("mysql2");
//import necessary libraries

//-------------------------
//#4 version enclosed
    const pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "express-blog",
        waitForConnections: true,
        connectionLimit: 10,
    });

    

//use files contents and map through them all. But this wont work because .map and .forEach doent handle async functions properly.
// migrationFiles.map(async (fileName)=>{
//     const data = fs.readFileSync(`${migrationsPath}/${fileName}`).toString();
//     await pool.promise().query(data); // but this is asynchronus call
   //});

   module.exports = pool; 