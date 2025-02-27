import React, {createContext, useState} from "react"

//creo el contexto
export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false) //estado inicial del contexto
    //Funciones
    const cambiarTema = ()=>{
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme, cambiarTema}}>
            <div className={theme === true ? "bg-dark text-ligth" : "bg-ligth text-dark"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}