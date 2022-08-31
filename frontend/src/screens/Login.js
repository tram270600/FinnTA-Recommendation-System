import React, {useEffect, useState} from 'react'
import '../styles/Login.scss'
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
useEffect(()=> {
  fetch('http://localhost:8000/users')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log("Fetch data Users", data[0].users);
  })
}, [])

const login = (e) => {
  // console.log("Ne", this.username, this.password);
  history.push("/");
  // e.preventDefault();
  // axiox
  //   .post("httlocalhost:5001/api/auth/login", {
  //     username,
  //     password,
  //   })
  //   .then((response) => {
  //     console.log("response", response);
  //     localStorage.setItem(
  //       "login",
  //       JSON.stringify({
  //         userLogin: true,  
  //         token: response.data.access_token,
  //       })
  //     );
  //     setError("");
  //     setUsername("");
  //     setPassword("");

  //     history.push("/");
  //   })
  //   .catch((error) => setError(error.response.data.message));
};

  return (
  <div className='login__content'>
    <div className='login__content__left'>
      <img src={process.env.PUBLIC_URL + `/images/LoginBackground.png`} alt="" height="434px" width="400px"/>
    </div>
    <div className='login__content__right'>
      <form onSubmit={login}>
        <div className='login__header'>Log in</div>
        <div className='login__description'><p1>Sign in to</p1> your FinnTa Account!!</div>
        <div className="txtfield">
          <input 
            type="text" 
            required 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}/>
            <span></span>
            <label>Username</label>
        </div>
        <div className='field__password'>
          <div className="txtfield1">
            <input type={showPass ?"text":"password" } required  
              value={password}
              onChange={(e)=> setPassword(e.target.value)}/>
            <span></span>
            <label>Password</label>       
          </div>
          <div className="field__password__icon" onClick={()=>{if(showPass == true){setshowPass(false)}else {setshowPass(true)}}}> 
            {showPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </div>
        </div>
        <div className='login__control'>
          <div className="sign-up__link">
              Don't have an account? <Link className='underline' to="/sign-up">Sign up</Link>
          </div>
          <button> Log in </button>
        </div> 
        {error && <p2 style={{
         color:"red",
          position:"absolute",
          top:"580px", width:"500px", left:"15vw"
          }}>{error}</p2>}
      </form>
    </div>
  </div>
  )
}

export default Login
