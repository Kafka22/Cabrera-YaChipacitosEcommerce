import React, { useEffect, useState } from 'react'

export const ResizeComponent = () => {
    //caja donde guardo el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
            //funcion que se va a ejecutar cada vez que ajuste la pantalla
            const handleResize = () =>{
                setWindowWidth(window.innerWidth) //actualizar
            }
            //decirle al navegador que empieze a escuchar el resize
    window.addEventListener("resize", handleResize)
    
    return()=>{
        window.removeEventListener("resize", handleResize)
    }

    }, [])

    return (
    <div>
        <h1>El ancho de la ventana es: {windowWidth} </h1>
    </div>
  )
}
