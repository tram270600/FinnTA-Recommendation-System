import React, {useState} from 'react'
import '../styles/Login.css'
import {useHistory, Link} from 'react-router-dom'
import axiox from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
function Login() {  
const [username,setUsername]= useState("");
const [password,setPassword]= useState("");
const [showPass,setshowPass]= useState(false);
const [error, setError]= useState("");  
let history = useHistory();

const login = (e) => {
  e.preventDefault();
  axiox
    .post("http://localhost:5001/api/auth/login", {
      username,
      password,
    })
    .then((response) => {
      console.log("response", response);
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: response.data.access_token,
        })
      );
      setError("");
      setUsername("");
      setPassword("");

      history.push("/");
    })
    .catch((error) => setError(error.response.data.message));
};
    return (
        <div className="rside">
      <div className= "lside">
      
      </div>
        
          <form onSubmit={login}>
            <h1>Log in</h1>
            <p><p1>Sign in to</p1> your FinCon Account!!</p>
               
              <div className="txtfield">
                    <input type="text" required 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value)}/>
                    <span></span>
                    <label>Username</label>

              </div>
             
              <div className="txtfield1">
                 <input type={showPass ?"text":"password" } required  
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}/>
                    <span></span>
                 <label>Password</label>
                 </div>
                 <div className="passwordicon" onClick={()=>{if(showPass == true){setshowPass(false)}else {setshowPass(true)}}}> 
                 {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              </div>
              
              <div id="general1">
             <div className="signuplink">
                Don't have an account? <Link to="/sign-up">Signup</Link>
            </div>
        <input type="submit" value="Login"/>
        </div> 
       
        {error && <p2 style={{
          color:"red",
           position:"absolute",
           top:"580px", width:"500px", left:"15vw"
           }}>{error}</p2>}
            
          </form>
     </div>
    )
}

export default Login
