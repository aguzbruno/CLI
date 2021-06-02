import { BackupOutlined } from "@material-ui/icons";
import React from "react";
const Item =({item})=> {
  
  return(    
      
  <div className="card" key={item.id}>
    
            <img src={item.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <a href="#" class="btn btn-primary">Anadir al carrito</a>
                </div>
        </div>
         )}       
export default Item;