const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    database: "spare_part",
    user: "root",
    password: "password"
})
connection.connect((err)=> {
    if(err) throw new Error(err)
    console.log("conected")
})
module.exports = connection