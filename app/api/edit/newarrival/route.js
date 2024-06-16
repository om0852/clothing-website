import NewArrivalModel from '@/model/newarrival';
import { NextResponse } from 'next/server';

import connectDB from "@/utils/db"
export async function POST(req, res) {
    const body = await req.json();
    const {id}=body
    console.log(id)
connectDB();
    try{
await NewArrivalModel.updateOne({_id:"666db8b5e74f393217be72eb"},{productId:id});
// await NewArrivalModel.create({productId:id});
        return NextResponse.json({ status: 200, error: "Product Updated Successfully"});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
