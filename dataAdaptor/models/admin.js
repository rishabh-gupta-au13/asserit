const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const admins = new Schema({
   
    name:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        unique:true
    },
   
   
    },{timestamps:true});
    
    admins.index({
      'name': 1,
      'email': 1,
      'password': 1,
      'mobileNumber': 1
    });
    
    // exporting the entire module
    module.exports = mongoose.model('admins', admins);