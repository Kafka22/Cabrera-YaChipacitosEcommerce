import React, { useEffect, useState } from 'react'
import FetchList from './FetchList';
const FetchContainer = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState (null)
    useEffect(()=>{
        setLoading(true)
        setError(null)
        //pedir los datos
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=> res.json()) //convertir a formato json
        .then((data)=> setPersonajes(data.results))//guardar la respuesta
        .catch((error)=> setError(true))
        .finally(()=> setLoading(false))
    }, [])
    console.log(personajes, "personajes")
    
    if(error){
        return <p>Lo sentimos, intente mas tarde</p>
    }

    return (
        <div>   
            {loading ? <p>Cargando personajes...</p> : <FetchList personajes={personajes} />}
        </div>
    )
    }

export default FetchContainer