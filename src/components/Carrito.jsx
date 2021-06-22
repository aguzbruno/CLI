// import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart} from "../components/CartContext"


function Carrito(){
  const cart = useCart();
  // const preciototal=`${cart.cart[1].precio} * ${cart.cart[1].cantidad} `
  // for (i=0; i<cart.length; i++){
  //   <h2>{cart.cart[1].item} x {cart.cart[i].cantidad} </h2>
  // }
  let objetos=[]
  const preciototal=0;
function VaciarCarrito(){
// cart.cart=[]
// alert("Desapareceran todo lo que agregaste")
cart.cart.splice([],1);
}
function removeItem(n){
  // cart.cart=[]
  // alert("Desapareceran todo lo que agregaste")
  cart.cart.splice([n],1);
  
  }
  return(
    
    <>
     <h2>Mi carrito</h2>

     {
      cart.cart.map(item=>(
        
      <div>
        <strong key={item.id}>{item.item}</strong> x {item.cantidad} <strong>${item.precio*item.cantidad} </strong> <button  className="btn btn-primary" onClick={()=>{removeItem(item.id)}}>Eliminar Producto </button> <br />
        <br />
      </div>
      
          
      ))

      }
      <h2>Total: {}</h2>
      <BotonFinalizar ></BotonFinalizar> <br /><br />
      <button onClick={VaciarCarrito} className="btn btn-secondary">Vaciar Carrito</button>
      
  </>
  );
  }
  
  export default Carrito;
  