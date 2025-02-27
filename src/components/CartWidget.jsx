import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () =>{
    const {cartQuantity} = useContext(CartContext)
    return(
            <div className="cartWidget-container">
                <span>🛒</span>
                <span> {cartQuantity()} </span>
            </div>
        )
}
export default CartWidget