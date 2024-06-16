import {Schema, model, models} from 'mongoose';

const TrendingSchema=new Schema({
productId:{
    type:[String],
    required:true
}
});
const TrendingModel=models.trending || model("trending",TrendingSchema);
export default TrendingModel;
