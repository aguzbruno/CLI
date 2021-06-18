import { Divider } from "@material-ui/core";
import {React, useState} from "react";
import '../index.css'
import {useCount}from "../components/Context2"

const Contador = ({stock, initial}) => {
const count = useCount();
console.log(count);

return (
    <>
    
    <div >
        
        <button className="contador" onClick={()=>agregacontador(-1)}>-</button>
        <p  className="contador2">{count}</p>
        <button className="contador" onClick={()=>agregacontador(1)}>+</button>

    </div>
    </>
)
}

export default Contador;