export default function DraggableCard({index,data,setActiveCard}:{index:number,data:string,setActiveCard:any}){
    return (
        <div draggable  onDragStart={(e)=>setActiveCard(index)} onDragEnd={(e)=>setActiveCard(null)} style={{width:"30vh",height:"30vh",background:"green"}}>{data}</div>
    )
}