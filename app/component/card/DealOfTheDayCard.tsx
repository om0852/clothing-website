export default function DealOfTheDayCard(){
    return(
        <div className="showcase-container">

        <div className="showcase">
          
          <div className="showcase-banner">
            <img src="./assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" className="showcase-img"/>
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
              <h3 className="showcase-title">shampoo, conditioner & facewash packs</h3>
            </a>

            <p className="showcase-desc">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum
              dolor dolor sit amet consectetur Lorem ipsum dolor
            </p>

            <div className="price-box">
              <p className="price">$150.00</p>

              <del>$200.00</del>
            </div>

            <button className="add-cart-btn">add to cart</button>

            <div className="showcase-status">
              <div className="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>

                <p>
                  available: <b>40</b>
                </p>
              </div>

              <div className="showcase-status-bar"></div>
            </div>

            <div className="countdown-box">

              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>

              <div className="countdown">

                <div className="countdown-content">

                  <p className="display-number">360</p>

                  <p className="display-text">Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">24</p>
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