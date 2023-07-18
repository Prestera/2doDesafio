import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const[titulo, setTitulo] = useState("productos");
  const categoria = useParams().categoria; 
  
    useEffect(() => {
      const productosRef = collection(db, "productos");
      getDocs(productosRef)
      .then((resp) => {
        console.log(resp);
      })
      
    }, [categoria])
    
    return (
      <div>
          <ItemList productos={productos} titulo={titulo}/>
      </div>
  )
}

export default ItemListContainer