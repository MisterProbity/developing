const Model = require("./model");
const bcrypt = require("bcryptjs")
const conn = require("../Model/connection");

class User extends Model{

    static async login (email, pass){
        let sql = `SELECT * FROM users WHERE users.email = ?`
        const [result] = await conn.execute(sql,[email])
        if(result.length>0){
            let user = new User(result[0]);
            const match = await bcrypt.compare(pass, user.password);
            if(match){
                return user
            }
            else{
                return false
            }
        }
        return false
    }
  
}
module.exports = User;