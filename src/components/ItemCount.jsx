import React, { useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';
const ItemCount = ({ stock, onAdd }) => {
  const {count, add, subtract} = useCounter(stock)
  // const [count, setCount] = useState(1);
  // const [purchase, setPurchase] = useState(false)
 function addToCart(){
  onAdd(count);
  // setPurchase(true);
 }

  //------------------------------------
  // useEffect(()=>{
  //   // console.log("se ejecuta siempre, useEffect sin array de dependencias");
  // })

  // useEffect(()=>{
  //   // console.log("se ejecuta una vez, useEffect con array de dependencias vacio");
  // },[])

  
  // useEffect(()=>{
  //   // console.log("se ejecuta una vez, useEffect se ejecuta una vez y luego se ejecuta cuando cambia el dato que esta escuchando");
  // },[purchase])

  // const add = () => {
  //   if (count < stock) {
  //     setCount(count + 1);
  //   }
  // };

  // const subtract = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <div>
      <div>
        <button onClick={subtract} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={add} disabled={count === stock}>+</button>
      </div>
      <button 
        disabled={stock === 0 || count === 0} 
        // onClick={() => onAdd(count)}
        onClick={addToCart}        

      >
        Agregar a carrito
      </button>
    </div>
  );
};

export default ItemCount;
