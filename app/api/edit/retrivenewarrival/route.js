import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import NewArrivalModel from '@/model/newarrival';

import connectDB from "@/utils/db"
export async function POST(req, res) {
await connectDB();
    try{
        const data = await ProductModel.find();
        let data2=await NewArrivalModel.findOne();
        console.log(data2)
        let arr=Array(data2.productId.length)
    data.forEach(element => {
        if(data2.productId.indexOf(element._id)!=-1){
            arr[data2.productId.indexOf(element._id)]=(element)
        }
    });
    return NextResponse.json({ status: 200, error: "retrive Successfully",data:data,data2:arr});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
