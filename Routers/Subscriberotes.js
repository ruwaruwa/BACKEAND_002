const express=require('express');
const subscribe=express.Router();

const{getall,getones,POST,updates,deletes}=require('../Controlers/Subscribecontorler')
subscribe.get('/',getall)
subscribe.get('/',getones)
subscribe.post('/',POST)
subscribe.put('/',updates)
subscribe.delete('/',deletes)


module.exports=subscribe