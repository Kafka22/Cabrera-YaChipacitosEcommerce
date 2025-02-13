import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import CenteredComponent from './ejemplos/CenteredComponent'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    useEffect(()=>{
        getOneProduct("03")
        .then ((res)=> setItem(res))
        .catch ((error)=> console.log(error))
    },[] )
    return (
    <CenteredComponent>
        <ItemDetail item={item} />
    </CenteredComponent>
  )
}

export default ItemDetailContainer