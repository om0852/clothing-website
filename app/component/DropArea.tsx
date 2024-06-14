"use client"
import "@/app/css/drag.css"
import { useEffect, useState } from "react"
export default function DropArea({onDropHandle,index,section}:{onDropHandle:any,index:number,section:number}){
    const [showDrop,setShowDrop]=useState<Boolean>(false);
    return (
        <>
        <section 
        onDragEnter={(e)=>{console.log(showDrop);setShowDrop(true)}}
        onDragLeave={(e)=>{console.log(showDrop);setShowDrop(false)}}
        onDrop={(e)=>{
            onDropHandle(index);
            setShowDrop(false);
        }}
        onDragOver={(e)=>{            
;            e.preventDefault()}}
        className={showDrop==false?"hide-drop":"drop-area"} >Drop Here</section>
        </>
    )
}
