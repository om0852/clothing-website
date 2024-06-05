import {Schema, model, models} from 'mongoose';

const BannerModels=new Schema({
productId:{
    type:String,
    required:true
}
});
const BannerModel=models.BannerDetails || model("BannerDetails",BannerModels);
export default BannerModel;
