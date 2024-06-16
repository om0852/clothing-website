import TrendingModel from '@/model/trending';
import { NextResponse } from 'next/server';

import connectDB from "@/utils/db"
export async function POST(req, res) {
    const body = await req.json();
    const {id}=body
connectDB();
    try{
await TrendingModel.updateOne({_id:"666da88397924c3ed2a40bba"},{productId:id});
        return NextResponse.json({ status: 200, error: "Product Updated Successfully"});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
