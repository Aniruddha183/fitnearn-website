import React, { useState } from "react";
import "./Login.css";
import login_img from "../assets/login_img.png";
import InputBox from "../components/InputBox";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link,useNavigate } from "react-router-dom"
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();




  const signIn = (e) =>{ e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate("/home")

    })
    .catch((error) => {
      console.log(error);

      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An error occurred. Please Check Email and Password");
      }
    });
  }
  return (
    <>
      <div className="login-page-hero">
        <div className="login-img">
          <img src={login_img} alt="" />
        </div>
     
        <div className="login-form">
          <h1>Login to your account</h1>

          <div className="inputs">
            <InputBox
              title="Enter your email or username"
              placeholder=" Enter Your Email"
              value ={email}
              onChange = {(e)=>setEmail(e.target.value)}
              type="email"
            />

            <span style={{ marginTop: "50px" }}>Password</span>

            <input
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              name=""
              id=""
              placeholder="   Enter your password"
            ></input>
               {/* Display error message if present */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* ... */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
            >
              <path
                d="M22.4353 7.19625C22.4025 7.12219 21.6084 5.36062 19.8431 3.59531C17.4909 1.24312 14.52 0 11.25 0C7.97999 0 5.00905 1.24312 2.65687 3.59531C0.891554 5.36062 0.093741 7.125 0.0646785 7.19625C0.0220346 7.29217 0 7.39597 0 7.50094C0 7.60591 0.0220346 7.70971 0.0646785 7.80562C0.097491 7.87969 0.891554 9.64031 2.65687 11.4056C5.00905 13.7569 7.97999 15 11.25 15C14.52 15 17.4909 13.7569 19.8431 11.4056C21.6084 9.64031 22.4025 7.87969 22.4353 7.80562C22.4779 7.70971 22.5 7.60591 22.5 7.50094C22.5 7.39597 22.4779 7.29217 22.4353 7.19625ZM11.25 13.5C8.36437 13.5 5.84343 12.4509 3.75655 10.3828C2.90028 9.53128 2.17179 8.56027 1.59374 7.5C2.17164 6.43963 2.90014 5.4686 3.75655 4.61719C5.84343 2.54906 8.36437 1.5 11.25 1.5C14.1356 1.5 16.6566 2.54906 18.7434 4.61719C19.6014 5.4684 20.3315 6.43942 20.9109 7.5C20.235 8.76188 17.2903 13.5 11.25 13.5ZM11.25 3C10.36 3 9.48995 3.26392 8.74993 3.75839C8.0099 4.25285 7.43313 4.95566 7.09253 5.77792C6.75194 6.60019 6.66282 7.50499 6.83646 8.37791C7.01009 9.25082 7.43867 10.0526 8.06801 10.682C8.69735 11.3113 9.49917 11.7399 10.3721 11.9135C11.245 12.0872 12.1498 11.9981 12.9721 11.6575C13.7943 11.3169 14.4971 10.7401 14.9916 10.0001C15.4861 9.26005 15.75 8.39002 15.75 7.5C15.7488 6.30691 15.2742 5.16303 14.4306 4.31939C13.587 3.47575 12.4431 3.00124 11.25 3ZM11.25 10.5C10.6566 10.5 10.0766 10.3241 9.58328 9.99441C9.08993 9.66476 8.70542 9.19623 8.47835 8.64805C8.25129 8.09987 8.19188 7.49667 8.30764 6.91473C8.42339 6.33279 8.70911 5.79824 9.12867 5.37868C9.54823 4.95912 10.0828 4.6734 10.6647 4.55764C11.2467 4.44189 11.8499 4.5013 12.398 4.72836C12.9462 4.95542 13.4148 5.33994 13.7444 5.83329C14.074 6.32664 14.25 6.90666 14.25 7.5C14.25 8.29565 13.9339 9.05871 13.3713 9.62132C12.8087 10.1839 12.0456 10.5 11.25 10.5Z"
                fill="#121212"
              />
            </svg>
          </div>
          <Link to="/forgotpassword">
          <h6 style={{ marginTop: "10px", marginLeft: "60px" }}>
            Forgot passowrd?
          </h6>
          </Link>
          <svg
            style={{ marginLeft: "60px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="17"
              height="17"
              rx="3.5"
              fill="white"
              stroke="#121212"
            />
          </svg>
          <span style={{ fontSize: "15px", marginTop: "-5px" }}>
            Remember me
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <button onClick={signIn}   type="submit" className="login-btn">Login</button>
            <small style={{ fontSize: "18px" }}>or</small>
           
            <h6 style={{ fontSize: "18px" }}>
              Dont have an account ?
               <Link to="/signup"><span style={{ color: "blue" }}> sign up</span></Link>
            </h6>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Login;
