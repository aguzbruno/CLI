import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart} from "../components/CartContext"
import Carrito from "../components/Carrito"
import {useCount}from "../components/Context2"

const ItemDetail =({productos})=> {
const [carrito, setcarrito]= useState(false);

const cart = useCart();


function Agregaralcarrito1(){
  setcarrito(true)
  cart.addItem([productos.nombre,productos.id]);
  console.log(cart)
}
// function Finalizarcompra(){
//   <Carrito itemsencarrito={itemsencarrito}></Carrito>
// }

return(    

  <div className="card" key={productos.id}>
     
            <img src={productos.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{productos.nombre}</h5>
                    <h6 className="card-title">{productos.descripcion}</h6>
                    <h6 className="card-title">${productos.precio}</h6>
                    </div>
                    <Contador/>
                    {carrito ?  <BotonFinalizar ></BotonFinalizar> : <Botoncarrito Agregaralcarrito={Agregaralcarrito1}></Botoncarrito>}
                    
                    <br />  
                    <Link to={`/`} ><button  className="btn btn-secondary">  Volver</button></Link>
                    
        </div>
         )}       
export default ItemDetail;