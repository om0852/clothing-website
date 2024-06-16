import {Schema, model, models} from 'mongoose';

const DealOfTheDaySchema=new Schema({
img:{
    type:Array,
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
    type:Number,
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
},
productType:{
    type:String
},
date:{
    type:String
}
});
const DealOfTheDayModel=models.dealoftheday || model("dealoftheday",DealOfTheDaySchema);
export default DealOfTheDayModel;
