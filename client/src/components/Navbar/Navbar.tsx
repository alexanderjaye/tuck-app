import './Navbar.scss';


import React, { useState } from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import logo from '../../assets/logo/tuck-logo.svg';
import { Link } from 'react-router-dom';

export default function NavbarTop() {
  const iconSize: number = 36;
  const [loggedIn] = useState(false);

  const handleSearchClick = () => {
    //redirect
  }

  return (
  <div className="nav">
    <div className="bottom-line"></div>
    <div className="user-img">
      {
        loggedIn ?
        null :
        <FaUserCircle size={iconSize}/>
      }
    </div>
    <div className="logo-container">
      <img src={logo} alt="Tuck" className="logo"/>
      <h3 className="tag one">Open Source Recipes.</h3>
      <h3 className="tag two">No More Leftovers.</h3>
    </div>
    <div className="search">
      {
        loggedIn ?
        <FaSearch size={iconSize} onClick={handleSearchClick}/> :
          <div className="sign-in-container">
            <Link to="/login"><button className="sign-in">Sign In</button></Link>
            <div className="bg-sign-in"></div>
          </div>
      }
    </div>
  </div>
  )
}
