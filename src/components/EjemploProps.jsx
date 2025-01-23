// const EjemploProps = (props) =>{
// para el ejemplo de arriba los llamamos en la funcion como props.bienvenida..etc
import { useState } from "react"
const EjemploProps = ({bienvenida, count, texto}) =>{
    const [text, setText] = useState("hola")
    const changeText = () =>{
        setText("chau")
    }
       return (
        <div>
            {/* //si no voy a utilizar estilos uso fragment <></> */}
            <p> {bienvenida} </p>
            <p> {texto} </p>
            <p> {count} </p>
            <p>{text} </p>
            <button onClick={changeText}>cambiar</button>
        </div>
)
    
    //un componente retorna codigo jsx. Siempre retorna un solo elemento. se nombran en mayuscula
}
//afuera del cierre de mi funcion exporto
export default EjemploProps