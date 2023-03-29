const express = require("express");
const app = express();

const controllerRouter = require("./router/rouer");
const authenticationRouter = require("./router/login_router");
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use("/api/v1/tasks",express.urlencoded({extended:true}),controllerRouter);
app.use("/login",express.urlencoded({extended:true}),authenticationRouter);

const port = process.env.PORT || 2000;
app.listen(port);
