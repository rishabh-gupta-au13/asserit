const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const tickets = new Schema({
    ticketStatus:{
        type:String,
        enum : ['Open','Close'],
    },
    ticketNumber:{
        type:Number
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