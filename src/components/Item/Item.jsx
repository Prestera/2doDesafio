import React from 'react'
import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="producto">
        <img src={producto.img} alt="imagen" />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Marca: {producto.marca}</p>
            <p>Precio: {producto.precio}</p>
            <p>Año: {producto.año}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
        
    </div>
  )
}

export default Item