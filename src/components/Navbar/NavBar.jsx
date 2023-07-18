import React, { useState } from 'react';

import img from "../Img/escudo.png";
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <Link  to="/" className="logo">
        <img src={img} alt="escudo" width={100}/>
      </Link>
      <h4 className="somos"> Desde 1889 Somos La Ciudad</h4>
      <ul className="menu">
      <li><Link className="menu-link" to="/">Inicio</Link></li>   
      <li onClick={toggleDropdown}><Link className="menu-link" to="/Productos">Productos</Link></li>  
       
        {showDropdown && (
          <ul className="menu">
          <li><Link className="menu-link" to="/Productos/Titular">Titular</Link></li>
          <li><Link className="menu-link" to="/Productos/Suplente">Suplente</Link></li>
          <li><Link className="menu-link" to="/Productos/Shorts">Shorts</Link></li> 
          </ul>
        )}
         <li><CartWidget /></li>
      </ul>
    </nav>
  );
};
export default NavBar;