import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Pages/Contacto";
import Carrito from "./components/Pages/Carrito";
import Productos from "./components/Pages/Productos";


function App() {

  return (
    <div>
      <BrowserRouter> 
       
        <NavBar />

        <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={ <ItemDetailContainer/>}/>
        <Route path="/Productos" element={<ItemListContainer/>}/>
        <Route path="/Productos/:categoria" element={<ItemListContainer />}/>
        </Routes>
        

        
       
     
      </BrowserRouter>
    </div>
  );
}




export default App;
