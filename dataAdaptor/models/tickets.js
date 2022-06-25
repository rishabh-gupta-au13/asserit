const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const tickets = new Schema({
    
    ticketNumber:{
        type:Number
    },
    status:{
        type:String,
        default:"Open",
        enum : ['Open','Close'],
    },
    bookingDetails:{
        name:{
            type:String
        },
        phoneNumber:{
            type:String
        }
    }
},{timestamps:true});

tickets.index({
  ticketStatus:1
});

// exporting the entire module
module.exports = mongoose.model('tickets', tickets);