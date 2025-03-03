import React from 'react'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom' 
import EmptyCart from "../EmptyCart";  // Asegúrate de que la ruta sea correcta


const CheckoutUseForm = () => {
    const [orderId, setOrderId] = useState("") 
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, clear, cartTotal } = useContext(CartContext)

    const onSubmit = (dataDelForm) => {
        

        let order = {
            buyer: {
                name: dataDelForm.name,
                lastname: dataDelForm.lastname,
                address: dataDelForm.address,
                email: dataDelForm.email
            },
            cart: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
    }

  
    if (!cart.length && !orderId) {
        return <EmptyCart/>
    }

    return (
        <>
            {orderId 
            ? <div> 
                <h1>¡Generaste tu orden con éxito!</h1>
                <h4>El código de seguimiento es: {orderId} </h4>
                <Link to="/" className="btn btn-dark">Volver a Home</Link>
              </div> 
            : <div>
                <h1>Completa el Formulario con tus datos</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre</label>
                    <input className='form-control' name="name" {...register("name", {required:true, minLength:3})} />
                    {errors?.name?.type === "required" && <p style={{color:"red"}}>Por favor complete el campo nombre</p>}
                    {errors?.name?.type === "minLength" && <p style={{color:"red"}}>El nombre debe contener mínimo 3 caracteres</p>}

                    <label>Apellido</label>
                    <input className='form-control' name="lastname" {...register("lastname", {required:true, minLength:3})} />
                    {errors?.lastname?.type === "required" && <p style={{color:"red"}}>Por favor complete el campo apellido</p>}
                    {errors?.lastname?.type === "minLength" && <p style={{color:"red"}}>El apellido debe contener mínimo 3 caracteres</p>}

                    <label>Dirección</label>
                    <input className='form-control' name="address" {...register("address", {required:true, minLength:3})} />
                    {errors?.address?.type === "required" && <p style={{color:"red"}}>Por favor complete el campo dirección</p>}
                    {errors?.address?.type === "minLength" && <p style={{color:"red"}}>La dirección debe contener mínimo 3 caracteres</p>}

                    <label>Email</label>
                    <input className='form-control' name="email" {...register("email", {required:true, minLength:3})} />
                    {errors?.email?.type === "required" && <p style={{color:"red"}}>Por favor complete el campo email</p>}
                    {errors?.email?.type === "minLength" && <p style={{color:"red"}}>El email debe contener mínimo 3 caracteres</p>}

                    <label>Confirmación de Email</label>
                    <input className='form-control' name="email2" {...register("email2", {required:true, minLength:3, validate: {equalsMails: mail2 => mail2 === getValues().email}})} />
                    {errors?.email2?.type === "required" && <p style={{color:"red"}}>Por favor complete el campo</p>}
                    {errors?.email2?.type === "minLength" && <p style={{color:"red"}}>El email debe contener mínimo 3 caracteres</p>}
                    {errors?.email2?.type === "equalsMails" && <p style={{color:"red"}}>Los emails deben coincidir</p>}

                    <button className='btn btn-danger' type="submit" disabled={!cart.length}>Confirmar Compra</button>
                </form>
              </div>
            }
        </>
    )
}

export default CheckoutUseForm
