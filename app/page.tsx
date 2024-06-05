"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./component/Header";
import Slider from "./component/Slider";
import CategoryHeader from "./component/CategoryHeader";
import CategorySection from "./component/CategorySection";
import HomeSection from "./component/HomeSection";
import DealOfTheDay from "./component/DealOfTheDay";
import BottomHeader from "./component/BottomHeader";

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
if(localStorage.getItem("login")=="true"){

}else{
  router.push('/page/login')

}
  },[])
  return (
  <div>
<Header/>
<BottomHeader/>
<CategoryHeader/>
<Slider/>
<CategorySection/>
<HomeSection/>
<DealOfTheDay/>
  </div>  
  );
}
