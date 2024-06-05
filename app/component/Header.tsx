import { useRouter } from "next/navigation"
import "../css/component.css"


export default function Header(){
  const router =useRouter();
    return(
      <div className="header-main">

      <div className="header-container">

        <a href="#" className="header-logo">
          <img src="https://media.istockphoto.com/id/1417080439/photo/water-drop-splash-on-the-blue-background.jpg?s=1024x1024&w=is&k=20&c=tt1RQVN97eYLRMSPRbE7HPVZRf-cnQ6DX1R_po_hLJI=" alt="Anon's logo"  className="header-logo-img"/>
        </a>

        <div className="header-search-container">

          <input type="search" name="search" className="search-field" placeholder="Enter your product name..."/>

          <button className="search-btn" style={{background:"none"}}>
          <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>          </button>

        </div>

        <div className="header-user-actions">

          <button onClick={(e)=>{ router.push("/page/profile")}} className="action-btn">
          <img width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/person-male--v2.png" alt="person-male--v2"/>
          </button>

          <button className="action-btn">
          <img width="30" height="30" src="https://img.icons8.com/ios/30/like--v1.png" alt="like--v1"/>
            <span className="count">0</span>
          </button>

          <button className="action-btn">
          <img width="30" height="30" src="https://img.icons8.com/ios/30/bag-front-view.png" alt="bag-front-view"/>     
            <span className="count">0</span>
          </button>

        </div>

      </div>

    </div>

    )
}