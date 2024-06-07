import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import connectDB from "@/utils/db"
export async function POST(req, res) {
connectDB();
const body = await req.json();
try{
        console.log(body.id);
    const data = await ProductModel.findOne({_id:body.id});
    return NextResponse.json({ status: 200, error: "retrive Successfully",data:data});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
