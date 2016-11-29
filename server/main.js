var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var session = require('express-session');
var fileStore = require('session-file-store')(session);

var mongoose = require('mongoose'),
	assert = require('assert');

var Users = require('./models/users');
var url = 'mongodb://localhost:27017/User';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
	console.log('Connected To Database');

    Users.create({
      name:"Mohsin",
      id:"Nexus",
      admin:true,
      password:"password",
      level:0
    },function(err,user){
      if (err) {
        throw err
      }
      console.log('User Added');
      console.log(user);
    });
})

var hostname = 'localhost';
var port = 3000;

var app = express();

var loginRouter = express.Router();
var cRouter = express.Router();

loginRouter.route('/')
.post(function(req,res){
  console.log(req.body);
  if (req.body.Username == "admin" && req.body.Password == "password") {
    req.session.user = "admin";
    res.end("loggedIn");
  }else {
    res.end("Error");
  }
});
cRouter.route('/')
.all(function(req,res,next){
  next();
})
.post(function(req,res){
  if (req.body.Answer == "johncena") {
      res.end("Correct");
  }
  res.end("Wrong Answer");
});

app.use(session({
	name:'session-id',
	secret:'12345',
	saveUninitialized:true,
	resave:true,
	store:new fileStore()
}))

function auth (req , res , next){

  if (req.session && req.session.user == "admin")
    return next();
  else
    return res.sendStatus(401);
}

app.use(morgan('dev'));


app.use('/play.html',auth);

app.use('/', express.static(path.join(__dirname, '../tech-hunt-react2/Files/Templates/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(err,req,res,next){
	res.writeHead(err.status||500,{
		'WWW-Authenticate':'Basic',
		'Content-Type':'text/plain'
	});
	res.end(err.message);
})

app.all(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');

  next();
})

app.use('/login',loginRouter);

app.get('/logout',function(req,res){
  req.session.destroy();
  res.end("logged out")
  console.log(req.session);
})
app.use('/play',cRouter);

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
