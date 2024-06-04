"use client"
import loginform from "../../img/Login & Registration Form.png"
import register from "../../img/register.svg"
import log from "../../img/log.svg"
import "../../css/login.css"
import { useEffect ,useRef, useState} from "react"
import { useRouter } from "next/navigation"

export default function Page() {

    const router =useRouter();
    interface logindata{
        username:string,password:string,email?:string
    }
    const [loginData,setLoginData]=useState<logindata>({username:"",password:"",email:""})
    const containerRef = useRef<HTMLDivElement>(null);
    const handleInputData=(e:any)=>{
        const name=e.target.name;
        const value=e.target.value;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    }
    
    const handleLogin=async(e:any)=>{
        e.preventDefault()
        const res = await fetch(`api/auth/login`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          });
            const response=await res.json();
            if(response.status==200){
                alert(response.error)
                router.push('/')

            }
            else{
                alert(response.error)
            
            }
    } 
    const handleSignUp=async(e:any)=>{
        e.preventDefault()
        const res = await fetch(`api/auth/signup`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          });
const response=await res.json();
if(response.status==200){
    alert("account cerate ");
    router.push('/')

}
else{
    alert("account not create ")

}
    } 
useEffect(()=>{
    
    function loader(){
       

            const container = containerRef.current;
            if (!container) return; // Guard clause to handle if container is null

            const sign_in_btn = container.querySelector<HTMLButtonElement>("#sign-in-btn");
            const sign_up_btn = container.querySelector<HTMLButtonElement>("#sign-up-btn");
    
            if (sign_up_btn && sign_in_btn) {
                sign_up_btn.addEventListener('click', () => {
                    container.classList.add("sign-up-mode");
                });
    
                sign_in_btn.addEventListener('click', () => {
                    container.classList.remove("sign-up-mode");
                });
            }

}
loader()
},[])
return(
<>
<div className="container" ref={containerRef}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input onChange={handleInputData} name="username" type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input onChange={handleInputData} name="password" type="password" placeholder="Password" />
            </div>
            <input onClick={handleLogin} type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>


          <form action="" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input onChange={handleInputData} name="username" type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input onChange={handleInputData} name="email" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input onChange={handleInputData} name="password" type="password" placeholder="Password" />
            </div>
            <input onClick={handleSignUp} type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">

        <div className="panel left-panel">
            <div className="content">
                <h3>New here?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                <button  className="btn transparent" id="sign-up-btn">Sign Up</button>
            </div>
            <img src={log.src} className="image" alt=""/>
        </div>

        <div className="panel right-panel">
            <div className="content">
                <h3>One of us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                <button className="btn transparent" id="sign-in-btn">Sign In</button>
            </div>
            <img src={register.src} className="image" alt=""/>
        </div>
      </div>
    </div>


</>
)

}