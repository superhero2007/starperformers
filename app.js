var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session=require('express-session');
var mongoose=require('mongoose');
var passport=require('passport');
var passportJWT=require('passport-jwt');
var bcrypt = require('bcryptjs');
var multer=require('multer');
var jwt=require('jsonwebtoken');
var config=require('./config/passport.js');
config(passport);

//connect to Db
var dbConfig = require('./config/config.js');
mongoose.connect(dbConfig.database,()=>{
	console.log("database connected")
});

var app = express();

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "cats" ,resave:true,saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/storage',express.static(path.join(__dirname, 'storage')));

//routes
var routes=require('./routes/routes.js');
routes(app);

module.exports = app;
app.listen(3000,function(){
	console.log("server starts running");
})
