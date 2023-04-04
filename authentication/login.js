const mysql = require("mysql")
const conn = require("../db/connection");

const {loginmail} = require("../email/email");
const login = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    var sql ="SELECT * FROM `login` WHERE email = "+ mysql.escape(email);
    await conn.query(sql,function (err,result,fields) {
        if (err) {
            res.json({"Status":"Error","Result":err});
            res.end();
        };
        var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        if (json.length==0) {
            res.json({"Status":"NoUser","Result":{}});
            res.end();
        }
        else{
            if (json[0].email==email&&json[0].password==password) {
                if (json[0].confirm===0) {
                    res.json({"Status":"RuntimeError","Result":{"message":"Confirm Email-Id from Mail"}});
                    res.end();
                }
                else{
                    res.json({"Status":"Success","Result":{"email":json[0].email,"name":json[0].name,"mobile":json[0].mobile,"id":json[0].id}});
                    // loginmail(json[0].email,json[0].name);
                    res.end();
                }
            }
            else{
                res.json({"Status":"Wrong Password","Result":{}});
                res.end();
            }
        }
    });
    
}
module.exports = {login};