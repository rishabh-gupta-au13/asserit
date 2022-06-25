const ticketModel = require("../models/tickets");
const userModel=require("../models/user");
const mongoose=require('mongoose');
const ObjectId=require('mongoose').ObjectId;
const {serverError}=require("../../utilities/response")


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

  async bookTheTickets(name,mobileNumber){
    try{
      let bookTicket=await ticketModel.find({"status":"Open"}).limit(1)
      console.log(bookTicket,"=========================")
      if(bookTicket.length>0){
       let c1= await ticketModel.updateOne({"_id":bookTicket[0]._id},{$set:{
          "status":"Close",
          "bookingDetails.name":name,
          "bookingDetails.phoneNumber":mobileNumber
        
        }})

      }else{
        return serverError(req,res,"Ticket Fully Booked")

      }
    

    }catch(err){
      console.log(err)
    }

  }
  
}

module.exports = new ticketQuery();