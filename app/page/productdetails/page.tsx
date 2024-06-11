"use client"
import { useState } from "react";
import "../../css/productdetail.css";

export default function Page(){
    interface productSchema {
        img: string[],
        title: string,
        description: string,
        price: number,
        rating: [],
        size:string[],
        discount: number,
        productType: string
    }
    const [productData, setProductData] = useState<productSchema[]>([{
        img: [],
        title: "",
        description: "",
        price: 0,
        rating: [],
        size: [],
        discount: 0,
        productType: "All"
    }]);
        return(
        <>
        <div className="product-detail-container">
        <div className="product-detail-section">
<div className="product-images">
{productData.map((product, index) => (
                            <div key={index}>
                                {product.img.map((image, imgIndex) => (
                                    <img key={imgIndex} width={120} height={100} src={image} alt={`Product Image ${imgIndex}`} />
                                ))}
                            </div>
                        ))}


</div>
<div></div>
        </div>
        </div>
        </>
    )
}