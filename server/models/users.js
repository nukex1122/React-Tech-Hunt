var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  id:{
    type:String,
    required:true,
    unique:true
  },
  admin:{
    type:Boolean,
    default:false,
  },
  password:{
    type:String,
    required:true
  },
  level:{
    type:Number,
    required:false,
    default:0
  }
})

var Users = mongoose.model('User',UserSchema);

module.exports = Users;
