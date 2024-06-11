import {Schema, model, models} from 'mongoose';

const BannerModels=new Schema({
img:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},

});
const BannerModel=models.BannerDetails || model("BannerDetails",BannerModels);
export default BannerModel;
