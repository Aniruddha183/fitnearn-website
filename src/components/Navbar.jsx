import React from 'react'
import logo from "../assets/Ellipse_2.png"
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';
import profile from "../assets/profile.png"
const Navbar = () => {

  const location = useLocation();


  const renderNavList = () => {
    if (location.pathname === '/' || location.pathname === '/signup'|| location.pathname === '/forgotpassword'|| location.pathname === '/forgotpassword1') {
      return null; // If on login or signup page, return null to hide nav list
    } else {
      return (
        <div className="nav-list">
          <h3><Link to="/home">Home</Link></h3>
          <h3><Link to="/about">About</Link></h3>
          <h3><Link to="/profile">My profile</Link></h3>
          <Link to="/profile"><img src={profile} alt="" /></Link>
        </div>
      );
    }
  };


  return (
    <div className='nav'>
      <div className="logo-img">
        <img src={logo} alt="" />
        </div>
        <h1 className='nav-font'>Archana’s Classes</h1>
        

        {renderNavList()}
        {/* <div className="nav-list">
        <h3> <Link to="/home">Home</Link></h3>
            <h3><Link to="/about">About</Link></h3>
            <h3><Link to="/profile">My profile</Link></h3>
         
            <Link to="/profile"> <img src={profile} alt="" /></Link>
        </div> */}
    </div>
  )
}

export default Navbar