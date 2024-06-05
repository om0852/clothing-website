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
price:{
    type:String,
    required:true
},
rating:{
    type:Array,
    default:[0,0,0,0,0]
},
size:{
    type:Array,
},
discount:{
    type:Number
}
});
const BannerModel=models.BannerDetails || model("BannerDetails",BannerModels);
export default BannerModel;
