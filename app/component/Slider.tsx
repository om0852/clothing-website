import { useEffect } from "react"
import "../css/component.css"
import loginimg from "../img/Login & Registration Form.png"
import Script from "next/script"
import Link from "next/link";
export default function Slider(){
    const filteredItems = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "camera",
          price: 200,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Phone",
          price: 100,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Laptop",
          price: 500,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Headephone",
          price: 40,
        },
        {
          id: 5,
          img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Keyboard",
          price: 140,
        },
        {
          id: 6,
          img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Gaming Mouse",
          price: 140,
        },
      ];
    
      const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 1000;
      };
    
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 1000;
      };
      return (
        <>
    
    <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">

          <div className="slider-item">

            <img src={loginimg.src} alt="women's latest fashion sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

          <div className="slider-item">

            <img src={loginimg.src} alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

          <div className="slider-item">

            <img src={loginimg.src} alt="new fashion summer sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

        </div>

      </div>

    </div>
       </>
    )
}