import {Schema, model, models} from 'mongoose';

const ArrivalSchema=new Schema({
productId:{
    type:Array,
}
});
const NewArrivalModel=models.newarrival || model("newarrival",ArrivalSchema);
export default NewArrivalModel;
