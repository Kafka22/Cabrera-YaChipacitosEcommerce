import {createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext()
//declaro el provedor
export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]); 
        const addItem = (item, quantity)=>{
            let compra = {...item, quantity}
            if (isInCart(item.id)){
                const carritoActualizado = cart.map((prod)=>{
                    if(prod.id === item.id){
                        //sumar cantidades
                        return {...prod, quantity: prod.quantity + quantity}
                    }else{
                        return prod
                    }
                })
                setCart(carritoActualizado)
            }else{
                setCart([...cart, compra])
            }

            
            
        }

        const removeItem = (id) => {
            setCart(cart.filter((item)=>item.id !== id))
        }

        const clear = () => {
            setCart([])
        }

        const isInCart = (id) => {
            return cart.some((item) => item.id === id)
        }
    
        const cartQuantity = () => {
            return cart.reduce((acc, item)=> acc += item.quantity , 0)
        }

        const cartTotal= () => {
            return cart.reduce((acc, item)=> acc += item.price * item.quantity , 0)
        }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

