import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ItemDetail =({productos})=> {
return(    
      
  <div className="card" key={productos.id}>
    
            <img src={productos.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{productos.nombre}</h5>
                    <h6 className="card-title">{productos.descripcion}</h6>
                    <h6 className="card-title">${productos.precio}</h6>
                    </div>

                    <Link to={`/Carrito`} type='button' className="btn btn-primary" >Agregar al carrito</Link>
                    <br />  
                    <Link to={`/`} type='button' className="btn btn-secondary" >Volver</Link>
        </div>
         )}       
export default ItemDetail;