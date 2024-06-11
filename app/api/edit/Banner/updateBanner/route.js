import { NextResponse } from 'next/server';
import BannerModel from "../../../../../model/banner"
export async function POST(req, res) {
    try{

        const body = await req.json();
    const {id,title,img,description}=body;
await BannerModel.updateOne({_id:id},{title,img,description})
return NextResponse.json({ status: 200, error: "Banner Update Successfully"});

}
catch(error){
    return NextResponse.json({ status: 400, error: "Check Internet Connection"});
}

}