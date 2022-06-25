const ticketModel = require("../models/tickets");
const userModel=require("../models/user");
const mongoose=require('mongoose')
const ObjectId=require('mongoose').ObjectId


class ticketQuery {
  async getTheOpenTickets(productDetails) {
    try {
      console.log("hello")
      return ticketModel.find({status:"Close"})
     
    } catch (err) {
      console.log(err);
    }
  }
  
}

module.exports = new ticketQuery();