import { NextResponse } from 'next/server';
import BannerModel from "@/model/banner"
export async function POST(req, res) {
    try{

        const body = await req.json();
    const {title,img,description}=body;
await BannerModel.create({title,img,description})
return NextResponse.json({ status: 200, error: "Banner Add Successfully"});

}
catch(error){
    return NextResponse.json({ status: 400, error: "Check Internet Connection"});
}

}