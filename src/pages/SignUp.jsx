import React from "react";
import { useState,useEffect,useRef } from "react";
import "./SignUp.css";
import InputBox from "../components/InputBox";
import { auth,provider } from "../Firebase";
import { createUserWithEmailAndPassword,sendEmailVerification, signInWithPhoneNumber, } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
import Pincode from 'react-pincode';





const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [age, setAge] = useState();

  const [pincodeData, setPincodeData] = useState('');

  const navigate = useNavigate();
 



  
  


  //sign in with google
  const [value, setValue] = useState("");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate('/home')
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });



  //simple sign up
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        //send email confirmation
        sendEmailVerification(userCredential.user)
        navigate('/verify-email')


        const userData = {
          name,
          email,
          password, 
          phoneNumber,
          gender,
          address,
          city,
          state,
          pincode,
          age,

        };

        localStorage.setItem("userData", JSON.stringify(userData));


          //creating user in mongodb on signing up
        let result =  fetch("http://localhost:3000/api/users", {
          method: "post",
          body: JSON.stringify({
            name,
            email,
            password,
            phoneNumber,
            gender,
            address,
            city,
            state,
            pincode,
            age,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = result.json;
        localStorage.setItem("user", JSON.stringify(result));
        
      })
      
      .catch((error) => {
        console.log(error);
      });

  };


 

  return (
    <div style={{ display: "flex",marginLeft:"-80px" }}>
      <div className="signup-gif">
        <img
          src="https://s3-alpha-sig.figma.com/img/6730/daf4/8c1900d4c82b3ff04e1683d0d57efd85?Expires=1704067200&Signature=bFB0sNV2j4QU41J9uFFecmUi896DqeACVT9EKyWlk26P6LYlMxndM6LUV3oKjJmeZAgynt~tp~k1Vt1fFMZ0yk-H5ydipLv1c9TyH2zDdtyu4Ljw30xXkp8OENZvS0USexiI~B-WSPYB5b4-UpUWHp2WC9n9HeyMp~KHfoTd8uMzO9XiIcB2veFMu6CQPs0AlV0ZUQlRduU1MPvZDe~hJdGUA~b36mbnA3GgL8~aLNuxZi77LkX-R-mNcXXgGAajGtfOt-v4T1I377THt7gkTPi7YWKqw4t5xQZoHRGnMn7SfrhfQDCjjgkc5u0eiVY5cTZRqiisaOo9wKrTVE3SEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>

      <div className="form">
        <h1 style={{ color: "#5f2ded" }}>Create Your account</h1>
        <InputBox
          title="Name"
          placeholder=" Enter Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <InputBox
          title="Email address"
          placeholder=" Your Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <InputBox
          title="Enter Password"
          placeholder=" Your password"
          value={password}
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <br />
        
      <InputBox
  title="Enter Phone Number"
  type="number"
  pattern="[1-9]{1}[0-9]{9}"

  maxLength="10"
  placeholder="Enter mobile number"
  value={phoneNumber}
  
  onChange={(e) => setPhoneNumber(e.target.value)}
/>
<br />
<InputBox
  title="Gender"
  placeholder="Your Gender"
  type="text"
  value={gender}
  onChange={(e) => setGender(e.target.value)}
/>
<br />
<InputBox
  title="Enter your Age"
  placeholder="Your Age"
  type="number"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>


<br />
<InputBox
  title="Enter your Address"
  placeholder="Your Address"
  type="text"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
/>
<br />
<span style={{fontFamily:"Raleway",fontSize:"22px"}}>Enter Your Pincode</span>
<Pincode
        invalidError="Please check pincode"
        lengthError="Check length"
        getData={(data) => {
          setPincodeData(data)
          const { city, state ,pincode} = data;
          setCity(city);
          setState(state);
          setPincode(pincode)

     
        }}
      />

{/* <InputBox
  title="Enter your Pincode"
  placeholder="Your Pincode"
  type="number"
  value={pincode}
  onChange={(e) => {setPincode(e.target.value); {handlePincodeChange}}}
/>
<br />
<InputBox
  title="Enter your City"
  type="text"
  placeholder="Your City"
  value={city}
  onChange={(e) => {setCity(e.target.value);{handleCityChange}}}
/>
<br />
<InputBox
  title="Enter your State"
  placeholder="Your State"
  type="text"
  value={state}
  onChange={(e) => {setState(e.target.value);{handleStateChange}}}
/> */}




        <h6 style={{ marginTop: "10px", marginLeft: "0px" }}>
          Forgot passowrd?
        </h6>
        <svg
          style={{}}
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
        <span
          style={{
            fontSize: "15px",
            marginTop: "-17px",
            marginLeft: "22px",
            marginRight: "20px",
          }}
        >
          Remember me
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <button style={{marginLeft:"130px"}} onClick={signUp}>Sign Up</button>
          <small style={{ fontSize: "18px" }}>or</small>
         <Link to="/verify-phone"> <button className="google">Sign In usign Phone</button></Link>
          {value? <button className="google">Alredy sign in with google</button>: <button onClick={signInWithGoogle}className="google">Login with Google</button>}
         
          <h6
            style={{
              fontSize: "16px",
              textAlign: "center",
              marginLeft: "20px",
            }}
          >
            Already have an account?
            <Link to="/">
            <span
              style={{ color: "blue", fontSize: "16px", textAlign: "center" }}
            >
            
              Login
            </span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
