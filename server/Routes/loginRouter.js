var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Users = require('../models/users');

var loginRouter = express.Router();

var db = require('./database.js')
var question = require('./questions.js')

loginRouter.route('/')
.post(function(req,res){
  var data = {
              "id":req.body.Username,
              "password":req.body.Password
            };
  db.checkLogin(data,function(user){
    if (!(user.length == 0)) {
      req.session.user = "admin";
      req.session.name = user[0].name.split(" ")[0];
      req.session.userID = user[0].id;
      res.end("loggedIn");
    }else {
      res.end("Error");
    }
  });
})
.get(function(req,res){
  db.getLevelById({id:req.session.userID},function(user){
    var data = {
      user:{
        name:req.session.name,
        level:user.level
      },
      clues:{la:question[user.level].question},
      id:user.id
    }
    res.send(data);
  })
})

loginRouter.route('/addUser').post(function(req,res){
  db.addUser(req.body,function(user){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("added user with id " + user._id);
  })
})
module.exports = loginRouter;
