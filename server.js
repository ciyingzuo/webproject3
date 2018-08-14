var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

const HEROKU = "https://ciyingzuo-webdev-hw4client.herokuapp.com";
const LOCAL = "http://localhost:4200";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", LOCAL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));

const mongoURL = 'mongodb://ciyingzuo:cyz1150528664@ds018248.mlab.com:18248/cs4550';
const LOCALURL = 'mongodb://localhost:27017/local';

const mongoose = require('mongoose');
mongoose.connect(LOCALURL).then(promise => {console.log("Connected with database")});

const userService = require('./services/user.service.server'); //(app);
userService(app);
require('./services/enrollment.service.server')(app);
require('./services/question.service.server')(app);
require('./services/quiz.service.server')(app);
require('./services/section.service.server')(app);
app.listen(process.env.PORT || 3000);