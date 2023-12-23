import React from "react";
import profile1 from "../assets/profile1.png";
import "./Profile.css";
import InputBox from "../components/InputBox";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Profile = () => {
  
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



  useEffect(() => {

    // Fetch user data from local storage and set states
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setName(userData.name);     
      setEmail(userData.email);
      setPassword(userData.password);
      setPhoneNumber(userData.phoneNumber);
      setGender(userData.gender);
      setAddress(userData.address);
      setCity(userData.city);
      setState(userData.state);
      setPincode(userData.pincode);
      setAge(userData.age);

      // Set other user details states...
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/userId"); // Replace USER_ID with the actual user's ID
      const data = await response.json();
      setName(data.name);
      setEmail(data.email); 
      setPassword(data.password);
      setPhoneNumber(data.phoneNumber);
      setGender(data.gender);
      setAddress(data.address);
      setCity(data.city);
      setState(data.state);
      setPincode(data.pincode);
      setAge(data.age);// Update state with fetched user data
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:3000/api/users", {
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
    result = await result.json;
    localStorage.setItem("user", JSON.stringify(result));
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  return (
    <>
      <div className="profile-header">
        <img src={profile1} alt=""></img>
        <svg
          className="plus"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>plus-circle</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketch:type="MSPage"
            >
             
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-464.000000, -1087.000000)"
                fill="#000000"
              >
                
                <path
                  d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                  id="plus-circle"
                  sketch:type="MSShapeGroup"
                >
                  
                </path>
              </g>
            </g>
          </g>
        </svg>
        <h1>Hello, {name}</h1>
        <button onClick={fetchUserData}>
          Edit Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.3335 12H6.16016C6.2479 12.0005 6.33488 11.9837 6.4161 11.9505C6.49732 11.9173 6.5712 11.8685 6.6335 11.8067L11.2468 7.18667L13.1402 5.33333C13.2026 5.27136 13.2522 5.19762 13.2861 5.11638C13.3199 5.03514 13.3374 4.94801 13.3374 4.86C13.3374 4.77199 13.3199 4.68485 13.2861 4.60362C13.2522 4.52238 13.2026 4.44864 13.1402 4.38667L10.3135 1.52667C10.2515 1.46418 10.1778 1.41458 10.0965 1.38074C10.0153 1.34689 9.92817 1.32947 9.84016 1.32947C9.75215 1.32947 9.66502 1.34689 9.58378 1.38074C9.50254 1.41458 9.4288 1.46418 9.36683 1.52667L7.48683 3.41333L2.86016 8.03333C2.79838 8.09563 2.74949 8.1695 2.71632 8.25073C2.68314 8.33195 2.66632 8.41893 2.66683 8.50667V11.3333C2.66683 11.5101 2.73707 11.6797 2.86209 11.8047C2.98712 11.9298 3.15668 12 3.3335 12ZM9.84016 2.94L11.7268 4.82667L10.7802 5.77333L8.8935 3.88667L9.84016 2.94ZM4.00016 8.78L7.9535 4.82667L9.84016 6.71333L5.88683 10.6667H4.00016V8.78ZM14.0002 13.3333H2.00016C1.82335 13.3333 1.65378 13.4036 1.52876 13.5286C1.40373 13.6536 1.3335 13.8232 1.3335 14C1.3335 14.1768 1.40373 14.3464 1.52876 14.4714C1.65378 14.5964 1.82335 14.6667 2.00016 14.6667H14.0002C14.177 14.6667 14.3465 14.5964 14.4716 14.4714C14.5966 14.3464 14.6668 14.1768 14.6668 14C14.6668 13.8232 14.5966 13.6536 14.4716 13.5286C14.3465 13.4036 14.177 13.3333 14.0002 13.3333Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="two-forms">
        <div className="left-form">
          <h1 style={{ color: "#5F2DED" }}>General Details </h1>
          <InputBox
            title="Enter Name"
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <InputBox
            title="Enter email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <InputBox
            title="Enter password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <InputBox
            title="Enter phone Number"
            placeholder="Enter your number"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <InputBox
            title="Gender"
            placeholder="Your gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="right-form">
          <h1 style={{ color: "#5F2DED" }}>Contact Details </h1>
          <InputBox
            title="Address"
            placeholder="Enter your address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <InputBox
            title="City"
            placeholder="Your City"
            value={city}
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <InputBox
            title="State"
            type="text"
            placeholder="Your State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <br />
          <InputBox
            title="Pincode"
            placeholder="Pincode"
            type="number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <br />
          <InputBox
            title="Age"
            placeholder="Your age"
            type="numberx"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
        </div>
      </div>
      <div className="two-buttons">
        <button onClick={collectData}>Save Changes</button>
        <Link to="/"><button>Log Out</button></Link>
      </div>
    </>
  );
};

export default Profile;
