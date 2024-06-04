import "../css/component.css"


export default function Header(){
    return(
        <header className="header" data-header>
    <div className="container">

      <div className="overlay" data-overlay></div>

      <a href="#" className="logo">
        <img src="./assets/images/logo.svg" width="160" height="30" alt="Footcap logo"/>
      </a>

      <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
      </button>

      <nav className="navbar" data-navbar>

        <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
        </button>

        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" width="190" height="30" alt="Footcap logo"/>
        </a>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">About</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Products</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Shop</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Blog</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>

        </ul>

        <ul className="nav-action-list">

          <li>
            <button className="nav-action-btn">
            <img width="30" height="30" src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1"/>
              <span className="nav-action-text">Search</span>
            </button>
          </li>

          <li>
            <a href="#" className="nav-action-btn">
            <img width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/person-male--v2.png" alt="person-male--v2"/>
              <span className="nav-action-text">Login / Register</span>
            </a>
          </li>

          <li>
            <button className="nav-action-btn">
            <img width="30" height="30" src="https://img.icons8.com/ios/30/like--v1.png" alt="like--v1"/>
              <span className="nav-action-text">Wishlist</span>

              <data className="nav-action-badge" value="5" aria-hidden="true">5</data>
            </button>
          </li>

          <li>
            <button className="nav-action-btn">
            <img width="30" height="30" src="https://img.icons8.com/ios/30/bag-front-view.png" alt="bag-front-view"/>              <data className="nav-action-text" value="318.00">Basket: <strong>$318.00</strong></data>

              <data className="nav-action-badge" value="4" aria-hidden="true">4</data>
            </button>
          </li>

        </ul>

      </nav>

    </div>
  </header>

    )
}