import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Contacto from "./components/Pages/Contacto";
import Carrito from "./components/Pages/Carrito";
//import Productos from "./components/Pages/Productos";
import { CartProvider } from "./Context/CartContext";



function App() {

   return (
    <div>
      <CartProvider> 
      <BrowserRouter> 
       
        <NavBar />

        <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={ <ItemDetailContainer />}/>
        <Route path="/Productos" element={<ItemListContainer />}/>
        <Route path="/Productos/:categoria" element={<ItemListContainer />}/>
        <Route path="/Carrito" element={<Carrito />}/>
        </Routes>
        

      </BrowserRouter>
      </CartProvider>  
       
     
     
    </div>
  );
}




export default App;
