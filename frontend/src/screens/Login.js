import React, {useState} from 'react'
import '../styles/Login.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
function Login() {  

const [showPass,setshowPass]= useState(false);    
    return (
        <div class="rside">
      <div class= "lside">
       
      </div>
        
          <form method="post">
            <h1>Log in</h1>
            <p><p1>Sign in to</p1> your FinCon Account!!</p>
              <div class="txtfield">
                    <input type="text" required/>
                    <span></span>
                    <label>Email adress</label>
              </div>
             
              <div class="txtfield1">
                 <input type={showPass ?"text":"password" }required/>
                    <span></span>
                 <label>Password</label>
                 </div>
                 <div class="passwordicon" onClick={()=>{if(showPass == true){setshowPass(false)}else {setshowPass(true)}}}> 
                 {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              </div>
              <div id="general1">
             <div class="signuplink">
                Don't have an account? <a href="#">Signup</a>
            </div>
        <input type="submit" value="Login"/>
        </div>

              
             
          </form>
     </div>
    )
}

export default Login
