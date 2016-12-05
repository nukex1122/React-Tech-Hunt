var mongoose = require('mongoose');
var Users = require('../models/users');

var UserRouter = {
  checkLogin : function(data,callback){
    Users.find(data,function(err,user){
      if(err) throw err;
      return callback(user)
    });
  },
  addUser:function(data,callback){
    Users.create(data,function(err,user){
      if (err) throw err;
      return callback(user);
    });
  },
  getLevelById:function(data,callback){
    Users.find(data,function(err,user){
      if(err) throw err;
      return callback(user[0]);
    });
  },
  incrementLevelById:function(data){
    Users.find({id:data},function(err,user){
      var a = user[0].level+1;
      console.log(a);
      Users.findByIdAndUpdate(user[0]._id, {
        $set: {
            level:a
         }
      },function(err,result){
        if(err){
            console.log(err);
        }
        console.log(result);
      });
    })
  }
}

module.exports = UserRouter;
