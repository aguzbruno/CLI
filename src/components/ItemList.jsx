import Item from "./Item"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList (){
    const arrProducts = [ {
        nombre: "Bacon",
        id:1,
        url: "https://ver.rosario.gob.ar/media/cache/97/ca/97ca2fe2afbefb7e8ab4530f0242b0e4.png" ,
        descripcion: "Hamburguesa doble con panceta",
      }
      ,{
        nombre: "Fried",
        id:2,
        url: "https://ver.rosario.gob.ar/media/cache/a1/d6/a1d61c45813f60c97f7fdcfd16f736a7.png" ,
        descripcion: "Hamburguesa doble con cebolla",
      }
      ,{
        nombre: "Fried",
        id:2,
        url: "https://ver.rosario.gob.ar/media/cache/a1/d6/a1d61c45813f60c97f7fdcfd16f736a7.png" ,
        descripcion: "Hamburguesa doble con cebolla",
      }
     ]

    const [productos, setProductos]= useState([]);

    const obtenerProductos = async()=> {
        setTimeout(()=>{
            const datosProductos = arrProducts;
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
        
    {productos.map( item => <Item item = {item}/>
    
   
    
    )}
    


</div>
</>
);
}


export default ItemList;