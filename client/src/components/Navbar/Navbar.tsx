import React from 'react'

import NavbarCollapse from './Navbar-collapse/NavbarCollapse';
import NavbarTop from './Navbar-top/NavbarTop';

import './Navbar.scss';


export default function Navbar() {
  const sidebarToggle = false

  return (
    <div>
      <div>
        <NavbarTop/>
        <div className="nav-spacer-util"></div>
      </div>
      <div>
        {sidebarToggle && <NavbarCollapse/>}
      </div>
    </div>
  )
}
