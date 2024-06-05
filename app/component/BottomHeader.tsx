import { useRouter } from "next/navigation";
import "../css/component.css";
export default function BottomHeader(){
    const router=useRouter();
        return(
            <div className="bottom-header-container">
            <div className="bottom-header">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/30/bag-front-view.png" alt="bag-front-view"/>     
            <img width="30" height="30" src="https://img.icons8.com/ios/30/like--v1.png" alt="like--v1"/>
            <img onClick={(e)=>{ alert("welcom");router.push("/page/profile")}} width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/person-male--v2.png" alt="person-male--v2"/>

            </div>
            </div>
        )
}