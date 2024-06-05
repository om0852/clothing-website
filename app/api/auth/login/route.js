import { NextResponse } from 'next/server';
import  connectToDB  from '../../../../utils/db';
import UserModel from "../../../../model/login"
export async function POST(req, res) {
    const body = await req.json();
const {  username,
    password,
    }=body;
    await connectToDB();
    try{
        const userdata =await UserModel.findOne({username:username});
        
        console.log(userdata,username)
   if(userdata){
if(userdata.password==password){
    return NextResponse.json({ status: 200, error: "Login Successfully",type:userdata.type });
}
else{
    return NextResponse.json({ status: 300, error: "Invalid Password" });

}
   }
   else{

       return NextResponse.json({ status: 300, error: "UserName Not Found" });
   }

}catch(error){
    console.log(error)
     return NextResponse.json({ status: 300, error: "Invalid Attempt" +error.message});

}


}