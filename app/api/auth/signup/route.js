import { NextResponse } from 'next/server';
import  connectToDB  from '../../../../utils/db';
import UserModel from "../../../../model/login"
export async function POST(req, res) {
    const body = await req.json();
const {  username,
    password,
    email
    }=body;
await connectToDB();
try{
const userdata =await  UserModel.create({username:username,password:password,email:email});
    return NextResponse.json({ status: 200, error: "Account Created Successfully" });

}catch(error){
    console.log("login failed");
    return NextResponse.json({ status: 300, error: "Invalid Attempt" +error.message});

}


}