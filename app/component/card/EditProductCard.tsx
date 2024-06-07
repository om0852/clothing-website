export default function EditProductCard({data}:any){
    return(
        <div className="card" style={{width:"18rem"}}>
  <img src={data.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href="#" className="btn btn-primary">Update</a>
  </div>
</div>
    )
}