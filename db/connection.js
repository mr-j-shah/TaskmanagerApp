const mysql = require('mysql');
var con = mysql.createConnection({host:"localhost",user:"root",password:"",database:"test"});
module.exports = con;