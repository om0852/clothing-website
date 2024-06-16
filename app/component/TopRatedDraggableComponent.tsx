"use client"
import { act, useEffect, useState } from "react";
import CardSection from "./CardSection";
import { ToastContainer, toast } from 'react-toastify';


export default function DraggableComponent(){
    const [myTask2,setMyTask2]=useState<string[]>([]);
    const [activeCard,setActiveCard]=useState<any>(null);
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
    const [myTask,setMyTask]=useState<[]>([]);
const fetchProductData=async()=>{
    
    const res = await fetch(`http://localhost:3000/api/edit/retrivenewarrival`, {
        method: "POST",
        headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});
    const response=await res.json();
    setMyTask(response.data)
    setMyTask2(response.data2)
    if(response.status==200){
    }
}
useEffect(()=>{
    fetchProductData()
},[])
    const onDropHandle=(position:number,section:number)=>{
        console.log(position,activeCard,section)
if(section==1){
    const updatedata=[...myTask];
    updatedata.splice(position,0,myTask[activeCard]);
    updatedata.splice(activeCard+1,1);
    setMyTask(updatedata)

}
else{
    const updatedata=[...myTask];
    const updatedata2=[...myTask2];
if(position==0){
    updatedata2.splice(position,0,myTask[activeCard]);
    
    }
    else{
    updatedata2.splice(position,0,myTask[activeCard]);

}
    updatedata.splice(activeCard,1);
    setMyTask(updatedata)
    setMyTask2(updatedata2)

}
    }
    const onDeleteCard=(index:number,section:number)=>{
        if(section==2){
         
    const updatedata=[...myTask];
    const updatedata2=[...myTask2];
    updatedata.push(updatedata2[index]);   
    updatedata2.splice(index,1)
    setMyTask(updatedata);
    setMyTask2(updatedata2)
        }

    }
    const uploadTrending=async()=>{
        let idArr=[];
for (let i=0;i<myTask2.length;i++){
idArr.push(myTask2[i]._id);

}
const res = await fetch(`http://localhost:3000/api/edit/newarrival`, {
    method: "POST",
    headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
},
body: JSON.stringify({id:idArr}),
});
const response=await res.json();
if(response.status==200){
    toast.success('Trending Page Updated Successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        }
        else{
            toast.error('Something Went Wrong!', {
                position: "top-center",
                autoClose: 1000,
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
<div style={{display:"flex"}}>
      <CardSection section={1} setProductData={setMyTask} uploadTrending={uploadTrending} onDeleteCard={onDeleteCard} onDropHandle={onDropHandle} productData={myTask} setActiveCard={setActiveCard}/>
      <CardSection section={2} uploadTrending={uploadTrending} setProductData={setMyTask} onDeleteCard={onDeleteCard} onDropHandle={onDropHandle} productData={myTask2} setActiveCard={setActiveCard}/>
</div>

</>

    )
}