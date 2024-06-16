"use client"
import { useState, useEffect } from "react";
import DropArea from "./DropArea";
import DraggableCard from "./card/DraggableCard";
import "@/app/css/drag.css";

export default function CardSection({
    productData,
    uploadTrending,
    onDeleteCard,
    setActiveCard,
    setProductData,
    onDropHandle,
    section
}:any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(productData);
useEffect(()=>{
console.log(productData)
    },[productData])
    useEffect(() => {
        setFilteredData(
         productData.filter(data => 
                data._id.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, productData]);

    return (
        <div className="card-section">
            <div className="card-section-scroll">
                {section === 1 && (
                    <input 
                    style={{width:"50%",height:"6vh",margin:"0 auto",marginTop:"2vh",border:"1px solid black"}}
                        type="text" 
                        name="search" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                )}
                {section === 2 && <DropArea section={section} onDropHandle={onDropHandle} index={0} />}
                {filteredData && filteredData.map((data, index) => (
                    <div key={index}>
                        <DraggableCard 
                            onDeleteCard={onDeleteCard} 
                            section={section} 
                            index={index} 
                            data={data} 
                            setActiveCard={setActiveCard} 
                        />
                        {section === 2 && <DropArea section={section} onDropHandle={onDropHandle} index={index + 1} />}
                    </div>
                ))}
                {section === 2 && (
                    <button
                        onClick={uploadTrending}
                        className="btn btn-primary"
                        style={{
                            width: "30vh",
                            display: "grid",
                            alignItems: "center",
                            margin: "0 auto"
                        }}
                    >
                        Upload
                    </button>
                )}
            </div>
        </div>
    );
}
