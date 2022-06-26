const { clientError, serverError, reply } = require("../../utilities/response");
const ticketQuery = require("../../dataAdaptor/query/ticketQuery");
const { errorMessages } = require("../error");

class ticketControllers{
    async getOpenTickets(req,res){
        try{
            let get_open_tickets=await ticketQuery.getTheOpenTickets()
            return reply(req,res,get_open_tickets)
        }catch(err){

            console.log(err)
            return serverError(req,res,err)
        }
    }
    async getCloseTicketes(req,res){
        try{
            let get_close_tickets=await ticketQuery.getTheCloseTickets()

        }catch(err){
            console.log(err)
            return serverError(req,res,err)
        }
    }
    async bookTickets(req,res,next){
        try{
            let {customerName,phoneNumber}=req.body
            let bookTicketes=await ticketQuery.bookTheTickets(customerName,phoneNumber);
            console.log(bookTicketes,"===============================")
            if(bookTicketes.length!=0){
                return reply(req,res,`Ticket Suceesfully Booked For ${customerName} And Ticket Id Is ${bookTicketes[0]._id}`)
            }
            return reply(req,res,"Ticket Is Not Available")

        }catch(err){
            console.log(err);
            return serverError(req,res,err)
        }
    }
}


module.exports=new ticketControllers()