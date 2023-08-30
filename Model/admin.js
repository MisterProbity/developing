const Model = require("./model");
const conn = require("./connection")
const bcrypt = require('bcryptjs')

class Admin extends Model{
    static async login (email, pass){
        let sql = `SELECT * FROM admins WHERE admins.email = ?`
        const [result] = await conn.execute(sql,[email])
        if(result.length>0){
            let admin = new Admin(result[0]);
            const match = await bcrypt.compare(pass, admin.password);
            if(match){
                return admin
            }
            else{
                return false
            }
        }
        return false
    }
}
module.exports = Admin;