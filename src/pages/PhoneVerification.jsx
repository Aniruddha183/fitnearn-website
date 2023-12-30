import React from "react";
import { useState,useEffect,useRef } from "react";
import "./SignUp.css";
import InputBox from "../components/InputBox";
import { auth } from "../Firebase";
import {  signInWithPhoneNumber,RecaptchaVerifier} from "firebase/auth";


import {Link,useNavigate} from "react-router-dom"

const PhoneVerification = () => {


    const navigate= useNavigate()

     //phone authectication
     const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const signUpWithPhone = () => {
    const appVerifier = new RecaptchaVerifier(auth,"recaptcha-container", {
      size: "invisible",
    });

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });
  };

  const verifyCode = () => {
    navigate("/home");
    const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);

    auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Phone authentication successful
        console.log("Phone Auth successful:", result);
        // Perform necessary actions after successful phone authentication
        // For example, navigate to the home page
        navigate("/home");
      })
      .catch((error) => {
        console.error("Phone Auth error:", error);
      });
  };
  return (
    <div style={{margin:"100px 0px 0px 500px "}}>     <InputBox
    title="Phone Number"
    placeholder="Your phone number with +91"
    value={phoneNumber}
    type="tel"
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  <div id="recaptcha-container"></div>
  <button style={{width:"250px",marginLeft:"70px"}}  onClick={signUpWithPhone}>Sign Up with Phone</button>
  <InputBox
    title="Enter Verification Code"
    placeholder="Verification code"
    value={verificationCode}
    type="text"
    onChange={(e) => setVerificationCode(e.target.value)}
  />
  <button style={{width:"150px"}} onClick={verifyCode}>Verify Code</button></div>
  )
}

export default PhoneVerification