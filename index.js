

var express = require("express");
var cors = require("cors");
var bodyParser= require("body-parser");
var passport = require("passport");
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');

var app= express();

//busboy api
app.use(busboy());
app.use(busboyBodyParser());

//database connection
require("./database/connection");
var port= process.env.PORT || 3001;

//passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);
//router middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
//import Routes
var userRouter = require("./routes/Users");
var productRouter = require("./routes/Products");
var fileRouter = require("./routes/File");

//Define routes here
app.use("/api",userRouter);
app.use("/api",productRouter);
app.use("/api", fileRouter);


// app.use("/users",Users);
app.listen(port,function(){
    console.log("server is running on port " + port);
})