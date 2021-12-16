import React, {useState} from 'react'
import '../styles/Signup.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
function Register() {
  const [showPass,setshowPass]= useState(false);    
  const [showconfirmPass,setshowconfirmPass]= useState(false);    

    return (


     <div>
         <div id="getstarted">Get started</div>
<div id="intro"><span>Sign up</span> to our website and start to explore your unique style today !</div>
<div class="center">
      <form method="post">
  
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
          
          <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Email</label>
        </div>
          
          <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Phone number</label>
        </div>
          
        <div class="txt_field">
          <input type={showPass ?"text":"password" }required/>
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
      
        </div>
          <div id="general">
          <div class="signup_link">
          Don't have an account? <a href="#">Signup</a>
        </div>
        <input type="submit" value="Learn More"/>
        </div>
      </form>
    </div>
    
    <div id="rightside">
    <div id="sex">Sex</div>
    <div id="button">
     
        <input type="radio" name="gender"/>
        <label for="male"></label>
        <span>Male</span>
        <input type="radio" name="gender"/>
        <label for="female"></label>
        <span>Female</span>
      
    </div>
    <div class="rect1">
      <button class="button" type="button"><img src={process.env.PUBLIC_URL + `/Images/shop 1.png`} /></button>
    </div>
    <div class="rect2">
      <button class="button" type="button"> <img src={process.env.PUBLIC_URL + `/Images/take-away.png`} /></button>
      </div>
      </div>
      </div>
    )
}

export default Register
