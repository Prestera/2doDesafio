import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
    const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <div>
        <Link className="menu-link" to="/Carrito">🛒
        <span className="numerito"> {cantidadEnCarrito()}</span>
        </Link>

    </div>
  )
}

export default CartWidget