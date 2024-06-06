import {Schema, model, models} from 'mongoose';

const UserSchema=new Schema({
fullName:{
    type:String
},
phoneNumber:{
    type:String
},
address:{
    type:String
},
orderAddress:{
    type:String
},
whishlist:{
    type:Array
}


});


const UserDetail=models.UserDetail || model("UserDetail",UserSchema);
export default UserDetail;