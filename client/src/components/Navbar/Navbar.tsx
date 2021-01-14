import React from 'react'

import NavbarCollapse from './Navbar-collapse/NavbarCollapse';
import NavbarTop from './Navbar-top/NavbarTop';

import './Navbar.scss';


export default function Navbar() {
  return (
    <div>
      <div>
        <NavbarTop/>
      </div>
      <div>
        <NavbarCollapse/>
      </div>
    </div>
  )
}
