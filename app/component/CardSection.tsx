"use client"
import { useEffect } from "react";
import DropArea from "./DropArea"
import DraggableCard from "./card/DraggableCard"
import "@/app/css/drag.css"
export default function CardSection({productData,setActiveCard,onDropHandle,section}:any){
    
    return(
        <div className="card-section">
<div className="card-section-scroll">
{section==2 ? <DropArea section={section} onDropHandle={onDropHandle} index={0}/>:""}
{productData.map((data,index)=>{
return(

    <>
    {section==2 ? <DropArea section={section} onDropHandle={onDropHandle} index={index+1}/>:""}
    <DraggableCard section={section}  index={index} data={data} setActiveCard={setActiveCard}/>
    </>
)
})}

</div>
        </div>
    )
}