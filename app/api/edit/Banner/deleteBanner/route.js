import { NextResponse } from 'next/server';
import BannerModel from "../../../../../model/banner"
import connectDB from "@/utils/db"

export async function POST(req, res) {
    try{

        const body = await req.json();
    const {id}=body;
    await connectDB();
await BannerModel.deleteOne({_id:id})
return NextResponse.json({ status: 200, error: "Banner Deleted Successfully"});

}
catch(error){
    return NextResponse.json({ status: 400, error: "Check Internet Connection"});
}

}