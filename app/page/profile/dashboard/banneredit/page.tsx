"use client"

import Header from "@/app/component/Header";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { useState,useEffect } from "react"
import BannerForm from "@/app/component/form/BannerForm";
import AddBannerForm from "@/app/component/form/addBannerForm";

export default function Page(){
    interface bannerModel{
        _id:string,
        img:string,
        title:string,
        description:string
    }
    const [updateState,setUpdateState]=useState(false);
    const [addState,setAddState]=useState(false);
    const [passData,setPassData]=useState<bannerModel>({ _id:"",
        img:"",
        title:"",
        description:""});
    
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
    const deleteBanner=async(id:string)=>{
    
        const res = await fetch(`http://localhost:3000/api/edit/Banner/deleteBanner`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:id}),
    });
        const response=await res.json();
        setBannerData(response.data)
        if(response.status==200){
            toast.success('Banner Delete Successfully ', {
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
        else{
            toast.error(response.error, {
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
    return(
        <>

        <div>

            <Header/>
            <div style={{width:"50%",margin:"auto",  padding:"2vh 0",  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}}>

            <div style={{margin:"1vh auto",width:"100%",display:"grid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",placeItems:"center",height:"14vh",fontSize:"2em"}} >Banner Edit</div>
            <button onClick={(e)=>setAddState(true)} className="update-btn" style={{margin:"auto"}}>Add New Banner</button>

            {bannerData && bannerData.map((data,index)=>{
return(
    <div className="slider-item-banner" style={{width:"90%",height:"auto",margin:"3vh auto",overflow:"hidden",    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)"
    }}>

    <img style={{height:"50vh"}} src={data.img} alt="women's latest fashion sale" className="banner-img1"/>

    <div className="banner-content1" style={{position:"static",top:"20px"}}>

      <p style={{width:"90%",wordWrap:"break-word"}}>Title:{data.title}</p>

      <p style={{width:"90%",wordWrap:"break-word"}}>Description:{data.description}</p>

    </div>
    <div className="banner-btn-container">

<button onClick={(e)=>{setPassData(data);setUpdateState(true);}} className="update-btn">Update</button>

<button onClick={(e)=>deleteBanner(data._id)} className="delete-btn">Delete</button>
    </div>
  </div>
);
})}
</div>
        
        {updateState && <BannerForm data={passData} setUpdateState={setUpdateState}/>}
        {addState && <AddBannerForm setAddState={setAddState}/>}
        </div>
        </>
    )
}