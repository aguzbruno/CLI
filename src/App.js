import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Contador from "./components/Contador"
import ItemList from "./components/ItemList"
import Contacto from "./components/Contacto"
import Delivery from "./components/Delivery"
import Carrito from "./components/Carrito"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {CartProvider} from "./components/CartContext"


function App(){

  return(
    <>
<div>
  <CartProvider>
<BrowserRouter> 
  <Navbar/>
  <Switch>
    <Route exact path="/"> 
    <ItemListContainer/>

      {/* <ItemListContainer/> */}
     {/* <Contador stock={10} initial={0}/> */}
      <br></br>
      </Route>
    <Route exact path="/items/:id">
    <ItemDetailContainer/>
    </Route>
    <Route exact path="/Delivery">
    <Delivery/>
    </Route>
    <Route exact path="/Contacto">
    <Contacto/>
    </Route>
    <Route exact path="/Carrito">
    <Carrito/>
    </Route>
  </Switch>
  
</BrowserRouter> 
</CartProvider>
</div>
</>
);
}

export default App;