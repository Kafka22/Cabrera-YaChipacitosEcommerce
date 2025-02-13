import React from 'react'
import FetchCard from './FetchCard'

const FetchList = ({personajes}) => {
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
        {personajes.map((personaje)=> <FetchCard key={personaje.id} personaje={personaje} /> )}
    </div>
  )
}

export default FetchList