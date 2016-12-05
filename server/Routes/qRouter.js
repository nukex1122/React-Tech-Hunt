var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var qRouter = express.Router();

qRouter.route('/')
.get(function(req,res){

})
module.exports = qRouter;
