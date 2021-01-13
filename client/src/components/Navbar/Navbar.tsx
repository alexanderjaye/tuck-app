import React from 'react';
import './Navbar.scss';
import { FaBars, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const iconSize: number = 36;

  return (
    <div className="nav">
      <div className="collapse">
        <FaBars size={iconSize} color="black"/>
      </div>
      <h1>Tuck</h1>
      <div className="search">
        <FaSearch size={iconSize} color="black"/>
      </div>
      
    </div>
  )
}
