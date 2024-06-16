import DealOfTheDay from '@/model/dealoftheday';
import { NextResponse } from 'next/server';
import connectDB from "@/utils/db"
export async function POST(req, res) {
    const body = await req.json();
    const {img,title,productType,description,price,size,rating,discount,date}=body
connectDB();
    try{
        
    const data = await DealOfTheDay.create({img,productType,title,description,price,size,rating,discount,date});
    return NextResponse.json({ status: 200, error: "Added Successfully"});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Inavlid Attempt"});

}


}
