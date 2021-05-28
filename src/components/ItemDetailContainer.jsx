import ItemDetail from "./ItemDetail"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetailContainer (){
    

    const [productos, setProductos]= useState([]);

    const obtenerProductos = async()=> {
        setTimeout(()=>{
            const datosProductos = ItemDetail;
            setProductos (datosProductos);
        },2000);
    }

    useEffect (function (){
        console.log ('me ejecute');
        obtenerProductos();
    },[]);

    return(
    <>
    <div > 
        
    {productos.map((item)=>{
        return (
            
         
        <div className="card1" key={item.id}>
            <img src={item.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <p className="card-text">{item.precio}</p>
                    <a href="#" class="btn btn-primary">Anadir al carrito</a>
                </div>
        </div>
     
  
            
           
        
        )
       
    })

}
</div>
</>
);
}


export default ItemDetailContainer