"use client"
import { useEffect } from "react"

export default function DraggableCard({index,data,setActiveCard,section}:{index:number,section:number,data:string,setActiveCard:any}){

    return (
        <div draggable={section == 1 ? true : false}
        onDragStart={(e)=>setActiveCard(index)} onDragEnd={(e)=>setActiveCard(null)} style={{width:"30vh",height:"30vh",background:"green",margin:"1vh 0"}}>{data}</div>
    )
}