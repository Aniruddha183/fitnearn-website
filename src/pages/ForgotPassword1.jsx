import React from 'react'
import girl from "../assets/girl.png"
import "./ForgotPassword1.css"
import InputBox from '../components/InputBox'
const ForgotPassword1 = () => {
  return (
    <div style={{display:"flex"}}>
        <div className="girl-img">
            <img src={girl} alt="" />
        </div>

        <div className="form1">
        <h1 style={{color:"#5f2ded"}}>Forgot password</h1>
        <InputBox title="Enter your email" placeholder=" Enter Your Email"/>


            <div className="enter-otp" style={{display:"flex",marginTop:"25px "}}>
                <span>Enter OTP</span>
               <input type="text" className='square-boxes'/> 
               <input type="text" className='square-boxes'/> 
               <input type="text" className='square-boxes'/>
                <input type="text" className='square-boxes'/>
            </div>
                <div style={{display:"flex",fontSize:"12px"}}>
                <span style={{fontSize:"16px",marginLeft:"50px"}}>Didn’t receive OTP ?</span>
                <span style={{fontSize:"16px",marginLeft:"120px"}}>Resend OTP</span>
                </div>
            <button>Continue</button>

            <h6 style={{ fontSize: "16px",textAlign:"center",marginLeft:"20px" }}>
                    Already have an account?
              <span style={{ color: "blue" ,fontSize: "16px",textAlign:"center" }}> Login</span>
            </h6>
        </div>
    </div>
  )
}

export default ForgotPassword1