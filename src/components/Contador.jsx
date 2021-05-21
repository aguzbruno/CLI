import { Divider } from "@material-ui/core";
import {React, useState} from "react";


const Contador = ({stock, initial}) => {
const [count, setCount]=useState(0);
const agregar= (n) => {
    (count + n <= stock) && (count + n >= 0) ? setCount (count + n) : console.log("error")}



return (
    <div>
        <button className="Suma" onClick={()=>agregar(-1)}>-</button>
        <p className="numero" >{count}</p>
        <button className="Resta" onClick={()=>agregar(1)}>+</button>

    </div>
)
}

export default Contador;