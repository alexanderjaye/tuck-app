import React from 'react';
import { FaBars, FaSearch } from "react-icons/fa";
import logo from '../../../assets/logo/tuck-logo.svg';

export default function NavbarTop() {
  const iconSize: number = 36;

  return (
    <div className="nav">
      <div className="collapse">
        <FaBars size={iconSize} color="#eae100"/>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Tuck" className="logo"/>
      </div>
      <div className="search">
        <FaSearch size={iconSize} color="e9e7db"/>
      </div>
    </div>
    
  )
}
