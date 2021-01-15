import React, { useState } from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import logo from '../../../assets/logo/tuck-logo.svg';

export default function NavbarTop() {
  const iconSize: number = 36;
  const [loggedIn] = useState(false);

  return (
    <div className="nav">
      <div className="user-img">
        <FaUserCircle size={iconSize}/>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Tuck" className="logo"/>
      </div>
      <div className="search">
        {
          loggedIn ?
          <FaSearch size={iconSize}/> :
          <button className="sign-in">Log In</button>
        }
      </div>
    </div>
    
  )
}
