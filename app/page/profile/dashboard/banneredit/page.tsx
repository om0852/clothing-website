"use client"

import Header from "@/app/component/Header";
import { useState,useEffect } from "react"

export default function Page(){
    interface bannerModel{
        img:string,
        title:string,
        description:string
    }
    const [bannerData,setBannerData]=useState<bannerModel[]>([]);
    const fetchProductData=async()=>{
    
        const res = await fetch(`http://localhost:3000/api/edit/Banner/findBanner`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
        const response=await res.json();
        setBannerData(response.data)
        if(response.status==200){
        }
    }
    useEffect(()=>{
        fetchProductData()
    },[]);
    
    return(
        <>

        <div>
            <Header/>
            <div>banner Edit</div>
            {bannerData.map((data,index)=>{
return(
    <div className="slider-item">

    <img src={data.img} alt="women's latest fashion sale" className="banner-img"/>

    <div className="banner-content">

      <p className="banner-subtitle">{data.title}</p>

      <h2 className="banner-title">{data.description}</h2>


    </div>

  </div>
);
            })}
        
        </div>
        </>
    )
}