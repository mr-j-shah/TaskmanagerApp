const mysql = require("mysql")
const conn = require("../db/connection")
const login = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    var sql ="SELECT * FROM `login` WHERE email = "+ mysql.escape(email);
    await conn.query(sql,function (err,result,fields) {
        console.log(result);
        if (err) throw err;
        var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        if (json.length==0) {
            res.json({"Status":"NoUser"});
            res.end();
        }
        else{
            if (json[0].email==email&&json[0].password==password) {
                res.json({"Status":"Success"});
                res.end();
            }
            else{
                res.json({"Status":"Error"});
                res.end();
            }
        }
    });
    
}
module.exports = {login};