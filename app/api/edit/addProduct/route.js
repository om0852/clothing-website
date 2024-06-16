import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import connectDB from "@/utils/db"
export async function POST(req, res) {
    const body = await req.json();
    const {img,title,description,price,size,productType,rating,discount}=body
connectDB();
    try{
    const data = await ProductModel.create({img,productType,title,description,price,size,rating,discount});
    return NextResponse.json({ status: 200, error: "Product Added Successfully"});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Inavlid Attempt"});

}


}
