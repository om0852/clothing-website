import { NextResponse } from 'next/server';
import BannerModel from "../../../../../model/banner"
import connectDB from "@/utils/db"

export async function POST(req, res) {
    try{

        const body = await req.json();
    const {_id,title,img,description}=body.bannerData;
    await connectDB();
    console.log(body)
const data =await BannerModel.updateOne({_id:_id},{title:title,img:img,description:description})
console.log(data)
return NextResponse.json({ status: 200, error: "Banner Update Successfully"});

}
catch(error){
    return NextResponse.json({ status: 400, error: "Check Internet Connection"});
}

}