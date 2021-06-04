import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"

const ItemDetail =({productos})=> {
    const elItem = arrProducts.find(productos=>productos.id===item.id)

  return(    
      
  <div className="card" key={elItem.id}>
    
            <img src={elItem.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{elItem.nombre}</h5>
                    <h6 className="card-title">{elItem.descripcion}</h6>
                    <a href="item" className="btn btn-primary">Anadir al carrito</a>
                </div>
        </div>
         )}       
export default ItemDetail;