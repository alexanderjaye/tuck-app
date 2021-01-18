import './Navbar.scss';


import React, { useState } from 'react';
import { FaBook, FaSearch } from "react-icons/fa";
import logo from '../../assets/logo/tuck-logo.svg';
import { Link } from 'react-router-dom';

export default function NavbarTop() {
  const iconSize: number = 32;
  const [loggedIn] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = (): void => {
    //TODO add x+y check for below code (if low on page && !isSearching, just scroll to top)
    setIsSearching(!isSearching);
    if (!isSearching) window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  return (
  <div className="nav-container">
    <div className="nav">
      <div className="bottom-line"></div>
      <div className="user-img">
        {
          loggedIn ?
          <FaBook size={iconSize}/> :
          null
        }
      </div>
      <div className="logo-container">
        <img src={logo} alt="Tuck" className="logo"/>
        <h3 className="tag one">Open Source Recipes.</h3>
        <h3 className="tag two">No More Leftovers.</h3>
      </div>
      <div className="search-icon" onClick={handleSearchClick}>
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
    {
      isSearching &&
      <div className="search-container">
        <div className="search-box">
          <form>
            <select name="searchtype" id="variants">
              <option value="byName">By Name</option>
              <option value="byIng">By Ingredient</option>
            </select>
            <input type="text" placeholder="Search All Recipes"></input>
            <FaSearch size={26}/>
          </form>
        </div>
      </div>
    }
  </div>
  )
}
