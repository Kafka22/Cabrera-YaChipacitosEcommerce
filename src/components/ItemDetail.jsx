import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} al carrito`);
      };
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
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail