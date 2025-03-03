import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../mock/data';
import ItemDetail from './ItemDetail';
import CenteredComponent from './ejemplos/CenteredComponent';
import { useParams } from 'react-router-dom';
import LoaderComponent from './ejemplos/LoaderComponent';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Link } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [productDetail, setProductsDetail] = useState({})
    const [loading, setLoading] = useState (false)
    const [invalidItem, setInvalidItem] = useState(false)
    const {id} = useParams()

    //FIREBASE
    useEffect(() => {
        setLoading(true)
        //conectar con nuestra coleccion
        const productCollection = collection(db, "products")
        //crear una referencia
        const docRef= doc(productCollection, id)
        //traer el documento
        getDoc(docRef)
        .then((res)=>{  
            if (res.data()){
                setProductsDetail({id:res.id, ...res.data()})
            }else{
                setInvalidItem(true)
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    }, [])


    //PROMISE LOCAL
    // useEffect(() => {
    //     // Asegúrate de que getOneProduct esté recibiendo el id correctamente
    //     getOneProduct(id)
    //         .then((res) => setItem(res))
    //         .catch((error) => console.log(error));
    // }, [id]); // Agregamos id como dependencia para que el useEffect se ejecute cuando id cambie
    if (invalidItem){
        return <div>
            <h2>El item no existe</h2>
            <Link to= "/" className= "btn btn-dark">Volver a Home</Link>
        </div>
    }
    return (
        <CenteredComponent>
            {/* Muestra "Loading..." mientras el item sea null */}

            {loading
            ?  <LoaderComponent/>
            :  <ItemDetail productDetail={productDetail} />
            }
        </CenteredComponent>
    );
};

export default ItemDetailContainer;
