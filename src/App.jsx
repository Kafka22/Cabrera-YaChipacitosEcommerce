import './App.css'
import EjemploPropChildren from './components/ejemplos/EjemploPropChildren'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import FetchContainer from './components/ejemplos/FetchContainer'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting= "bienvenidos" />
    <EjemploPropChildren/>
    {/* <FetchContainer/> */}
    <ItemDetailContainer/>
    </>
  )
}

export default App
