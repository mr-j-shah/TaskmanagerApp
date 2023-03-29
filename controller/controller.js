const conn = require("../db/connection")

const getAllTask=(req,res)=>{
    conn.connect((err)=>{
        if (err) {
            throw err;
        }
        console.log("Connected");
    });
    res.send("getAllTaask");
}

const updateTask=(req,res)=>{
    conn.connect((err)=>{
        if (err) {
            throw err;
        }
        console.log("Connected");
    });
    const { id: taskID } = req.params
    res.send(taskID+" Update Task");
}

const deleteTask=(req,res)=>{
    conn.connect((err)=>{
        if (err) {
            throw err;
        }
        console.log("Connected");
    }).catch(console.error);
    const { id: taskID } = req.params
    res.send(taskID+" Delete Task");
}

const getTask=(req,res)=>{
    conn.connect((err)=>{
        if (err) {
            throw err;
        }
        console.log("Connected");
    });
    const { id: taskID } = req.params
    res.send(taskID+" Get Task");
}

const creatTask=async (req,res)=>{
    await conn.connect(
        function (err){
            if (err) {
                throw err;
            }
        console.log("Conncted");
    });
    const {email} = req.body;
    console.log(email);
    res.json(req.body)
}
module.exports = {creatTask,getAllTask,getTask,deleteTask,updateTask}