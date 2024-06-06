import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import connectDB from "@/utils/db"
export async function POST(req, res) {
    const body = await req.json();
    const {id}=body
connectDB();
    try{
    const data = await ProductModel.deleteOne({_id:id});
    return NextResponse.json({ status: 200, error: "Product Deleted Successfully"});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
