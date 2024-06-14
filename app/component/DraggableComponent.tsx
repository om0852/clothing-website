"use client"
import { act, useEffect, useState } from "react";
import CardSection from "./CardSection";

export default function DraggableComponent(){
    const [myTask,setMyTask]=useState<string[]>(['1','2','3']);
    const [myTask2,setMyTask2]=useState<string[]>(['4','5','6']);
    const [activeCard,setActiveCard]=useState<any>(null);
    useEffect(()=>{
console.log(activeCard)
    },[activeCard]);
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
    updatedata2.splice(position-1,0,myTask[activeCard]);

}
    updatedata.splice(activeCard,1);
    setMyTask(updatedata)
    setMyTask2(updatedata2)

}
    }
    return(
<>
<div style={{display:"flex"}}>
      <CardSection section={1} onDropHandle={onDropHandle} productData={myTask} setActiveCard={setActiveCard}/>
      <CardSection section={2} onDropHandle={onDropHandle} productData={myTask2} setActiveCard={setActiveCard}/>
</div>

</>

    )
}