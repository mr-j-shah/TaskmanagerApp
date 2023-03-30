const conn = require("../db/connection")

const getAllTask=(req,res)=>{
    const { id: userID } = req.params;
    var sql = "SELECT * FROM tasktable WHERE userid = ?";
    conn.query(sql,userID,function (err,result,fields) {
        if (err) {
            res.json({ "Status": "Error","message":err });
            res.end(); 
        }
        else{
            var string=JSON.stringify(result);
            var json =  JSON.parse(string); 
            if (json.length==0) {
                res.json({"Status":"NoDataFound","Result":{}});
                res.end();
            } 
            else{
                res.json({"Status":"Success","Result":json});
                res.end();
            }
        }
    });
}

const updateTask=(req,res)=>{    
    const { id: taskID } = req.params
    var sql = "UPDATE `tasktable` SET `done`=TRUE WHERE id = ?";
    conn.query(sql,taskID,function(err,result,fields){
        if (err) {
            res.json({ "Status": "Error","message":err });
            res.end(); 
        }
        else{
            res.json({ "Status": "Success","message":result });
            res.end(); 
        }
    });
    
}

const deleteTask=(req,res)=>{
    const { id: taskID } = req.params;
    var sql = "DELETE FROM `tasktable` WHERE id=?";
    conn.query(sql,taskID,function (err,result,fields) {
        
        if (err) {
            res.json({ "Status": "Error","message":err });
            res.end(); 
        }
        else{
            res.json({"Status":"Success","Result":result});
            res.end();
        }
    });
}

const getTask=(req,res)=>{
    const { id: taskID } = req.params;
    var sql = "SELECT * FROM `tasktable` WHERE id=?";
    conn.query(sql,taskID,function (err,result,fields) {
        if (err) {
            res.json({ "Status": "Error","message":err });
            res.end(); 
        }
        else{
            var string=JSON.stringify(result);
            var json =  JSON.parse(string); 
            if (json.length==0) {
                res.json({"Status":"NoDataFound","Result":{}});
                res.end();
            } 
            else{
                res.json({"Status":"Success","Result":json});
                res.end();
            }
        }
    });
}

const creatTask=async (req,res)=>{
    const {userid,taskname,taskdetails,datetime} = req.body;
    var done = false;
    var values = [[userid,taskname,taskdetails,done,datetime]];
    var sql = "INSERT INTO tasktable(userid, name, details, done, time) VALUES (?)";
    conn.query(sql,values,function (err, result, fields) {  
        if (err) {
            res.json({ "Status": "Error","message":err });
            res.end(); 
        }
        else{
            res.json({ "Status": "Sucess","message":result });
            res.end();
        }
    });
}
module.exports = {creatTask,getAllTask,getTask,deleteTask,updateTask}