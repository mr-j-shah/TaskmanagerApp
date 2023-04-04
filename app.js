const express = require("express");
const app = express();

const controllerRouter = require("./router/rouer");
const authenticationRouter = require("./router/login_router");
const conn = require("./db/connection")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/tasks",express.urlencoded({extended:true}),controllerRouter);
app.use("/login",express.urlencoded({extended:true}),authenticationRouter);
app.get("/confirm",function(req,res){
    const {tocken:tocken} = req.query;
    var sql = "UPDATE `login` SET `confirm`=TRUE WHERE tocken=?";
    conn.query(sql,tocken,function (err,result,fields) {
        if (err) {
            res.json({ "Status": "Error","message":err});
            res.end(); 
        }
        else{
            res.json({"Status":"Success","Result":result});
            res.end();
        }
    });
});
const port = process.env.PORT || 2000; 
app.listen(port);
