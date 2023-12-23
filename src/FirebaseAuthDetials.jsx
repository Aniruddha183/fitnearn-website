import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase"
const FirebaseAuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null); 
      }
    });

    return () => {
      listen();
    };
  }, []);
  

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div>
      {authUser ? (
        <>
        <div style={{marginLeft:"820px"}}>
          <p style={{marginLeft:"70px"}}>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
          </div>
        </>
      ) : (
        <p style={{marginLeft:"950px"}}>Signed Out</p>
      )}
    </div>
  );
};
export default FirebaseAuthDetails;
