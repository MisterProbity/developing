const mysql = require("mysql2")
const conn = require("../Model/connection");
const bcrypt =require("bcryptjs")
const salt = 10;
const pluralize = require("pluralize")

class Model {
    constructor(obj={}){
    this.setObjProp(obj)
    }
    setObjProp(obj){
        for (const key in obj ){
            this[key] = obj[key];
        }
    }


    static get tableName() {
        return pluralize(
            this.name.replace(/.[A-Z]/,(v)=>v[0] + "_" + v[1])
        ).toLowerCase()
    }


   async save(){

try {
    if(this.password){
        this.password = await bcrypt.hash(this.password,salt)
    }
    let columns = Object.keys(this);
    let values = Object.values(this);
    let sql = `INSERT INTO ${this.constructor.tableName} (${columns.join(", ")})
    VALUES (${"?".repeat(columns.length).split("").join(", ")}) `; 
    let [result] = await conn.execute(sql, values);
    this.id = result.insertId;
     return result.affectedRows > 0;
    
} catch (error) {
    console.log(error);
}


   }
   static async fetch(filter = {}) {
    let result = [];
    let sql = `SELECT * FROM ${this.tableName} `;
    if(Object.keys(filter).length > 0) {
        let i = 0;
        for (const prop in filter) {
            if(i = 0) sql += `WHERE ${prop}= ?`;
            else sql += `AND ${prop} = ?`;
            i++;``
        }
    }
    let [rows] = await conn.execute(sql, Object.values(filter))
   for (let row of rows){
    result.push(new this(row));
   }

   return result;
}
 static async findId(id){
    let sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    let [results] = await conn.execute(sql,[id]) 

if (results.length>0) {
    let result = results[0]
    return new this(result);
}
return null
}
async update(){
    let sql= `UPDATE ${this.constructor.tableName} SET`
    let {id, ...prop} = this;
    let columns = Object.keys(prop)
    let values = Object.values(prop)
    let i = 0;
    for (const column in columns){
        sql+= `${column} =? ${i<columns.length- 1 ? "," : ""} `;
        i++;
    }
    sql += `WHERE id = ${this.id} `;
    // console.log(sql, values.columns);
    let [result] = await conn.execute(sql,values)
    return affecctedRows > 0; 
}

static async delete(id){
    let sql = `DELETE FROM ${this.tableName} WHERE id =?`;
    let [result] = await conn.execute(sql,id)
    return result.affectedRows>0;
}
toString(){
    return this.name || "No string representation of the object"
}

}
module.exports = Model;