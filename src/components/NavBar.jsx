import CartWidget from "./CartWidget"
const NavBar = () =>{
    return (
        <nav className='navbar'>
            <img src="./src/assets/logo.png"  alt="Logo" />
            <ul>
                <li><a href="">Sucursales</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Promociones</a></li>
                <li><a href="">Merch</a></li>
                <li><a href=""><CartWidget/></a></li>
            </ul>
        </nav>
        
    )
}
export default NavBar