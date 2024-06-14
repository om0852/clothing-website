"use client"
import { act, useEffect, useState } from "react";
import CardSection from "./CardSection";

export default function DraggableComponent(){
    const [myTask,setMyTask]=useState<string[]>(['1','2','3']);
    const [activeCard,setActiveCard]=useState<any>(null);
    useEffect(()=>{
console.log(activeCard)
    },[activeCard]);
    const onDropHandle=(position:number)=>{
        console.log(position,activeCard)
if(position==-1){
    const updatedata=[...myTask];
    updatedata.unshift(myTask[activeCard]);
    updatedata.splice(activeCard,1);
    setMyTask(updatedata)

}
else{
    const updatedata=[...myTask];
    updatedata.splice(position,0,myTask[activeCard]);
    updatedata.splice(activeCard+1,1);
    setMyTask(updatedata)

}
    }
    return(
<>
<div style={{display:"flex"}}>
      <CardSection section={1} onDropHandle={onDropHandle} productData={myTask} setActiveCard={setActiveCard}/>
      <CardSection section={2} onDropHandle={onDropHandle} productData={myTask} setActiveCard={setActiveCard}/>
</div>

</>

    )
}