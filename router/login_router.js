const express = require("express"); 
const router = express.Router();
const fs = require("fs");

const {login} = require("../authentication/login");
const {signup} = require("../authentication/signup");
const conn = require("../db/connection")
router.route("/").post(login);
router.route("/signup").post(signup);
router.route("/confirm").get(function(req,res){
    const {tocken:tocken} = req.query;
    var sql = "UPDATE `login` SET `confirm`=TRUE WHERE tocken=?";
    conn.query(sql,tocken,function (err,result,fields) {
        if (err) {
            res.send("<h1>Error in Confirmation</h1>")
            res.end(); 
        }
        else{
            res.send("<h1>Sucessfully Registered Email</h1><h3>Go to Login</h3>")
            res.end();
        }
    })});
module.exports = router;