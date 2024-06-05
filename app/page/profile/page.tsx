"use client"
import { useRouter } from "next/navigation"

export default function Page(){
    const router = useRouter()
    return(
        <>
       <div style={{color:"black"}}>
        <div onClick={(e)=>{router.push("/page/profile/dashboard")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
            DashBoard
        </div>
        </div> 
        </>
    )
}