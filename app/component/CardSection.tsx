import DropArea from "./DropArea"
import DraggableCard from "./card/DraggableCard"
import "@/app/css/drag.css"
export default function CardSection({productData,setActiveCard,onDropHandle,section}:any){
    return(
        <div className="card-section">
<div className="card-section-scroll">
<DropArea onDropHandle={onDropHandle} index={0}/>
{productData.map((data,index)=>{
return(

    <>
    <DropArea section={section} onDropHandle={onDropHandle} index={index+1}/>
    <DraggableCard  index={index} data={data} setActiveCard={setActiveCard}/>
    </>
)
})}

</div>
        </div>
    )
}