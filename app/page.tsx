"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./component/Header";

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
  </div>  
  );
}
