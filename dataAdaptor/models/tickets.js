const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const tickets = new Schema({
    ticketStatus:{
        type:String,
        enum : ['Open','Close'],
    }


},{timestamps:true});

customers.index({
  ticketStatus:1
});

// exporting the entire module
module.exports = mongoose.model('tickets', tickets);