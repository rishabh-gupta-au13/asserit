const ticketModel = require("../models/tickets");
const userModel=require("../models/user");
const mongoose=require('mongoose')
const ObjectId=require('mongoose').ObjectId


class ticketQuery {
  async getTheOpenTickets() {
    try {
      console.log("hello")
      return ticketModel.find({status:"Close"})
     
    } catch (err) {
      console.log(err);
    }
  }
  async getTheCloseTickets(){
    try{
      return ticketModel.find({status:"Open"})

    }catch(err){
      console.log(err)
    }
  }
  
}

module.exports = new ticketQuery();