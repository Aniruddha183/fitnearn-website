import React from 'react'
import girl from "../assets/girl.png"
import "./ForgotPassword.css"
import InputBox from '../components/InputBox'


const ForgotPassword = () => {
  return (
    <div style={{display:"flex"}}>
        <div className="girl-img">
            <img src={girl} alt="" />
        </div>

        <div className="form">
        <h1 style={{color:"#5f2ded"}}>Forgot password</h1>
        <InputBox title="Enter your email" placeholder=" Your Email" type="email"/>
     
            <button>Get OTP</button>

            <h6 style={{ fontSize: "16px",textAlign:"center",marginLeft:"20px" }}>
                    Already have an account?
              <span style={{ color: "blue" ,fontSize: "16px",textAlign:"center" }}> Login</span>
            </h6>
        </div>
    </div>
  )
}

export default ForgotPassword