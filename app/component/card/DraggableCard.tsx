export default function DraggableCard({index,setActiveCard}:{index:number,setActiveCard:any}){
    return (
        <div draggable onDragStart={(e)=>setActiveCard(index)} onDragEnd={(e)=>setActiveCard(null)} style={{width:"40vh",height:"40vh",background:"green"}}>{index}</div>
    )
}