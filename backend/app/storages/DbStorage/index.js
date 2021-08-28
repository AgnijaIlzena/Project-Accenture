const pool = require("./db");

class DbStorage {
constructor(posts) {
    this._table = posts;
    //this._table=tableName;
    //pool.promise().query(`CREATE TABLE IF NOT EXISTS ${this_table}`);
    //instead we use migrations

}  

async getAll(){
    const [rows] = await pool.promise().query(`SELECT * FROM ${ this._table }`);
    return rows;
}
getById(){}
create(){}
update(){}
delete(){}

}

module.exports = DbStorage;  