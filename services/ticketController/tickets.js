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
}


module.exports=new ticketControllers()