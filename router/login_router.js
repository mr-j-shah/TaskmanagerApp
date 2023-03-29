const express = require("express"); 
const router = express.Router();
const fs = require("fs");
const homepage = fs.readFileSync("./html/home.html");
const signuppage = fs.readFileSync("./html/signup.html")
const {login} = require("../authentication/login");
const {signup} = require("../authentication/signup");

router.route("/").post(login).get((req,res)=>{
    console.log("Home Page");
    res.end(homepage);
});
router.route("/signup").post(signup).get((req,res)=>{
    console.log("Sign Up Page");
    res.end(signuppage);
});

module.exports = router;