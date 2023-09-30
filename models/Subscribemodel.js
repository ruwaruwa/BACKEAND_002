const mongoose=require('mongoose');
const Subscribeschema= new mongoose.Schema({
    userID:{
       type:String,
       required:true
    },
    SubjectID:{
        type:String,
        required:true
     }
})
const subscribemodel=mongoose.model('subscribemodels',Subscribeschema)
module.exports=subscribemodel