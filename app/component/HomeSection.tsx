"use client"
import { useEffect, useState } from "react";
import TrendingCard from "./card/TrendingCard";
export default function HomeSection(){
  const [productData,setProductData]=useState<[]>([]);
  const [productData1,setProductData1]=useState<[]>([]);
  useEffect(()=>{
    fetchProductData();
  },[])
  const fetchProductData=async()=>{
    
    const res = await fetch(`http://localhost:3000/api/fetch/trending`, {
        method: "POST",
        headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});
    const response=await res.json();
    if(response.status==200){
      setProductData(response.data)
      console.log(response.data2)
      setProductData1(response.data2)
    }
}
    return (


          <div className="product-minimal">

            <div className="product-showcase">

              <h2 className="title">New Arrivals</h2>

              <div className="showcase-wrapper has-scrollbar">

                <div className="showcase-container">
{
  productData1.map((data,index)=>{
    return(
<>
      <TrendingCard data={data}/>
</>
    )
  })
}
                
                
                </div>

              </div>

            </div>

            <div className="product-showcase">
            
              <h2 className="title">Trending</h2>
            
              <div className="showcase-wrapper  has-scrollbar">
            
                <div className="showcase-container">
            
{
  productData.map((data)=>{
    return(
      <>
      <TrendingCard data={data}/>
      </>
    )
  })
}                </div>
            
              </div>
            
            </div>

            <div className="product-showcase">
            
              <h2 className="title">Top Rated</h2>
            
              <div className="showcase-wrapper  has-scrollbar">
            
                <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Watches</a>
            
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$34.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jewellery-3.jpg" alt="silver deer heart necklace" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Jewellery</a>
            
                      <div className="price-box">
                        <p className="price">$84.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/perfume.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Perfume</a>
            
                      <div className="price-box">
                        <p className="price">$42.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/belt.jpg" alt="men's leather reversible belt" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Belt</a>
            
                      <div className="price-box">
                        <p className="price">$24.00</p>
                        <del>$10.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
                <div className="showcase-container">
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">platinum Zircon Classic Ring</h4>
                      </a>
            
                      <a href="#" className="showcase-category">jewellery</a>
            
                      <div className="price-box">
                        <p className="price">$62.00</p>
                        <del>$65.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Smart watche Vital Plus</h4>
                      </a>
            
                      <a href="#" className="showcase-category">Watches</a>
            
                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">shampoo conditioner packs</h4>
                      </a>
            
                      <a href="#" className="showcase-category">cosmetics</a>
            
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                  <div className="showcase">
            
                    <a href="#" className="showcase-img-box">
                      <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                        width="70"/>
                    </a>
            
                    <div className="showcase-content">
            
                      <a href="#">
                        <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                      </a>
            
                      <a href="#" className="showcase-category">jewellery</a>
            
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
            
                    </div>
            
                  </div>
            
                </div>
            
              </div>
            
            </div>

          </div>



    )
}