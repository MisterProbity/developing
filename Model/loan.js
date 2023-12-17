const Model = require("./model");
const conn = require("./connection")

class Loan extends Model{

    static async Biochemistrypatron(){
        let result = []
        let sql = `SELECT us.first_Name, us.last_Name, bk.title, due_date, date_borrowed FROM loans ln LEFT JOIN books bk ON ln.book_id=bk.id LEFT JOIN users us ON ln.user_id = us.id WHERE programme = 'Biochemistry';`
        let [rows] = await conn.execute(sql)
        for(const row of rows){
            result.push(new this(row))
        }
        return result
    }
    
    static async patron(programme){
        let result = []
        let sql = `SELECT us.first_Name, us.last_Name, bk.title, ln.due_date, ln.date_borrowed FROM loans ln LEFT JOIN books bk ON ln.book_id=bk.id LEFT JOIN users us ON ln.user_id = us.id WHERE programme =?;`
        let [rows] = await conn.execute(sql,[programme])
        for(const row of rows){
            result.push(new this(row))
        }
        return result
    }
    
    static async fetchPatron(){
        let result = []
        let sql = `SELECT us.first_Name, us.email, us.last_Name, bk.title, due_date FROM loans ln LEFT JOIN books bk ON ln.book_id=bk.id LEFT JOIN users us ON ln.user_id = us.id ;`
        let [rows] = await conn.execute(sql)
        for(const row of rows){
            result.push(new this(row))
        }
        return result
    }


}
module.exports = Loan;