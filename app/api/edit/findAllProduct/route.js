import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import connectDB from "@/utils/db"
export async function POST(req, res) {
await connectDB();
    try{
    const data = await ProductModel.find();
    return NextResponse.json({ status: 200, error: "retrive Successfully",data:data});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
