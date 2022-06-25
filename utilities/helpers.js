const {clientError,serverError,reply}=require("./response")
const options={
    errors:{
        wrap:{
            label:''
        }
    }

}
module.exports={
    validatePayload:async(req,res,next,schema,payload)=>{
        try{
            const result=await schema.validate(payload,options);
            if(result.error){
                let newError=Error(result.error.message);
                return clientError(req,res,newError);
            }
            return next();
        }catch(error){
            return clientError(req,res,error);
        }
    }
}