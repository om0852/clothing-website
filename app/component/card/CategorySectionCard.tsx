export default function CategorySectionCard(){
    return(
        <div className="category-item">

            <div className="category-img-box">
              <img src="./assets/images/icons/dress.svg" alt="dress & frock" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Dress & frock</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

    )
}