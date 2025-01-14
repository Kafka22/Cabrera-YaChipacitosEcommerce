import './App.css'
// app es el papa de todos los componentes
function App() {
  const bienvenida = "bienvenidos a mi app"
  return (
    <>
    <h1 className='titulo'>Hola🎃</h1>   
    <h2 style={{color:'purple', fontSize: "18px"}}>{bienvenida}</h2>
    </>
  )
}

export default App
