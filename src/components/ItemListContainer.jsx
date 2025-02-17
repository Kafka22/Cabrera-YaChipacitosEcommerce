import React from 'react';
import { getProducts } from '../mock/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CenteredComponent from './ejemplos/CenteredComponent';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({ greeting, stock }) => {

  const [productsList, setProductsList] = useState ([])
  const [loader, setLoader] = useState (false)
  const {categoryId}= useParams();
  console.log(categoryId)
  //EJEMPLO DE PROMESA
  // const error = true;
  // const ejemploPromise = new Promise((resolve, reject)=>{
  //   if (error){
  //     reject("no tenemos chipas")
  //   } else{
  //     resolve("tu pedido esta siendo preparado!")
  //   }
  // })
  // console.log (ejemploPromise);
  useEffect(()=>{
    //prender el loader

    setLoader(true)

    // console.log(getProducts(), "promesa")
    getProducts()
    .then((res)=> {
      if(categoryId){
        setProductsList(res.filter((item)=> item.category === categoryId))
      }else {
        setProductsList(res)
      }
    })
    .catch((error)=> console.log(error, "error")) 
    //apago el loader al final
    .finally(()=> setLoader(false))
  },[categoryId])

  // console.log(productsList, " data");  

  return (
    <>
    {stock === 0
        ? <p>Lo sentimos no hay stock disponible</p> 
        : <CenteredComponent>
        <p>{greeting} {categoryId && <span style={{color:"red"}}>{categoryId} </span> } </p>
        
        {/* {productsList.map((producto)=> <p key={product.id}>{producto.name}</p>)} */}
        {loader ? <p>Cargando...</p> : <ItemList productsList ={productsList} />}
        
      </CenteredComponent>
    }
    
    </>
  )
};

export default ItemListContainer;
