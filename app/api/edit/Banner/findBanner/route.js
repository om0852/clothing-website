import { NextResponse } from 'next/server';
import BannerModel from "@/model/banner";
import connectToDB from '@/utils/db';

export async function POST(req, res) {
    try{
await connectToDB()
const data = await BannerModel.find()
return NextResponse.json({ status: 200, error: "Banner Find Successfully",data:data});

}
catch(error){
    return NextResponse.json({ status: 400, error: "Check Internet Connection"});
}

}