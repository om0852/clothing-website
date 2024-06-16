export default function TrendingCard({data}:any){
    return (
        <div className="showcase">

        <a href="#" className="showcase-img-box">
          <img src={data.img} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
        </a>

        <div className="showcase-content">

          <a href="#">
            <h4 className="showcase-title">{data.title}</h4>
          </a>

          <a href="#" className="showcase-category">{data.description}</a>

          <div className="price-box">
            <p className="price">{data.price}</p>
            <del>{data.discount}</del>
          </div>

        </div>

      </div>

    )
}