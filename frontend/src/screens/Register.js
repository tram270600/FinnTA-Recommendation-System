import React, {useState} from 'react'
import '../styles/Signup.css'
import axiox from "axios";
import {useHistory, Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
function Register() {
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [gender,setGender]= useState("");
  const [role,setRole]= useState("");
  const [error, setError]= useState("");  
  let history = useHistory();


  const [showPass,setshowPass]= useState(false);    
  const [showconfirmPass,setshowconfirmPass]= useState(false);    

const register = (e) => {
  e.preventDefault();
  axiox.post("http://localhost:5001/api/auth/register", 
  {username,
  email,
  phone,
  password,
  gender,
  role,

    }).then((response)=> {
      console.log("response", response)
      localStorage.setItem("login", JSON.stringify({
     userLogin: true,
      token: response.data.access_token,
      }));
    setError("");
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setGender();
    setRole();
     history.push("/login");
    }).catch(error =>setError(error.response.data.message));
  };
    return (
       <div>
         <div id="getstarted">Get started</div>
<div id="intro"><span>Sign up</span> to our website and start to explore your unique style today !</div>
<div class="center">
      <form onSubmit={register}>
  
        <div class="txt_field">
          <input type="text" required
           value={username} 
           onChange={(e)=> setUsername(e.target.value)}/>
          <span></span>
          <label>Username</label>
        </div>
        
          <div class="txt_field">
          <input type="text" required
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>
          <span></span>
          <label>Email</label>
        </div>
          
          <div class="txt_field">
          <input type="text" required
          value={phone} 
          onChange={(e)=> setPhone(e.target.value)}/>
          <span></span>
          <label>Phone number</label>
        </div>
          
        <div class="txt_field">
          <input type={showPass ?"text":"password" }required
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="password1" onClick={()=>{if(showPass == true){setshowPass(false)}else {setshowPass(true)}}}> 
                 {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        </div>
          <div class="txtfield_1">
          <input type={showconfirmPass ?"text":"password" } required/>
          <span></span>
          <label>Confirm Password</label>  
        </div>
        <div class="confirm"  onClick={()=>{if(showconfirmPass == true){setshowconfirmPass(false)}else {setshowconfirmPass(true)}}}> 
                 {showconfirmPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}

          {error && <p2 style={{
          color:"red",
           position:"absolute",
           top:"580px", width:"500px", left:"15vw"
           }}>{error}</p2>}

        </div>
          <div id="general">
          <div class="signup_link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
        <input type="submit" value="Learn More"/>
        </div>
      </form>
    </div>
    
    <div id="rightside">
    <div id="sex">Sex</div>
    <div id="button">

        <input type="radio" name="gender" value={gender =="male"} onChange={(e)=> setGender(e.target.value)}/>
        <label for="male"></label>
        <span>Male</span>
        <input type="radio" name="gender" value={gender =="female"} onChange={(e)=> setGender(e.target.value)}/>
        <label for="female"></label>
        <span>Female</span>
    </div>
    <div class="rect1">
      <button class="button" type="button" value={role == "shop"} onChange={(e)=> setRole(e.target.value)}><img src={process.env.PUBLIC_URL + `/Images/shop 1.png`} /></button>
    </div>
    <div class="rect2">
      <button class="button" type="button" value={ role == "customer"} onChange={(e)=> setRole(e.target.value)}> <img src={process.env.PUBLIC_URL + `/Images/take-away.png`} /></button>
      </div>
      </div>
      </div>
    );
    }
export default Register