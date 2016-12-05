var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var cRouter = express.Router();

var question = require('./questions.js');
var db = require('./database.js')

cRouter.route('/')
.all(function(req,res,next){
  next();
})
.post(function(req,res){
  if (question.checkAns(req.body.level,req.body.Answer)) {
      db.incrementLevelById(req.body.id);
      res.end("Correct");
  }
  res.end("Wrong Answer");
});

module.exports = cRouter;
