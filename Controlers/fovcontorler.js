const fovmodel= require('../models/Fovmodel');
const joi=require('joi');

const getall= async(req,res)=>{
    try {
        const getalfov=await fovmodel.find();
        res.status(200).send(getalfov);
    } catch (error) {
       res.status(400).send(error.message) 
    }
}
//getone
const getones=async(req,res)=>{
    try {
        const{id}=req.params
       const getone=await fovmodel.findById(id);
       res.status(200).send(getone) 
    } catch (error) {
        res.status(400).send(error.message)
    }
}
///FAVUARITE validation
const fovvalidation=(FAVUARITE)=>{
    const FAV=joi.object({
        userID :joi.string().required(),
   
        QuestionID :joi.string().required(),
    })
    return FAV.validate(FAVUARITE)
}
///post
const POST=async(req,res)=>{
    const{err}=fovvalidation(req.body)
    if(err){
        res.status(400).send(err.message)
    }
        try {
          const favuarite= new fovmodel(req.body) 
           await favuarite.save();
           res.status(200).send({message:"succesfully",fov:favuarite})
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
     //puts
     const updates=async(req,res)=>{
        try {
           const {id}=req.params
           const updat= await fovmodel.findByIdAndUpdate(id,req.body,{new:true}) ;
           res.status(200).send("successfuly updated")
        } catch (error) {
         res.status(400).send(error.message)   
        }
    }
    //delete

    const deletes=async(req,res)=>{
        try {
           const{id}=req.params;
           const deltes= await fovmodel.findByIdAndDelete(id)
        //    await deletes.save()
           res.status(200).send({status:'succesfuly deleted', DELETefavuarite:deltes}) 
         
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
module.exports={getall,getones,POST,deletes,updates}