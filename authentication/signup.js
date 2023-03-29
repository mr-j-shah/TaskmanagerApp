const mysql = require("mysql")
const conn = require("../db/connection")
const signup = async (req,res)=>{
    await conn.connect(
        function (err){
            if (err) {
                throw err;
            }
            console.log("Conncted");
        }
    );
    const {email,name,password,mobile} = req.body;
    console.log(email);
    var sql ="SELECT * FROM `login` WHERE email = "+ mysql.escape(email);
    conn.query(sql,function (err,result,fields) {
        if (err) throw err;
        console.log(result);
    })
    res.redirect("/login");
}
module.exports = {signup};