// configuring connection with mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-comm'); 

// configuring connection with mysql
const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'pulkit',
    database : "test"
});
con.connect((err)=>{
    if (err) {
        console.log("error in connection");
    }
    else console.log("all ok");
})
module.exports = con;