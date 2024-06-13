"use client"
import "@/app/css/drag.css"
import { useEffect, useState } from "react"
export default function DropArea(){
    const [showDrop,setShowDrop]=useState<Boolean>(false);
    return (
        <>
        <section 
        onDragEnter={(e)=>{console.log(showDrop);setShowDrop(true)}}
        onDragLeave={(e)=>{console.log(showDrop);setShowDrop(false)}}
        className={showDrop==false?"hide-drop":"drop-area"} >Drop Here</section>
        </>
    )
}
