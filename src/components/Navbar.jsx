import CartWidget from  './CartWidget';
import logo from '../Icono/logo.png'
import '../index.css'

const Navbar =({saludo})=>{
  return (
  <header>
      <nav className="NavBar">
       <ul> <li>
          <a href="">INICIO</a>

        </li>
        <li>
        <a href="">PRODUCTOS</a>

        </li>

        <li>
        <a href="">NOSOTROS</a>
        <div className="logo-container">
          <img className="logobump" src={logo} alt="logo" />
        </div>
        </li>
        <li>
        <a href="">CONTACTO</a>
        </li>
        <CartWidget/>
        </ul>
      </nav>
  </header>


)
};
export default Navbar;