import React from 'react'
import Item from './Item'
const ItemList = ({productsList}) => {
  return (
    <div style={{width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems:"center"}} className='d-flex justify-content-around align-items-center gap-3 flex-wrap'>
        {productsList.map((product)=> <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList
