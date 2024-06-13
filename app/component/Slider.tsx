import { useEffect, useState } from "react"
import "../css/component.css"
import loginimg from "../img/Login & Registration Form.png"
import Script from "next/script"
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

export default function Slider(){
  interface BannerData{
    _id:string,
    img:string,
    title:string,
    description:string
  }
const [bannerData,setBannerData]=useState<BannerData[]>([]);
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
  if(response.status==200){
      setBannerData(response.data)
      
  }
  else{
      toast.error('Check Internet Connection ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  }
}
useEffect(()=>{
  fetchProductData()
},[]);

      return (
        <>
    
    <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">
{bannerData.map((data)=>{
return(

  
  <div className="slider-item">

            <img src={data.img} alt="women's latest fashion sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">{data.title}</p>

              <h2 className="banner-title">{data.description}</h2>


            </div>

          </div>
      )
        })  
        }

        
        </div>

      </div>

    </div>
       </>
    )
}