export default function DealOfTheDayCard({data}:any){
    return(
        <div className="showcase-container">

        <div className="showcase">
          
          <div className="showcase-banner">
            <img src={data.img} alt="shampoo, conditioner & facewash packs" className="showcase-img"/>
          </div>

          <div className="showcase-content">
            
            <div className="showcase-rating">
              {/* <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon> */}
            </div>

            <a href="#">
              <h3 className="showcase-title">{data.title}</h3>
            </a>

            <p className="showcase-desc">
              {data.description}
            </p>

            <div className="price-box">
              <p className="price">{data.price}</p>

              <del>${data.discount}</del>
            </div>

            <button className="add-cart-btn">add to cart</button>

          
            <div className="countdown-box">

              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>

              <div className="countdown">

                <div className="countdown-content">

                  <p className="display-number">{data.date[0].split("-")[2]}</p>

                  <p className="display-text">Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">{data.date[0].split("-")[1]}</p>
                  <p className="display-text">Months</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">12</p>
                  <p className="display-text">Hours</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">59</p>
                  <p className="display-text">Min</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">00</p>
                  <p className="display-text">Sec</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    )
}