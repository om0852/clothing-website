import { useEffect, useState } from "react";
import DealOfTheDayCard from "./card/DealOfTheDayCard";

export default function DealOfTheDay(){
    const [dealData,setDealData]=useState<[]>([]);
    const fetchProductData=async()=>{
    
        const res = await fetch(`http://localhost:3000/api/fetch/dealoftheday`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
    });
        const response=await res.json();
        if(response.status==200){
            setDealData(response.data);
        }
    }
    useEffect(()=>{
        fetchProductData();
    },[]);
    return (
        <div className="product-featured">

        <h2 className="title">Deal of the day</h2>

        <div className="showcase-wrapper has-scrollbar">
            {dealData.map((data)=>{
return(

    <DealOfTheDayCard data={data}/>
    )
            })}

</div>
</div>

    )
}