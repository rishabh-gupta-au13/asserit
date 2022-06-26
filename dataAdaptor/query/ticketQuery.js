const ticketModel = require("../models/tickets");
const userModel = require("../models/admin");
const mongoose = require("mongoose");
const ObjectId = require("mongoose").ObjectId;
const { serverError } = require("../../utilities/response");

class ticketQuery {
  async getTheOpenTickets() {
    try {
      // console.log("hello");
      return ticketModel.find({ status: "Open" });
    } catch (err) {
      console.log(err);
    }
  }
  async getTheCloseTickets() {
    try {
      return ticketModel.find({ status: "Close" }, { bookingDetails: 0 });
    } catch (err) {
      console.log(err);
    }
  }

  async bookTheTickets(name, mobileNumber) {
    try {
      let bookTicket = await ticketModel.find({ status: "Open" }).limit(1);
      let result = [];
      let c = Date.now();
      // console.log(bookTicket, "=========================");
      if (bookTicket.length > 0) {
        let c1 = await ticketModel.updateOne(
          { _id: bookTicket[0]._id },
          {
            $set: {
              "status": "Close",
              "ticketNumber": c,
              "bookingDetails.name": name,
              "bookingDetails.phoneNumber": mobileNumber,
            },
          }
        );
        result.push(c);
        return result;
      }
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  async getStatusOfTicket(ticketNumber){
    try{
      return await ticketModel.find({ticketNumber:ticketNumber});

    }catch(err){
      console.log(err)
    }

  }
  async checkUser(name){
    try{
      return await userModel.find({name:name});

    }catch(err){
      console.log(err)
    }

  }
  async openAllTheTickets(){
    try{
    let openTheTickets=await ticketModel.updateMany({},{
      $unset:{
        "bookingDetails":1,
        "ticketNumber":1
      },
      $set:{
        "status":"Open"
      }
    })
    console.log(openTheTickets)
    return openTheTickets
  }catch(error){
    console.log(error)
  }


  }
  


}

module.exports = new ticketQuery();
