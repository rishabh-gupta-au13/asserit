const { default: mongoose } = require("mongoose");

const customers = new Schema({
    ticketId:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String,
        required:true
    
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isSuperAdmin:{
        type:String,
        default:"Not"
    },
    mobileNumber:{
        type:String,
        unique:true
    }
    },{timestamps:true});
    
    customers.index({
      'name': 1,
      'email': 1,
      'password': 1,
      'mobileNumber': 1
    });
    
    // exporting the entire module
    module.exports = mongoose.model('customers', customers);