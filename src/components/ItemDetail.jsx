import { BackupOutlined } from "@material-ui/icons";
import React from "react";

const ItemDetail =({itemdetail})=> {
  
  return(    
      
  <div className="card" key={itemdetail.id}>
    
            <img src={itemdetail.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{itemdetail.nombre}</h5>
                    <h6 className="card-title">{itemdetail.descripcion}</h6>
                    <a href="#" class="btn btn-primary">Anadir al carrito</a>
                </div>
        </div>
         )}       
export default ItemDetail;