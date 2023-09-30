const express=require('express');
const fov=express.Router();

const{getall,getones,POST,updates,deletes}=require('../Controlers/fovcontorler')
fov.get('/',getall)
fov.get('/',getones)
fov.post('/',POST)
fov.put('/',updates)
fov.delete('/',deletes)


module.exports=fov