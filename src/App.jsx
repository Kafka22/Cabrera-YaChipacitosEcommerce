import './App.css'
import EjemploPropChildren from './components/ejemplos/EjemploPropChildren'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import FetchContainer from './components/ejemplos/FetchContainer'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
// import { ThemeProvider } from './components/ejemplos/ThemeContext'
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= "bienvenidos" />} ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting= "Categoria: " />}></Route>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="/checkout" element={<Checkout/>} />
          </Routes> 
          
          {/* <EjemploPropChildren/> */}
          {/* <FetchContainer/> */}
      </CartProvider>

        
    </BrowserRouter>
  )
}

export default App
