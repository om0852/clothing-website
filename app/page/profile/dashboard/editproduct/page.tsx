"use client"
import Header from "@/app/component/Header";
import { useEffect, useState } from "react";
import "../../../../css/component.css";
import 'bootstrap/dist/css/bootstrap.css'

import EditProductCard from "@/app/component/card/EditProductCard";
export default function Page(){
    interface productSchema {
        img: string[],
        title: string,
        description: string,
        price: number,
        rating: [],
        size: string[],
        discount: number,
        productType: string
    }
    const [productData,setProductData]=useState<[]>([]);
const fetchProductData=async()=>{
    
    const res = await fetch(`http://localhost:3000/api/edit/findAllProduct`, {
        method: "POST",
        headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
});
    const response=await res.json();
    setProductData(response.data)
    if(response.status==200){
    }
}
useEffect(()=>{
    fetchProductData()
},[])
    return(
        <>
        <Header/>
        {productData && productData.map((data,index)=>{
            return(
            <>
            <EditProductCard data={data}/>
            </>   
            )

        })


        }

        </>
    )
}