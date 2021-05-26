import CartWidget from  './CartWidget';
import logo from '../Icono/logo.png'
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar =({saludo})=>{
  return (
  <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       
       <a className="navbar-brand" href="#">Inicio</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"></button>
       </div>
       <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delivery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
        
        <CartWidget/>
        
        </div>
      </nav>
  </header>


)
};
export default Navbar;