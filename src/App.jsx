import './App.css'
import EjemploProps from './components/EjemploProps'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
// app es el papa de todos los componentes
function App() {
  const bienvenida = "bienvenidos a mi app"
  return(
    <>
    <NavBar/>
    <ItemListContainer greeting = "bienvenidos a YaChipacitos!"/>
    <div>
    <h1 className='titulo'>Hola🎃</h1>   
    <h2 style={{color:'purple', fontSize: "18px"}}>{bienvenida}</h2>
    {/* importo un componente */}
    <EjemploProps bienvenida = {bienvenida} texto ="hola soy prop" count ={5} />
    </div>
    </>
    
  )
}

export default App
