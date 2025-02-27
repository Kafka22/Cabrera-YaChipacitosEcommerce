import React from 'react'

const ActividadEventos = () => {
    const noVocals = (e)=>{
        console.log(e)
        if("aeiou".includes(e.key.toLowerCase())){
            e.preventDefault()
            alert("no vocales!")
        }
    }
    return (
    <div>
        <h1>No se puede vocales</h1>
        <input placeholder='no vocales' type="text" onKeyDown={noVocals} />
    </div>
  )
}

export default ActividadEventos