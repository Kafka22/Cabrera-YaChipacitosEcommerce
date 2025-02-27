import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
const NavBar = () =>{
    return (
        <nav className='navbar'>
            <NavLink className="logoContainer" to="/" >

            <img src="../imagenes/logo.png"  alt="Logo" />
            </NavLink>
            <ul>
                <li><NavLink path="/category" to="/category/sucursales/">Sucursales</NavLink></li>
                <li><NavLink path="/category" to="/category/menu/" >Menu</NavLink></li>
                <li><NavLink path="/category" to="/category/promociones/">Promociones</NavLink></li>
                <li><NavLink path="/category" to="/category/merch/">Merch</NavLink></li>
                <li><NavLink to="/cart"><CartWidget/></NavLink></li>
            </ul>
        </nav>
        
    )
}
export default NavBar