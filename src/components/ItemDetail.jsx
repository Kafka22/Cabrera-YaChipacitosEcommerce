import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    // const [quantity, setQuantity] = useState(null);

    // const onAdd = (cantidad) => {
    //     setQuantity(cantidad)
    //     alert(`Agregaste ${cantidad} al carrito`);
    //   };

    const [purchase, setPurchase] = useState(false)
    const {cart, addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
      setPurchase(true)
      addItem(item, cantidad)
      alert(`Agregaste ${cantidad} al carrito`);
    };
    console.log(cart, "carrito")
    if (!item) {
        return <p>Loading...</p>; // Muestra un mensaje mientras se cargan los datos
      }
  return (
    <div>
      <h1>Detalle de: {item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>{item.descripcion}</p> 
      <p>Stock disponible: {item.stock}</p>
      <p>Precio: ${item.price}</p>

      {/* //como lo pide la actividad */}
      {/* {!quantity 
      ? <ItemCount stock={item.stock} onAdd={onAdd} />
      : <button className='btn btn-dark' >Ir al carrito</button> } */}
      {/* como conviene */}
      {!purchase 
      ? <ItemCount stock={item.stock} onAdd={onAdd} />
      : <Link to="/cart" className='btn btn-dark' >Ir al carrito</Link> }
    </div>
  )
}

export default ItemDetail