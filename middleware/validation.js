const Joi=require('Joi');
const {validatePayload}=require("../utilities/helpers");
const { serverError, clientError } = require('../utilities/response');

class ticketsValidator{
    async bookTicketValidator(req,res,next){
        const schema=Joi.object().keys({
            customerName:Joi.string().required(),
            phoneNumber:Joi.string().regex(/^[6-9]\d{9}$/i).required(),
        
        })
        try{
            const {error}=await schema.validate(req.query);
            console.log(error);
            if(error){
                let message=error && error.details[0].message.replace(/"/g,"'");
                return clientError(req,res,message);
            }
            return next();

        }catch(error){
            return serverError(req,res,error)
        }
    }
}
module.exports=new ticketsValidator()