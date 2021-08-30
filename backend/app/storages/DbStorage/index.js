const pool = require("./db");
const BaseStorage = require("../BaseStorage"); 

class DbStorage extends BaseStorage {
constructor(tableName) {
    //super(tableName);
    super(tableName);
    this._table = tableName;
    //this._table=tableName;
    //pool.promise().query(`CREATE TABLE IF NOT EXISTS ${this_table}`);
    //instead we use migrations

}  

async getAll(){
    const [rows] = await pool.promise().execute(`SELECT * FROM ${ this._table }`);
    return rows;
}

async getById(id){
    const[rows] = await pool
    .promise()
    .execute(`SELECT * FROM ${this._table} WHERE id = ?`, [id]);
    return rows[0];
}

async create(data){
    const [meta] = await pool
    .promise()
    .execute(
        `INSERT INTO ${this._table} (name, content, month, year) VALUES (?, ?, ?, ?)`,
        [data.name, data.content, data.month, data.year]
    );
    return Object.assign({}, data, {id: meta.insertId});
}

async update (data){
    const {id} =data;
    if(!id) throw new Error (`Missing "id" in data for DbStorage.update`);
    await pool
    .promise()
    .execute(
        `UPDATE ${this._table} SET name=?, content=?, month=?, year=? WHERE id = ?`,
        [data.name, data.content, data.month, data.year, id]
    );
    return data;
} 
   
async delete(id) {
    if (!id) throw new Error(`Missing "id" in data for DbStorage.delete`);
    await pool.promise().execute(`DELETE FROM ${this._table} WHERE id=?`, [id]);
    return;
}

}

module.exports = DbStorage;  