import Link from "next/link";
import DeleteButton from "../button/DeleteButton";

export default function EditProductCard({data}:any){
    return(
        <div className="card" style={{width:"18rem"}}>
  <img src={data.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <Link href={`/page/profile/dashboard/updateproduct?pid=${data._id}`} className="btn btn-primary">Update</Link>
    <DeleteButton productId={data._id}/>
  </div>
</div>
    )
}