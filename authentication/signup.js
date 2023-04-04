const mysql = require("mysql")
const conn = require("../db/connection")
const {signupmail, signupnmail} = require("../email/email")
const signup = async (req, res, next) => {
    let timestamp = Date.now();
    console.log(timestamp);
    const { email, name, password, mobile } = req.body;
    var values = [[email, password, name, mobile,timestamp]];
    var sql = "INSERT INTO `login`( `email`, `password`, `name`, `mobile`,`tocken`) VALUES (?)";
    conn.query(sql, values, function (err, result, fields) {
        if (err) {
            res.json({ "Status": "Error", "message": err });
            res.end();
        }
        else {
            res.json({ "Status": "Sucess", "message": "Account Registered Successfully Confirm Email Address from mail" });
            signupnmail(email,name,timestamp);
            res.end();
        }
        console.log(result.insertId);
        
    })
}
module.exports = { signup };