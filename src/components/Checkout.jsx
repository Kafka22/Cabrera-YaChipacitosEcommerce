import React, { useContext, useState } from 'react'
import { addDoc, collection, serverTimestamp, getDoc, updateDoc } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'
import { doc } from 'firebase/firestore'
const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateMail, setValidateMail] =useState("")
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
    //con mini customhook
    // const {cart, cartTotal} = useCart()

    //sin customhook
    const {cart, cartTotal, clear} = useContext(CartContext)
    //captura y arma el objeto del comprador
    const userData = (e) => {
        
        setUser(
        {...user,
        [e.target.name]: e.target.value}
    )
}

console.log(user, validateMail)
    const finalizarCompra = (e) => {
        //para que no recargue la pagina
        e.preventDefault()
        //valido el formulario
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert("completa los campos")
        }else if (user.email !== validateMail){
            alert("los mails deben ser iguales")

        }else{  //armar los datos para llevar a firebase
            setLoading(true)

            let orden = {
                buyer: user,
                shop: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            //agregar un documento
            addDoc(ventas, orden)
            .then((res)=> {
                cart.forEach((item)=>{
                    const docRef = doc(db, "products", item.id)
                    //traer el doc
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                    .catch((error)=>console.log(error))
                })
                setOrderId(res.id)
                clear()
            }
                
        )
            .catch((error)=>console.log(error))
            .finally(()=> setLoading(false))
        }
        if(loading){
            return <p>Cargando solicitud</p>
        }
    }

  return (
    <>
    {orderId !== "" 
    ?   <div>
        <h4>Generaste bien tu orden</h4>
        <h5>El id es: {orderId} </h5>
        <Link className="btn btn-primary" to="/">Volver a Home</Link>
        </div>
    :   <div>
        <h1>Completa con tus datos</h1>
        <form className='d-flex flex-column align-items-center w-50' onSubmit={finalizarCompra}>
            <input className='form-control' type="text" name="name" placeholder='Ingrese su nombre' onChange={userData}/>
            <input className='form-control' type="text" name="lastname" placeholder='Ingrese su apellido' onChange={userData}/>
            <input className='form-control' type="text" name="address" placeholder='Ingrese su direccion' onChange={userData}/>
            <input className='form-control' type="email" name="email" placeholder='Ingrese su correo' onChange={userData}/>
            <input className='form-control' type="email" name="second-email" placeholder='Repita su correo' onChange={(e)=> setValidateMail(e.target.value)}/>
            <button className='btn btn-danger' type='submit'>Enviar</button>
        </form>
        </div>
     }
    </>
  )
}

export default Checkout