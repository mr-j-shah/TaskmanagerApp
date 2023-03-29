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
    var values = [[email,password,name,mobile]];
    console.log(email);
    var sql ="INSERT INTO `login`( `email`, `password`, `name`, `mobile`) VALUES (?)";
    conn.query(sql,values,function (err,result,fields) {
        if (err) throw err;
        console.log(result);
    })
    res.redirect("/login");
}
module.exports = {signup};