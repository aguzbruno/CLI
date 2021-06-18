import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart} from "../components/CartContext"
import Delivery from "../components/Delivery"

function Carrito(){

    return(
      <>
    <h1></h1>
   
  </>
  );
  }
  
  export default Carrito;