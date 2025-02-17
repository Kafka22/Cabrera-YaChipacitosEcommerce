import './App.css'
import EjemploPropChildren from './components/ejemplos/EjemploPropChildren'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import FetchContainer from './components/ejemplos/FetchContainer'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting= "bienvenidos" />} ></Route>
      <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
      <Route path="/category/:categoryId" element={<ItemListContainer greeting= "Categoria: " />}></Route>

    </Routes> 
    
    {/* <EjemploPropChildren/> */}
    {/* <FetchContainer/> */}
    
    
    </BrowserRouter>
  )
}

export default App
