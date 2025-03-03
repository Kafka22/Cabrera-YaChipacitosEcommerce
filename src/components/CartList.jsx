import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CardItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart, clear, cartTotal} = useContext(CartContext)
  return (
    <div style= {{width:"100%", padding: "2rem", display:"flex", flexDirection: "column", alignItems: "center"}} >
        {cart.map((compra)=> <CardItem compra= {compra} key= {compra.id} /> )}
        <span>Total a pagar ${cartTotal()} </span>
        <div style={{display:"flex", justifyContent: "space-around", alignItems: "center", paddingTop: 24}}>
           <button style={{margin: 24}}className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
          <Link className='btn btn-dark' to="/checkout">Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartList