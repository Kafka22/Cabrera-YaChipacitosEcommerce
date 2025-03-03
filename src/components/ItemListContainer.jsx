import React, { useContext } from 'react';
import { getProducts } from '../mock/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import CenteredComponent from './ejemplos/CenteredComponent';
import { useParams } from 'react-router-dom';
import { ResizeComponent } from './ejemplos/ResizeComponent';
import FormComponent from './ejemplos/FormComponent';
import ActividadEventos from './ejemplos/ActividadEventos';
// import { ThemeContext } from './ejemplos/ThemeContext';
import LoaderComponent from './ejemplos/LoaderComponent';
import { collection, query, where } from 'firebase/firestore';
import { db } from "../services/firebase"
import { getDocs } from 'firebase/firestore';
const ItemListContainer = ({ greeting, stock }) => {

  const [productsList, setProductsList] = useState ([])
  const [loader, setLoader] = useState (false)
  const {categoryId}= useParams();
  // const {theme, cambiarTema} = useContext (ThemeContext)
  // console.log(categoryId)
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

  //EJEMPLO DE EVENTOS


  //FIREBASE
  useEffect(() => {
    setLoader(true)
    //conecto con mi coleccion
    const productsCollection = categoryId 
    ? query(collection(db, "products"), where("category", "==", categoryId)) 
    : collection(db, "products")
    //pedir los documentos
    getDocs(productsCollection)
    .then((res)=>{
      const list = res.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      setProductsList(list)
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoader(false))
  },[categoryId])

  //PROMESA LOCAL
  // useEffect(()=>{
  //   //prender el loader

  //   setLoader(true)

  //   // console.log(getProducts(), "promesa")
  //   getProducts()
  //   .then((res)=> {
  //     if(categoryId){
  //       setProductsList(res.filter((item)=> item.category === categoryId))
  //     }else {
  //       setProductsList(res)
  //     }
  //   })
  //   .catch((error)=> console.log(error, "error")) 
  //   //apago el loader al final
  //   .finally(()=> setLoader(false))
  // },[categoryId])

  // console.log(productsList, " data");  

  return (
    <>
    {stock === 0
        ? <p>Lo sentimos no hay stock disponible</p> 
        : 
        
        <CenteredComponent>
        {/* <ResizeComponent></ResizeComponent> */}
        {/* <ActividadEventos/> */}
        {/* <FormComponent/> */}
        
        {/* <h3>El tema es: {theme ? "dark" : "ligth"} </h3> */}
        {/* <button onClick={cambiarTema}>cambiar tema</button> */}
        
        {/* {productsList.map((producto)=> <p key={product.id}>{producto.name}</p>)} */}
        {loader 
        ? <LoaderComponent/> 
        :
        <div>
          <p>{greeting} {categoryId 
          && <span style={{color:"red"}}>{categoryId} </span> } </p> 
          <ItemList productsList ={productsList} />
        </div>
        }
        
      </CenteredComponent>
    }
    
    </>
  )
};

export default ItemListContainer;
