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
            let get_close_tickets=await ticketQuery.getTheCloseTickets();
            return reply(req,res,get_close_tickets)

        }catch(err){
            console.log(err)
            return serverError(req,res,err)
        }
    }
    async bookTickets(req,res,next){
        try{
            let {customerName,phoneNumber}=req.body
            let bookTicketes=await ticketQuery.bookTheTickets(customerName,phoneNumber);
            if(bookTicketes.length!=0){
                return reply(req,res,`Ticket Suceesfully Booked For ${customerName} And Ticket Id Is ${bookTicketes[0]}`)
            }
            return reply(req,res,"Ticket Is Not Available")

        }catch(err){
            console.log(err);
            return serverError(req,res,err)
        }
    }
    async getTicketStatus(req,res,next){
        try{
            let ticketNumber=req.query.ticketNumber;
            let getStatus=await ticketQuery.getStatusOfTicket(ticketNumber);
            if(getStatus && getStatus.length>0){
                return reply(req,res,getStatus[0])
            }
            return reply(req,res,"Ticket Number Is Not Present Please Contact Bus Owner");


        }catch(err){
            console.log(err);
            return serverError(req,res,err)
        }
    }
}


module.exports=new ticketControllers()