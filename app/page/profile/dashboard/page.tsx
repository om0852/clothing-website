"use client"
import { useRouter } from "next/navigation"

export default function Page(){
    const router = useRouter()
    return(
        <>
       <div style={{color:"black"}}>
        <div onClick={(e)=>{router.push("/page/profile/dashboard/addproduct")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
Add Product
        </div>
        <div onClick={(e)=>{router.push("/page/profile/dashboard/banneredit")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
            Banner Edit
        </div>
        <div onClick={(e)=>{router.push("/page/profile/dashboard/trendingedit")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
            Trending Edit
        </div>
        <div onClick={(e)=>{router.push("/page/profile/dashboard/newarrival")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
            New Arrival Edit
            
        </div>
        <div onClick={(e)=>{router.push("/page/profile/dashboard/topratededit")}} style={{width:"100%",height:"10vh",marginTop:"3vh",background:"red"}}>
            Top Rated Edit
        </div>
        </div> 
        </>
    )
}