const mysql = require('mysql2');

const connection = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database:"probity_libsys"
     host:"db4free.net",
     user:"waliuraheem",
     password: "probitymr",
     database: "probity_libsys",
     port: 3306

});
connection.connect();
console.log("database is connected!");
module.exports = connection.promise();