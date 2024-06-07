import {Schema, model, models} from 'mongoose';

const BannerModels=new Schema({
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
}
});
const ProductModel=models.Product || model("Product",BannerModels);
export default ProductModel;
