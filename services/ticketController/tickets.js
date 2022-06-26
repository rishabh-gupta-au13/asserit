const { clientError, serverError, reply } = require("../../utilities/response");
const ticketQuery = require("../../dataAdaptor/query/ticketQuery");
const { errorMessages } = require("../error");
const jwt=require("jsonwebtoken");
const appConfig=require("../../configs/app.json")

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
    async authenticateUsers(req,res,next){
        try{
            const name=req.query.name;
            const password=req.query.password
          //   first we will check whether userName exist in our database or not if it will not exist will throw the error
          const checkUser=await ticketQuery.checkUser(name);
          if(checkUser.length==0){
              let message="User Not Exist"
              return clientError(req,res,message)
          }
          // if user is present, verify the passowrd
        //   let validPassword=await bcrypt.compare(password,checkEmail[0].password);
          if(password != checkUser[0].password){
              let message="Invalid UserName Or Password";
              return clientError(req,res,message)
          }
          // if the paswword is coreect will genrate json web token 
          const token=jwt.sign(
              {userId:checkUser[0]._id},
              appConfig.jwtSecret,
              {expiresIn:"24h"}
          )
          let result={
              message:"Token Generated Sucessfully",
              token:token,
          };
          return reply(req,res,result)
  

        }catch(err){
            console.log(err);
            return serverError(req,res,err)
        }
    }
    async openAllTickets(req,res,next){
        try{
        
            let openAll_Tickets=await ticketQuery.openAllTheTickets();
            if(openAll_Tickets.acknowledged==true &&openAll_Tickets.modifiedCount>0 && openAll_Tickets.matchedCount>0){
                return reply(req,res,"All The Tickets Are Opened")
            }
            return reply(req,res,"There is some issue In update");


        }catch(err){
            console.log(err);
            return serverError(req,res,err)
        }
    }
}


module.exports=new ticketControllers()