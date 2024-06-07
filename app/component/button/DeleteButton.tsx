export default function DeleteButton({productId}:any){
    const handleDeleteProduct=async()=>{
        const res = await fetch(`http://localhost:3000/api/edit/deleteProduct`, {
            method: "POST",
            headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:productId}),
    });
        const response=await res.json();
        if(response.status==200){
            alert("delete successfully");
        }
        else{
            alert("delete unsuccessfully");

        }
    }
    return(
        <button style={{width:"20vh",height:"7vh",background:"red",borderRadius:"1vh",color:"white"}} onClick={handleDeleteProduct}>Delete</button>
    )
}