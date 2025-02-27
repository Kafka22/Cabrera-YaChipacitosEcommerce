import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../mock/data';
import ItemDetail from './ItemDetail';
import CenteredComponent from './ejemplos/CenteredComponent';
import { useParams } from 'react-router-dom';
import LoaderComponent from './ejemplos/LoaderComponent';
const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams(); // Obtenemos solo el id desde useParams
    console.log("ID recibido:", id); // Para verificar que el id sea el correcto

    useEffect(() => {
        // Asegúrate de que getOneProduct esté recibiendo el id correctamente
        getOneProduct(id)
            .then((res) => setItem(res))
            .catch((error) => console.log(error));
    }, [id]); // Agregamos id como dependencia para que el useEffect se ejecute cuando id cambie

    return (
        <CenteredComponent>
            {/* Muestra "Loading..." mientras el item sea null */}
            {item ? <ItemDetail item={item} /> : <LoaderComponent/>}
        </CenteredComponent>
    );
};

export default ItemDetailContainer;
