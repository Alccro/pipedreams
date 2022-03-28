import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'

function NavBar() {
  return (
    <>
      <nav>
        <div id='navBar'>
          <NavLink className='nav' to="/">Home</NavLink>
          <NavLink className='nav' to="/about">About</NavLink>
          <NavLink className='nav' to="/inspiration">Inspiration</NavLink>
          <NavLink className='nav' to="/team">Meet the Team</NavLink>
          <NavLink className='nav' to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar