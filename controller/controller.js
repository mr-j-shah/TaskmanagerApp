const conn = require("../db/connection")

const getAllTask=(req,res)=>{
    
    res.send("getAllTaask");
}

const updateTask=(req,res)=>{
    
    const { id: taskID } = req.params
    res.send(taskID+" Update Task");
}

const deleteTask=(req,res)=>{
    
    const { id: taskID } = req.params
    res.send(taskID+" Delete Task");
}

const getTask=(req,res)=>{
    
    const { id: taskID } = req.params
    res.send(taskID+" Get Task");
}

const creatTask=async (req,res)=>{
    
    const {email} = req.body;
    console.log(email);
    res.json(req.body)
}
module.exports = {creatTask,getAllTask,getTask,deleteTask,updateTask}