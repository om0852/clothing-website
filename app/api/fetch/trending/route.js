import ProductModel from '@/model/product';
import { NextResponse } from 'next/server';
import TrendingModel from '@/model/trending';
import NewArrivalModel from '@/model/newarrival';


import connectDB from "@/utils/db"
export async function POST(req, res) {
await connectDB();
    try{
        const data = await ProductModel.find();
        let data2=await TrendingModel.findOne();
        let data3=await NewArrivalModel.findOne();
        let arr=Array(data2.length)
        let arr2=Array(data3.length)
    data.forEach(element => {
        if(data2.productId.indexOf(element._id)!=-1){
            arr[data2.productId.indexOf(element._id)]=(element)
        }
        if(data3.productId.indexOf(element._id)!=-1){
            arr2[data3.productId.indexOf(element._id)]=(element)
        }
    });
    arr=arr.filter((item)=>item!=null);
    arr2=arr2.filter((item)=>item!=null);
    return NextResponse.json({ status: 200, error: "retrive Successfully",data:arr,data2:arr2});

}catch(error){
    console.log(error.message)
    return NextResponse.json({ status: 400, error: "Invalid Attempt"});

}


}
