"use client"
import { useEffect, useState } from "react"
import DraggableCard from "./card/DraggableCard";
import DropArea from "./DropArea";

export default function DraggableComponent(){
    const [myTask,setMyTask]=useState<string[]>(['om','om','om']);
    const [activeCard,setActiveCard]=useState<any>(null);
    useEffect(()=>{
console.log(activeCard)
    },[activeCard])
    return(
<>
<div style={{display:"flex"}}>
    <div style={{width:"40%", height:"100vh",background:"red"}}>
    <DropArea/>
        {myTask.map((data,index)=>{
            return (
                <>
                <DraggableCard index={index} setActiveCard={setActiveCard}/>
                <DropArea/>
                </>
            )
        })}
    </div>
    <div style={{width:"40%", height:"100vh",background:"blue"}}></div>
    <div style={{width:"40%", height:"100vh",background:"black"}}></div>
</div>

</>

    )
}