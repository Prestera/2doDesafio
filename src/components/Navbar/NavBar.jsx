import React from 'react'
import img from "../Img/escudo.png";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link  to="/" className="logo"> 
        <img src={img} alt="escudo" width={100}/>
      </Link>
      
        <ul className="menu">
          <li><Link className="menu-link" to="/">Inicio</Link></li>
          <li><Link className="menu-link" to="/Productos">Productos</Link></li>
          <li><Link className="menu-link" to="/Productos/Titular">Titular</Link></li>
          <li><Link className="menu-link" to="/Productos/Suplente">Suplente</Link></li>
          <li><Link className="menu-link" to="/Productos/Shorts">Shorts</Link></li> 
        </ul>
    </nav>
  )
}

export default NavBar