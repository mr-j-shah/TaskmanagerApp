const mysql = require("mysql")
const conn = require("../db/connection")
const signup = async (req, res, next) => {
    try {
        const { email, name, password, mobile } = req.body;
        var values = [[email, password, name, mobile]];
        console.log(email);
        var sql = "INSERT INTO `login`( `email`, `password`, `name`, `mobile`) VALUES (?)";
        conn.query(sql, values, function (err, result, fields) {  
            if (err) {
                res.json({ "Status": "Error","message":err });
                res.end(); 
            }
            else{
                res.json({ "Status": "Sucess" });
                res.end();
            }
        })  
        // res.json({ "Status": "Success" });
        // res.end();
    } catch (error) {
        res.json({ "Status": "Error" });
        res.end();
    }
}
module.exports = { signup };