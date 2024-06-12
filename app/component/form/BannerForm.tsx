"use client"
import "@/app/css/form.css";
import "@/app/css/component.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


interface ProductModel {
    _id: string ;
    img: string ;
    title: string ;
    description: string ;
}

export default function BannerForm({ data,setUpdateState }: { data: ProductModel | "None",setUpdateState:any }) {
    const [bannerData, setBannerData] = useState<ProductModel>({
        _id: "",
        img: "",
        title: "",
        description: "",
    });

    useEffect(() => {
        if (data !== "None") {
            setBannerData(data);
        }
    }, [data]);
    const updateBanner=async()=>{
    
        const res = await fetch(`http://localhost:3000/api/edit/Banner/updateBanner`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({bannerData}),
    });
        const response=await res.json();
        setBannerData(response.data)
        if(response.status==200){
            setUpdateState(false);
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
                    Banner Form
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

<button onClick={(e)=>updateBanner()} className="update-btn">Update</button>
<button  className="delete-btn" onClick={(e)=>setUpdateState(false)}>Cancel</button>
    </div>
             </div>
        </div>
    );
}
