import { useEffect, useState } from "react";
import {pedirData} from "../../helpers/pedirData";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const[titulo, setTitulo] = useState("productos");
  const categoria = useParams().categoria; 
  
    useEffect(() => {
      pedirData()
      .then((res)=>{
        if(categoria){
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTitulo(categoria);
        }else {
          setProductos(res);
          setTitulo("Productos");
        }
      })
      
    }, [categoria])
    
    return (
      <div>
          <ItemList productos={productos} titulo={titulo}/>
      </div>
  )
}

export default ItemListContainer