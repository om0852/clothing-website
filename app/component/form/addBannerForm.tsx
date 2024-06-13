"use client"
import "@/app/css/form.css";
import "@/app/css/component.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


interface ProductModel {
    img: string ;
    title: string ;
    description: string ;
}

export default function AddBannerForm({setAddState}:any) {
    const [bannerData, setBannerData] = useState<ProductModel>({
        img: "",
        title: "",
        description: "",
    });

    const updateBanner=async()=>{
    
        const res = await fetch(`http://localhost:3000/api/edit/Banner/addBanner`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title:bannerData.title,img:bannerData.img,description:bannerData.description}),
    });
        const response=await res.json();
        setBannerData(response.data)
        if(response.status==200){
            setAddState(false);
            toast.success('Banner Updated Successfully ', {
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
   
const handleOnChange=(e:any)=>{
    setBannerData(prev=>({...prev,[e.target.name]:e.target.value}))
}
    const handlePic = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const filedata = e.target.files?.[0];
        if (!filedata) return;

        console.log(filedata);
        const formData = new FormData();
        formData.append("file", filedata);
        formData.append("upload_preset", "gsceswka");
        formData.append("cloud_name", "dge7wv4zo");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dge7wv4zo/image/upload", {
                method: "post",
                body: formData,
            });
            const result = await res.json();
            setBannerData((prev) => ({ ...prev, img: result.url }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="banner-form-container">
            <div className="banner-form-section">
                <p
                    style={{
                        width: "100%",
                        height: "7vh",
                        display: "grid",
                        placeItems: "center",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                   Add Banner Form
                </p>
                <div style={{ display: "grid", placeItems: "center" }}>
{bannerData.img &&                    <img style={{marginTop:"2vh"}} src={bannerData.img} width={50} height={50} alt="Banner" />
}                    <label
                        style={{
                            width: "45vh",
                            height: "8vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "red",
                            color: "white",
                            marginTop: "4vh",
                        }}      
                        htmlFor="uploadimg"
                    >
                        Upload Product Image
                    </label>
                    <input onChange={handlePic} hidden id="uploadimg" type="file" accept="image/*" />
                </div>
                <div className="input-container">
                    <h3>Banner Title:</h3>
                    <input
                        name="title"
                        value={bannerData.title || ""}
                        className="addproduct-input"
                        onChange={handleOnChange}              
                        />
                </div>
                <div className="input-container">
                    <h3>Banner Description:</h3>
                    <input
                        name="description"
                        value={bannerData.description || ""}
                        className="addproduct-input"
onChange={handleOnChange}              
      />
                </div>
                <div className="banner-btn-container">

<button onClick={(e)=>updateBanner()} className="update-btn">Add</button>
<button  className="delete-btn" onClick={(e)=>setAddState(false)}>Cancel</button>
    </div>
             </div>
        </div>
    );
}
