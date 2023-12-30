import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const VerifyEmail = () => {



    
  const navigate = useNavigate();

  useEffect(() => {
 
    const subscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          if (user.emailVerified) {
            navigate('/home');
          }
        }
      });
  
      return () => subscribe();
    }, [navigate]);

    
        const handleRefreshClick = () => {
          // Reloads the current page
          window.location.reload();
        };

  return (
    <div style={{margin:"158px 0px 0px 600px", width:"400px"}}>
      <h1>Email Verification</h1>
      <p>
        A verification email has been sent to your email address.
        Please check your inbox and follow the instructions to verify your email.
      </p>
      <h3>If not navigated automatically to home!</h3>
      <button style={{width:"150px"}} onClick={handleRefreshClick}>
      Click Here!
    </button>
    </div>
  );
};

export default VerifyEmail;
