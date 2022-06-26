const mongoose  = require("mongoose");

const admin = new Schema({
   
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
    
    admin.index({
      'name': 1,
      'email': 1,
      'password': 1,
      'mobileNumber': 1
    });
    
    // exporting the entire module
    module.exports = mongoose.model('admins', admin);