import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const Login = () => {
    const [action] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {<div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder='Email ID'/>
        </div>}
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
      <div className={"submit"}
          onClick={()=>{window.open('/','Signup')}}>Signup</div>
        <div className={"submit"}
        onClick={()=>{window.open('/CE','Signup')}}>Login</div>
        </div>
    </div>
  )
}
export default Login;