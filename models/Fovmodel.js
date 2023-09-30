const mongoose=require('mongoose');
const fovschema= new mongoose.Schema({
    userID:{
       type:String,
       required:true
    },
    QuestionID:{
        type:String,
        required:true
     }
})
const fovmodel=mongoose.model('fovaritemodel',fovschema)
module.exports=fovmodel