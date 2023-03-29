const mysql = require("mysql")
const conn = require("../db/connection")

const login = async (req,res)=>{
    await conn.connect(
        function (err){
            if (err) {
                throw err;
            }
            console.log("Conncted");
        }
    );
    
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    var sql ="SELECT * FROM `login` WHERE email = "+ mysql.escape(email);
    conn.query(sql,function (err,result,fields) {
        console.log(result);
        if (err) throw err;
        var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        if (json.length==0) {
            res.redirect("/login/signup");
        }
        else{
            console.log(json[0].email==email);
            console.log(json[0].password==password);
            if (json[0].email==email&&json[0].password==password) {
                res.send("User Sucessful");
            }
            else{
                res.send("Password Wrong!!");
            }
        }
    })
}
module.exports = {login};