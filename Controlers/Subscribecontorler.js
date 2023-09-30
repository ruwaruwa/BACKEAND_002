const subscribemodel= require('../models/Subscribemodel');
const joi=require('joi');

const getall= async(req,res)=>{
    try {
        const getalfov=await subscribemodel.find();
        res.status(200).send(getalfov);
    } catch (error) {
       res.status(400).send(error.message) 
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await subscribemodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///subcribe validation
const subscribevalidation=(SUBSRIBE)=>{
    const Subcribe=joi.object({
        userID :joi.string().required(),
   
        SubjectID :joi.string().required(),
    })
    return Subcribe.validate(SUBSRIBE)
}
///post
const POST=async(req,res)=>{
    const{err}=subscribevalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const subcribe= new fovmodel(req.body) 
           await subcribe.save();
           res.status(200).send({message:"succesfully",subsrubes:subcribe})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
     //puts
     const updates=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await subscribemodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete

    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await subscribemodel.findByIdAndDelete(id)
        //    await deletes.save()
           res.status(200).send({status:'succesfuly deleted', DELETesubcribe:deltes}) 
         
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
module.exports={getall,getones,POST,deletes,updates}