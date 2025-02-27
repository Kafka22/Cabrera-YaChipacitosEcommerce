import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem} = useContext(CartContext)
  return (
    <div style={{margin: 24, display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <img src={compra.img} alt={compra.name} style={{width:"10rem"}}/>
        <span style={{margin: 24}}>{compra.name}  </span>
        <span style={{margin: 24}}>cantidad: {compra.quantity}  </span>
        <span style={{margin: 24}}> ${compra.price} </span>
        <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>Eliminar Producto</button>
    </div>
  )
}

export default CartItem