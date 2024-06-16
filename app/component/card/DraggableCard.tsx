"use client"
import { useEffect } from "react"
import "@/app/css/component.css"
import "@/app/css/productdetail.css"
export default function DraggableCard({index,data,setActiveCard,section,onDeleteCard}:{index:number,section:number,data:string,setActiveCard:any,onDeleteCard:any}){

    return (
        <span className="product-minimal" style={{margin:"1vh auto",width:"50vh"}}>             <div className="showcase-container" draggable={section == 1 ? true : false} onDoubleClick={(e)=>onDeleteCard(index,section)}
        onDragStart={(e)=>setActiveCard(index)} onDragEnd={(e)=>setActiveCard(null)} >
            
            <div className="showcase">
      
              <a href="#" className="showcase-img-box">
                <img src={data.img} alt="running & trekking shoes - white" className="showcase-img"
                  width="70"/>
              </a>
      
              <div className="showcase-content">
      
                <a href="#">
                  <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                </a>
      
                <a href="#" className="showcase-category">Sports</a>
      
                <div className="price-box">
                  <p className="price">$49.00</p>
                  <del>$15.00</del>
                </div>
      
              </div>
              </div>
      
            </div>
            </span>

    )
}