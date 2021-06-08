import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";

const ItemDetail =({productos})=> {
const compraok=false;
const [carrito, setcarrito]= useState(false);
function Agregaralcarrito1(){
  console.log("hola")
  setcarrito(true)
  
}
console.log(Agregaralcarrito1)

return(    

  <div className="card" key={productos.id}>
     
            <img src={productos.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{productos.nombre}</h5>
                    <h6 className="card-title">{productos.descripcion}</h6>
                    <h6 className="card-title">${productos.precio}</h6>
                    </div>
                    <Contador stock= {10} initial={1} />
                    {carrito ?  <BotonFinalizar></BotonFinalizar> : <Botoncarrito Agregaralcarrito={Agregaralcarrito1}></Botoncarrito>}
                    
                    <br />  
                    <Link to={`/`} ><button  className="btn btn-secondary">  Volver</button></Link>
                    
        </div>
         )}       
export default ItemDetail;