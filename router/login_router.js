const express = require("express"); 
const router = express.Router();
const fs = require("fs");

const {login} = require("../authentication/login");
const {signup} = require("../authentication/signup");

router.route("/").post(login);
router.route("/signup").post(signup);

module.exports = router;