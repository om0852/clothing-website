"use client"
import { useEffect, useState } from "react"
import "../dashboard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/app/component/Header";

export default function Page() {
    interface productSchema {
        img: [...string],
        title: string,
        description: string,
        price: number,
        rating: [],
        size: [...string],
        discount: number,
        productType: string
    }
    const [productData, setProductData] = useState<productSchema>({
        img: [],
        title: "",
        description: "",
        price: 0,
        rating: [],
        size: [],
        discount: 0,
        productType: "All"
    });
    
const handleAddProduct=async()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let productId = urlParams.get('pid'); // value1
    if(productData.img.length==0){
        toast.error('Add Atleast One Image', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });    }
    else if(productData.title==""){
        toast.error('Enter  Product Name', {
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
    else if(productData.description==""){
        toast.error('Enter  Product description', {
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
    else if(productData.price==0){
        toast.error('Enter Product Price', {
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
    else if(productData.size.length==0){
        toast.error('Select Product Size', {
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
    else if(productData.productType==""){
        toast.error('Select Product Type', {
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

        const res = await fetch(`http://localhost:3000/api/edit/updateProduct`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:productId,img:productData.img,title:productData.title,description:productData.description,price:productData.price,size:productData.size,rating:productData.rating,discount:productData.discount}),
    });
        const response=await res.json();
        if(response.status==200){
            toast.success(' Product Update Successfully', {
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
            toast.error('Check Internet Connection', {
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
}
useEffect(()=>{
    async function  fetchData(){

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let productID = urlParams.get('pid'); // value1
        const res = await fetch(`http://localhost:3000/api/edit/findProduct`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id:productID}),
        });
        const response=await res.json();
        console.log(response.data)
        setProductData(response.data)
    }
    fetchData();
    
},[])

    const handleAddSize = (e:any) => {
if(e.target.checked==true){
    productData.size.push(e.target.name);
    setProductData(prev=>({...prev,size:productData.size}))
}else{
    const i= productData.size.indexOf(e.target.name);
    productData.size.splice(i,1);
    setProductData(prev=>({...prev,size:productData.size}))
}
    }
    const handleSetData = (e:any) => {

        const name = e.target.name;
        const value = e.target.value;
        setProductData(prev => ({ ...prev, [name]: value }));
        console.log(productData)
    }
    const handlePic = async (e) => {
        const filedata = e.target.files[0];
        console.log(e.target.files[0])
        const data = new FormData();
        data.append("file", filedata);
        data.append("upload_preset", "gsceswka");
        data.append("cloud_name", "dge7wv4zo");

        await fetch("https://api.cloudinary.com/v1_1/dge7wv4zo/image/upload", {
            method: "post",
            body: data
        })
            .then((res) => {
                res.json().then((data) => {
                    productData.img.push(data.url)
                    setProductData(prev=>({...prev,img:productData.img}));
                })
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <div className="addproduct-container">
                <ToastContainer/>
                <Header/>
                <div className="addproduct-form-container">


                    <div className="addproduct-form">
                    <div className="addproduct-title" style={{marginBottom:10}}>Update Product</div>

                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
{                   productData.img.length!=0 && productData.img && productData.img.map((data,index)=>{
return(
    <img onDoubleClick={(e)=>{productData.img.splice(index,1);                    setProductData(prev=>({...prev,img:productData.img}));
}} width={"40"} height={"40"} src={data}/>
)
})
}   
</div>
                 <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

<label style={{width:"45vh",
    height:"8vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    background:"red",
    color:"white",
    marginTop:"4vh"
}} htmlFor="uploadimg">Upload Product Image</label>
<input onChange={handlePic} hidden id="uploadimg" type="file" accept="image/*" />
</div>

                            <div className="input-container">
                                <h3>Product Name:</h3>
                                <input value={productData.title} name="title" onChange={(e) => handleSetData(e)} className="addproduct-input" />
                            </div>
                            <div className="input-container">
                                <h3>Product Description:</h3>
                                <input value={productData.description} name="description" onChange={(e) => handleSetData(e)} className="addproduct-input" />
                            </div>
                            <div className="input-container">
                                <h3>Product Type:</h3>
                                <select value={productData.productType} name="productType" onChange={handleSetData} className="addproduct-input">
                                    <option>All</option>
                                    <option>Mens</option>
                                    <option>Womens</option>
                                    <option>Kids</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <h3>Product Size:<p onClick={(e)=>{ productData.size=["S","M","L","XL","2XL","3XL"] ;  setProductData(prev=>({...prev,size:productData.size}))}
}>Click to select all</p></h3>
                                <span style={{ marginLeft: "2vh" }}>S:</span><input onClick={handleAddSize} name="S" type="checkbox" checked={productData.size.indexOf("S") != -1 ? true : false} />
                                <span style={{ marginLeft: "2vh" }}>M:</span><input onClick={handleAddSize} name="M" type="checkbox" checked={productData.size.indexOf("M") != -1 ? true : false} />
                                <span style={{ marginLeft: "2vh" }}>L:</span><input onClick={handleAddSize} name="L" type="checkbox" checked={productData.size.indexOf("L") != -1 ? true : false} /><br></br>
                                <span style={{ marginLeft: "2vh" }}>XL:</span><input onClick={handleAddSize} name="XL" type="checkbox" checked={productData.size.indexOf("XL") != -1 ? true : false} />
                                <span style={{ marginLeft: "2vh" }}>2XL:</span><input onClick={handleAddSize} name="2XL" type="checkbox" checked={productData.size.indexOf("2XL") != -1 ? true : false} />
                                <span style={{ marginLeft: "2vh" }}>3XL:</span><input onClick={handleAddSize} name="3XL" type="checkbox" checked={productData.size.indexOf("3XL") != -1 ? true : false} /><br></br>
                            </div>
                            <div className="input-container">
                                <h3>Product Discount:</h3>
                                <input value={productData.discount} onChange={handleSetData} type="number" name="discount" className="addproduct-input" />
                            </div>
                            <div className="input-container">
                                <h3>Product Price:</h3>
                                <input value={productData.price} onChange={handleSetData} type="number" name="price" className="addproduct-input" />
                            </div>
                            <div>
                                <button style={{width:"45vh",
    height:"8vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    background:"green",
    color:"white",
    marginTop:"4vh"
}} onClick={handleAddProduct}>Update Product</button>
                            </div>
                                </div>
                </div>
            </div>
        </>
    )
}