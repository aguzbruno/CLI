import { Divider } from "@material-ui/core";
import {React, useState} from "react";
import '../index.css'

const Contador = ({stock, initial}) => {
const [count, setCount]=useState(initial);
const agregar= (n) => {
    (count + n <= stock) && (count + n >= 1) ? setCount (count + n) : alert("Estas seleccionando el 0 o superando el stock")}



return (
    <div >
        <button className="contador" onClick={()=>agregar(-1)}>-</button>
        <p  className="contador2">{count}</p>
        <button className="contador" onClick={()=>agregar(1)}>+</button>

    </div>
)
}

export default Contador;