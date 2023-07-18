import React, { useContext } from "react";
//import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext"


const Carrito = () => {

  const{ carrito, precioTotal,vaciarCarrito } = useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  }

    return (
      <div className="container">
        <h1 className="main-title">Carrito  </h1>
        
        {
          carrito.map((prod)=> (
            <div key={prod.id}>
              <br />
              
              <h3>{prod.titulo}</h3>
              <><img className="img-carrito" src={prod.imagen} alt={prod.titulo}/> </>
              <p>Precio Unidad:$ {prod.precio} </p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>SubTotal:$ {prod.precio * prod.cantidad}</p>
            </div>
          ))
        }
        {
          carrito.length > 0 ?
          <> <h2>Precio Final: ${precioTotal()}</h2>
          <button className="agregar-al-carrito" onClick={handleVaciar}>Vaciar Carrito</button>
          </> :
          <h2>El carrito está vacio</h2>
        }
            
        </div>
    )
  }
  
  export default Carrito